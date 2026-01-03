(function() {
  const SUPPORTED_FORMATS = {
    pdf: /\.pdf$/i,
    pptx: /\.pptx?$/i,
    docx: /\.docx?$/i,
    xlsx: /\.xlsx?$/i,
    txt: /\.txt$/i
  };

  const isSupported = url => {
    try {
      const pathname = new URL(url).pathname;
      return Object.values(SUPPORTED_FORMATS).some(regex => regex.test(pathname));
    } catch {
      return false;
    }
  };

  const getFileType = url => {
    try {
      const pathname = new URL(url).pathname;
      for (const [type, regex] of Object.entries(SUPPORTED_FORMATS)) {
        if (regex.test(pathname)) return type;
      }
    } catch { }
    return null;
  };

  const cleanUrl = url => {
    const u = new URL(url);
    u.searchParams.delete("forcedownload");
    return u.toString();
  };

  // Store blob URLs for the popup to access
  const viewerCache = {};

  const openViewer = async (url, fileType) => {
    try {
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      // For PDFs, use browser's default viewer
      if (fileType === "pdf") {
        window.open(blobUrl, "_blank", "noopener,noreferrer");
        return;
      }

      // Create viewer HTML for other formats
      const viewerHtml = createViewerHtml(blobUrl, fileType, url);

      // Create a blob from the HTML
      const htmlBlob = new Blob([viewerHtml], { type: 'text/html' });
      const viewerBlobUrl = URL.createObjectURL(htmlBlob);

      // Store reference for cleanup
      viewerCache[viewerBlobUrl] = [viewerBlobUrl, blobUrl];

      window.open(viewerBlobUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Document Viewer Error:", err);
      alert(`Failed to open document: ${err.message}`);
    }
  };

  const createViewerHtml = (blobUrl, fileType, originalUrl) => {
    const fileName = originalUrl.split("/").pop() || `document.${fileType}`;

    let viewerContent = "";

    switch (fileType) {
      case "pdf":
        viewerContent = `
          <div id="pdf-viewer" style="width:100%; height:calc(100% - 60px); overflow:auto;"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"><\/script>
          <script>
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            let currentPage = 1;
            let totalPages = 0;
            
            async function loadPdf() {
              try {
                const pdf = await pdfjsLib.getDocument('${blobUrl}').promise;
                totalPages = pdf.numPages;
                document.getElementById('page-info').textContent = \`1 / \${totalPages}\`;
                renderPage(pdf, 1);
                
                document.getElementById('prev-btn').onclick = () => {
                  if (currentPage > 1) renderPage(pdf, --currentPage);
                };
                document.getElementById('next-btn').onclick = () => {
                  if (currentPage < totalPages) renderPage(pdf, ++currentPage);
                };
              } catch(e) {
                document.getElementById('pdf-viewer').innerHTML = '<p style="color:red; padding:20px;">Error loading PDF: ' + e.message + '</p>';
              }
            }
            
            async function renderPage(pdf, pageNum) {
              const page = await pdf.getPage(pageNum);
              const canvas = document.createElement('canvas');
              canvas.id = 'pdf-canvas';
              const ctx = canvas.getContext('2d');
              const scale = 1.5;
              const viewport = page.getViewport({scale});
              canvas.width = viewport.width;
              canvas.height = viewport.height;
              await page.render({canvasContext: ctx, viewport}).promise;
              
              const viewer = document.getElementById('pdf-viewer');
              viewer.innerHTML = '';
              viewer.appendChild(canvas);
              currentPage = pageNum;
              document.getElementById('page-info').textContent = \`\${pageNum} / \${totalPages}\`;
            }
            
            loadPdf();
          <\/script>
        `;
        break;

      case "docx":
      case "doc":
        viewerContent = `
          <div id="doc-viewer" style="padding:20px; font-family:Calibri; line-height:1.5; height:calc(100% - 60px); overflow:auto;"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js"><\/script>
          <script>
            fetch('${blobUrl}')
              .then(r => r.arrayBuffer())
              .then(buf => mammoth.convertToHtml({arrayBuffer: new Uint8Array(buf)}))
              .then(result => document.getElementById('doc-viewer').innerHTML = result.value)
              .catch(err => document.getElementById('doc-viewer').innerHTML = '<p style="color:red;">Error: ' + err.message + '</p>');
          <\/script>
        `;
        break;

      case "pptx":
      case "ppt":
        viewerContent = `
          <div id="pptx-viewer" style="padding:20px; height:calc(100% - 60px); overflow:auto;"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"><\/script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"><\/script>
          <script>
            async function loadPptx() {
              try {
                const res = await fetch('${blobUrl}');
                const arrayBuffer = await res.arrayBuffer();
                const zip = await JSZip.loadAsync(arrayBuffer);
                
                let slides = [];
                const slideFiles = [];
                zip.folder('ppt/slides').forEach((path, file) => {
                  if (path.match(/slide\\d+\\.xml$/)) slideFiles.push({path, file});
                });
                
                slideFiles.sort((a, b) => {
                  const numA = parseInt(a.path.match(/\\d+/)[0]);
                  const numB = parseInt(b.path.match(/\\d+/)[0]);
                  return numA - numB;
                });
                
                for (let i = 0; i < slideFiles.length; i++) {
                  const xml = await slideFiles[i].file.async('string');
                  const text = xml.match(/<a:t>([^<]*)<\\/a:t>/g) || [];
                  const content = text.map(t => t.replace(/<\\/?a:t>/g, '')).join(' ');
                  slides.push({num: i + 1, content: content || '(blank slide)'});
                }
                
                const viewer = document.getElementById('pptx-viewer');
                let currentSlide = 0;
                
                const renderSlide = (idx) => {
                  viewer.innerHTML = \`
                    <div style="border:1px solid #ccc; padding:20px; border-radius:5px; background:#f9f9f9;">
                      <h2>Slide \${slides[idx].num} / \${slides.length}</h2>
                      <div style="margin-top:15px; min-height:200px;">
                        \${slides[idx].content}
                      </div>
                    </div>
                  \`;
                };
                
                renderSlide(0);
                
                document.getElementById('pptx-prev').onclick = () => {
                  if (currentSlide > 0) renderSlide(--currentSlide);
                };
                document.getElementById('pptx-next').onclick = () => {
                  if (currentSlide < slides.length - 1) renderSlide(++currentSlide);
                };
              } catch(e) {
                document.getElementById('pptx-viewer').innerHTML = '<p style="color:red;">Error: ' + e.message + '</p>';
              }
            }
            loadPptx();
          <\/script>
        `;
        break;

      case "xlsx":
      case "xls":
        viewerContent = `
          <div id="xlsx-viewer" style="padding:20px; height:calc(100% - 60px); overflow:auto;"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"><\/script>
          <script>
            fetch('${blobUrl}')
              .then(r => r.arrayBuffer())
              .then(buf => {
                const workbook = XLSX.read(buf, {type: 'array'});
                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const html = XLSX.utils.sheet_to_html(sheet);
                document.getElementById('xlsx-viewer').innerHTML = html;
              })
              .catch(e => document.getElementById('xlsx-viewer').innerHTML = '<p style="color:red;">Error: ' + e.message + '</p>');
          <\/script>
        `;
        break;

      case "txt":
        viewerContent = `
          <pre id="txt-viewer" style="padding:20px; white-space:pre-wrap; word-wrap:break-word; height:calc(100% - 60px); overflow:auto;"></pre>
          <script>
            fetch('${blobUrl}')
              .then(r => r.text())
              .then(text => document.getElementById('txt-viewer').textContent = text)
              .catch(e => document.getElementById('txt-viewer').textContent = 'Error: ' + e.message);
          <\/script>
        `;
        break;
    }

    const toolbar = fileType === "pdf" ? `
      <div style="background:#f0f0f0; padding:10px; display:flex; gap:10px; align-items:center; border-bottom:1px solid #ccc;">
        <button id="prev-btn" style="padding:5px 10px; cursor:pointer;">← Prev</button>
        <span id="page-info" style="min-width:100px;">Loading...</span>
        <button id="next-btn" style="padding:5px 10px; cursor:pointer;">Next →</button>
        <a href="${blobUrl}" download="${fileName}" style="margin-left:auto; padding:5px 10px; background:#007bff; color:white; text-decoration:none; border-radius:3px; cursor:pointer;">Download</a>
      </div>
    ` : fileType === "pptx" ? `
      <div style="background:#f0f0f0; padding:10px; display:flex; gap:10px; border-bottom:1px solid #ccc;">
        <button id="pptx-prev" style="padding:5px 10px; cursor:pointer;">← Prev</button>
        <button id="pptx-next" style="padding:5px 10px; cursor:pointer;">Next →</button>
        <a href="${blobUrl}" download="${fileName}" style="margin-left:auto; padding:5px 10px; background:#007bff; color:white; text-decoration:none; border-radius:3px; cursor:pointer;">Download</a>
      </div>
    ` : `
      <div style="background:#f0f0f0; padding:10px; border-bottom:1px solid #ccc;">
        <a href="${blobUrl}" download="${fileName}" style="padding:5px 10px; background:#007bff; color:white; text-decoration:none; border-radius:3px; cursor:pointer;">Download</a>
      </div>
    `;

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${fileName}</title>
        <style>
          * { margin:0; padding:0; box-sizing:border-box; }
          html, body { width:100%; height:100%; font-family:Arial, sans-serif; background:#fff; }
          table { border-collapse:collapse; }
          table td, table th { border:1px solid #ddd; padding:8px; }
          button { border:1px solid #999; background:#f5f5f5; border-radius:3px; }
          button:hover { background:#e0e0e0; }
        </style>
      </head>
      <body>
        ${toolbar}
        ${viewerContent}
      </body>
      </html>
    `;
  };

  document.addEventListener("click", async e => {
    const a = e.target.closest("a[href]");
    if (!a || !isSupported(a.href)) return;

    e.preventDefault();
    const url = cleanUrl(a.href);
    const fileType = getFileType(url);

    if (fileType) {
      openViewer(url, fileType);
    }
  }, true);
})();
