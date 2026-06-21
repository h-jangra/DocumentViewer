// Local icons helper
const ICONS = {
  sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  docx: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  doc: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  xlsx: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
  xls: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
  csv: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
  tsv: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
  pptx: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  ppt: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  txt: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  fullscreen: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`
};

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function loadLocalScript(url) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = url;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// Read URL parameters
const params = new URLSearchParams(window.location.search);
let targetUrl = params.get('file');
let fileType = params.get('type');
let fileName = params.get('name') || 'document';
let localBlobUrl = null;

// Theme configuration
const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const savedTheme = localStorage.getItem('doc-viewer-theme') || getSystemTheme();
document.documentElement.setAttribute('data-theme', savedTheme);

const themeBtn = document.getElementById('theme-toggle-btn');
themeBtn.innerHTML = savedTheme === 'dark' ? ICONS.sun : ICONS.moon;
themeBtn.title = savedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

themeBtn.onclick = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('doc-viewer-theme', newTheme);
  themeBtn.innerHTML = newTheme === 'dark' ? ICONS.sun : ICONS.moon;
  themeBtn.title = newTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
};

const viewerContentContainer = document.getElementById('viewer-content-container');

const SUPPORTED_FORMATS = {
  pdf: /\.pdf$/i,
  pptx: /\.pptx$/i,
  ppt: /\.ppt$/i,
  docx: /\.docx$/i,
  doc: /\.doc$/i,
  xlsx: /\.xlsx$/i,
  xls: /\.xls$/i,
  csv: /\.csv$/i,
  tsv: /\.tsv$/i,
  txt: /\.txt$/i,
  json: /\.json$/i,
  log: /\.log$/i,
  md: /\.md$/i,
  conf: /\.conf$/i,
  ini: /\.ini$/i
};

const getFileTypeFromResponse = (res, url) => {
  // 1. Check Content-Disposition header for filename extension
  const disposition = res.headers.get("Content-Disposition");
  if (disposition) {
    const filenameMatch = disposition.match(/filename\*?=(?:UTF-8'')?["']?([^"';]+)["']?/i);
    if (filenameMatch && filenameMatch[1]) {
      const filename = decodeURIComponent(filenameMatch[1]);
      const ext = filename.split('.').pop().toLowerCase();
      if (ext && SUPPORTED_FORMATS[ext]) return ext;
    }
  }

  // 2. Check Content-Type header
  const contentType = res.headers.get("Content-Type") || "";
  if (contentType.includes("application/pdf")) return "pdf";
  if (contentType.includes("officedocument.wordprocessingml.document")) return "docx";
  if (contentType.includes("msword")) return "doc";
  if (contentType.includes("officedocument.spreadsheetml.sheet")) return "xlsx";
  if (contentType.includes("ms-excel")) return "xls";
  if (contentType.includes("officedocument.presentationml.presentation")) return "pptx";
  if (contentType.includes("ms-powerpoint")) return "ppt";
  if (contentType.includes("text/csv")) return "csv";
  if (contentType.includes("text/tab-separated-values")) return "tsv";
  if (contentType.includes("application/json")) return "json";
  if (contentType.includes("text/plain")) {
    const pathname = new URL(url).pathname;
    if (pathname.endsWith(".json")) return "json";
    if (pathname.endsWith(".md")) return "md";
    return "txt";
  }

  // 3. Fallback: check URL pathname
  try {
    const pathname = new URL(url).pathname;
    for (const [type, regex] of Object.entries(SUPPORTED_FORMATS)) {
      if (regex.test(pathname)) return type;
    }
  } catch {}
  return null;
};

// Robust offline strings extractor for legacy binary files (.doc, .ppt)
function extractTextFromDoc(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  const len = arrayBuffer.byteLength;
  let text = "";
  let currentRun = [];
  
  // Scan for 1-byte ASCII printable characters
  for (let i = 0; i < len; i++) {
    const byte = view.getUint8(i);
    if ((byte >= 32 && byte <= 126) || byte === 9 || byte === 10 || byte === 13) {
      currentRun.push(String.fromCharCode(byte));
    } else {
      if (currentRun.length >= 4) {
        text += currentRun.join("") + "\n";
      }
      currentRun = [];
    }
  }
  if (currentRun.length >= 4) {
    text += currentRun.join("");
  }
  
  // Scan for 2-byte UTF-16LE printable characters
  let utf16Text = "";
  currentRun = [];
  for (let i = 0; i < len - 1; i += 2) {
    const charCode = view.getUint16(i, true);
    if (
      (charCode >= 32 && charCode <= 126) ||
      charCode === 9 || charCode === 10 || charCode === 13 ||
      (charCode >= 128 && charCode <= 255) ||
      (charCode >= 0x0400 && charCode <= 0x04FF)
    ) {
      currentRun.push(String.fromCharCode(charCode));
    } else {
      if (currentRun.length >= 4) {
        utf16Text += currentRun.join("") + "\n";
      }
      currentRun = [];
    }
  }
  if (currentRun.length >= 4) {
    utf16Text += currentRun.join("");
  }
  
  const cleanText = (txt) => {
    return txt
      .split('\n')
      .map(line => line.trim())
      // Filter out lines that are too short or consist entirely of punctuation noise symbols
      .filter(line => line.length > 5 && !/^[.\s\-_~*+=|/\\:;()\[\]{}]+$/.test(line))
      .join('\n\n');
  };

  const cleanedAscii = cleanText(text);
  const cleanedUtf16 = cleanText(utf16Text);

  return cleanedUtf16.length > cleanedAscii.length ? cleanedUtf16 : cleanedAscii;
}

async function initViewer() {
  try {
    if (!targetUrl) {
      viewerContentContainer.innerHTML = `<div style="padding:40px; color:red; text-align:center;">No document URL provided.</div>`;
      return;
    }

    let isRemote = targetUrl.startsWith('http://') || targetUrl.startsWith('https://');
    let fetchedBlob = null;
    let res = null;

    if (isRemote) {
      viewerContentContainer.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--text-muted);">
          <div style="font-weight:600; font-size:14px; margin-bottom:16px;">Downloading document...</div>
        </div>
      `;
      res = await fetch(targetUrl, { credentials: "include" });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      // Extract details
      fileType = getFileTypeFromResponse(res, targetUrl);
      if (!fileType) {
        window.location.replace(targetUrl);
        return;
      }

      const disposition = res.headers.get("Content-Disposition");
      if (disposition) {
        const filenameMatch = disposition.match(/filename\*?=(?:UTF-8'')?["']?([^"';]+)["']?/i);
        if (filenameMatch && filenameMatch[1]) {
          fileName = decodeURIComponent(filenameMatch[1]);
        }
      } else {
        fileName = targetUrl.split("/").pop().split("?")[0] || ("document." + fileType);
      }

      fetchedBlob = await res.blob();
      localBlobUrl = URL.createObjectURL(fetchedBlob);
    } else {
      localBlobUrl = targetUrl;
    }

    // Direct PDF browser native viewer redirection (bypassing custom toolbar)
    if (fileType === 'pdf') {
      window.location.replace(localBlobUrl);
      return;
    }

    // Configure metadata
    document.title = fileName;
    document.getElementById('file-info-container').innerHTML = `
      ${ICONS[fileType] || ICONS.txt}
      <span class="file-name" title="${fileName}">${fileName}</span>
    `;
    const downloadBtn = document.getElementById('download-link');
    downloadBtn.href = localBlobUrl;
    downloadBtn.download = fileName;
    downloadBtn.innerHTML = ICONS.download + ' Download';

    // RENDER LOGIC BASED ON TYPE
    if (fileType === 'docx' || fileType === 'doc') {
      viewerContentContainer.innerHTML = `
        <div class="docx-wrapper">
          <div id="doc-viewer" class="docx-page">Preparing Word document...</div>
        </div>
      `;
      const buf = fetchedBlob ? await fetchedBlob.arrayBuffer() : await (await fetch(localBlobUrl)).arrayBuffer();
      
      if (fileType === 'doc') {
        const docText = extractTextFromDoc(buf);
        const formattedHtml = docText.split('\n\n').map(p => `<p>${p.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</p>`).join('');
        document.getElementById('doc-viewer').innerHTML = formattedHtml || '<p style="color:var(--text-muted); text-align:center;">Empty document.</p>';
      } else {
        await loadLocalScript('mammoth.min.js');
        const result = await mammoth.convertToHtml({ arrayBuffer: buf });
        document.getElementById('doc-viewer').innerHTML = result.value || '<p style="color:var(--text-muted); text-align:center;">Empty document.</p>';
      }

    } else if (fileType === 'xlsx' || fileType === 'xls') {
      viewerContentContainer.innerHTML = `
        <div class="xlsx-wrapper">
          <div id="xlsx-tabs" class="xlsx-tabs"></div>
          <div id="xlsx-table-container" class="xlsx-table-container">Preparing spreadsheet...</div>
        </div>
      `;
      await loadLocalScript('xlsx.min.js');
      const buf = fetchedBlob ? await fetchedBlob.arrayBuffer() : await (await fetch(localBlobUrl)).arrayBuffer();
      const workbook = XLSX.read(buf, { type: 'array' });
      
      const tabsContainer = document.getElementById('xlsx-tabs');
      const tableContainer = document.getElementById('xlsx-table-container');

      function renderSheet(name) {
        const sheet = workbook.Sheets[name];
        const html = XLSX.utils.sheet_to_html(sheet, { editable: false, header: '', footer: '' });
        tableContainer.innerHTML = html;
        const table = tableContainer.querySelector('table');
        if (table) table.className = 'xlsx-table';
      }

      workbook.SheetNames.forEach((name, idx) => {
        const tab = document.createElement('div');
        tab.className = 'xlsx-tab' + (idx === 0 ? ' active' : '');
        tab.textContent = name;
        tab.onclick = () => {
          document.querySelectorAll('.xlsx-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          renderSheet(name);
        };
        tabsContainer.appendChild(tab);
      });

      renderSheet(workbook.SheetNames[0]);

    } else if (fileType === 'csv' || fileType === 'tsv') {
      viewerContentContainer.innerHTML = `
        <div class="xlsx-wrapper">
          <div id="xlsx-table-container" class="xlsx-table-container">Preparing CSV/TSV grid...</div>
        </div>
      `;
      const text = fetchedBlob ? await fetchedBlob.text() : await (await fetch(localBlobUrl)).text();
      const delimiter = fileType === 'tsv' ? '\t' : ',';
      
      const lines = [];
      let row = [""];
      let inQuotes = false;
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];
        if (char === '"') {
          if (inQuotes && nextChar === '"') { row[row.length - 1] += '"'; i++; }
          else inQuotes = !inQuotes;
        } else if (char === delimiter && !inQuotes) {
          row.push("");
        } else if ((char === '\r' || char === '\n') && !inQuotes) {
          if (char === '\r' && nextChar === '\n') i++;
          lines.push(row);
          row = [""];
        } else {
          row[row.length - 1] += char;
        }
      }
      if (row.length > 1 || row[0] !== "") lines.push(row);

      const table = document.createElement('table');
      table.className = 'xlsx-table';
      lines.forEach((r, rIdx) => {
        const tr = document.createElement('tr');
        r.forEach(cell => {
          const el = document.createElement(rIdx === 0 ? 'th' : 'td');
          el.textContent = cell;
          tr.appendChild(el);
        });
        table.appendChild(tr);
      });
      viewerContentContainer.innerHTML = '';
      viewerContentContainer.appendChild(table);

    } else if (fileType === 'pptx' || fileType === 'ppt') {
      if (fileType === 'ppt') {
        viewerContentContainer.innerHTML = `
          <div class="docx-wrapper">
            <div id="doc-viewer" class="docx-page">Preparing PPT presentation...</div>
          </div>
        `;
        const buf = fetchedBlob ? await fetchedBlob.arrayBuffer() : await (await fetch(localBlobUrl)).arrayBuffer();
        const pptText = extractTextFromDoc(buf);
        const formattedHtml = pptText.split('\n\n').map(p => `<p>${p.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</p>`).join('');
        document.getElementById('doc-viewer').innerHTML = formattedHtml || '<p style="color:var(--text-muted); text-align:center;">Empty presentation.</p>';
        return;
      }

      document.getElementById('toolbar-center-container').innerHTML = `
        <button id="pptx-fullscreen" class="btn btn-icon" title="Fullscreen Presentation">${ICONS.fullscreen}</button>
        <div class="toolbar-divider"></div>
        <button id="pptx-prev" class="btn" title="Previous Slide">← Prev</button>
        <span id="slide-info" style="font-size: 13px; font-weight: 500; min-width: 60px; text-align: center;">Loading...</span>
        <button id="pptx-next" class="btn" title="Next Slide">Next →</button>
      `;
      viewerContentContainer.innerHTML = `
        <div class="pptx-wrapper">
          <div id="pptx-sidebar" class="pptx-sidebar"></div>
          <div class="pptx-main">
            <div id="pptx-slide-container" class="pptx-slide-container">
              <div id="pptx-slide-main" class="pptx-slide-inner">Preparing slides...</div>
            </div>
          </div>
        </div>
      `;
      await loadLocalScript('jszip.min.js');
      const buf = fetchedBlob ? await fetchedBlob.arrayBuffer() : await (await fetch(localBlobUrl)).arrayBuffer();
      const zip = await JSZip.loadAsync(buf);
      const slideFiles = [];
      const slidesFolder = zip.folder('ppt/slides');
      if (!slidesFolder) throw new Error("Invalid PPTX structure.");
      
      slidesFolder.forEach((path, file) => {
        if (path.match(/slide\d+\.xml$/)) slideFiles.push({ path, file });
      });
      if (slideFiles.length === 0) throw new Error("No slides found.");

      slideFiles.sort((a, b) => {
        const numA = parseInt(a.path.match(/\d+/)[0]);
        const numB = parseInt(b.path.match(/\d+/)[0]);
        return numA - numB;
      });

      const slides = [];
      for (let i = 0; i < slideFiles.length; i++) {
        const xml = await slideFiles[i].file.async('string');
        const textMatches = xml.match(/<a:t>([^<]*)<\/a:t>/g) || [];
        const content = textMatches.map(t => t.replace(/<\/?a:t>/g, '')).join(' ').trim();
        slides.push({ num: i + 1, content: content || '(blank slide)' });
      }

      let currentSlide = 0;
      const sidebar = document.getElementById('pptx-sidebar');
      const slideMain = document.getElementById('pptx-slide-main');
      const slideInfo = document.getElementById('slide-info');

      function renderSlide(idx) {
        currentSlide = idx;
        document.querySelectorAll('.pptx-slide-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
        const s = slides[idx];
        const sentences = s.content.split(/(?<=[.!?])\s+/);
        let contentHtml = (sentences.length > 0 && sentences[0].length < 60 && sentences.length > 1) 
          ? `<h3>${sentences[0]}</h3><p>${sentences.slice(1).join(' ')}</p>` 
          : `<p>${s.content}</p>`;
        
        slideMain.innerHTML = `
          <div class="pptx-slide-content">${contentHtml}</div>
          <div class="pptx-slide-footer">
            <span>Slide ${s.num} of ${slides.length}</span>
            <span>Presentation Viewer</span>
          </div>
        `;
        slideInfo.textContent = `${s.num} / ${slides.length}`;
      }

      slides.forEach((s, idx) => {
        const thumb = document.createElement('div');
        thumb.className = 'pptx-slide-thumb' + (idx === 0 ? ' active' : '');
        thumb.innerHTML = `<span class="pptx-slide-number">Slide ${s.num}</span><span class="pptx-slide-preview-text">${s.content}</span>`;
        thumb.onclick = () => renderSlide(idx);
        sidebar.appendChild(thumb);
      });

      document.getElementById('pptx-prev').onclick = () => { if (currentSlide > 0) renderSlide(currentSlide - 1); };
      document.getElementById('pptx-next').onclick = () => { if (currentSlide < slides.length - 1) renderSlide(currentSlide + 1); };
      document.getElementById('pptx-fullscreen').onclick = () => {
        const container = document.getElementById('pptx-slide-container');
        if (!document.fullscreenElement) container.requestFullscreen().catch(console.error);
        else document.exitFullscreen();
      };
      document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' || e.key === ' ') { if (currentSlide < slides.length - 1) renderSlide(currentSlide + 1); }
        else if (e.key === 'ArrowLeft') { if (currentSlide > 0) renderSlide(currentSlide - 1); }
      });

      renderSlide(0);

    } else {
      // Plain text or code viewer
      document.getElementById('toolbar-center-container').innerHTML = `
        <div class="search-box">
          ${ICONS.search}
          <input type="text" id="txt-search" placeholder="Search text...">
        </div>
        <button id="txt-wrap" class="btn">Wrap Lines</button>
        <div class="toolbar-divider"></div>
        <button id="txt-zoom-out" class="btn">A-</button>
        <button id="txt-zoom-in" class="btn">A+</button>
        <button id="txt-copy" class="btn" title="Copy Content">${ICONS.copy} Copy</button>
      `;
      viewerContentContainer.innerHTML = `
        <div class="txt-container">
          <div id="txt-line-numbers" class="txt-line-numbers"></div>
          <div class="txt-content-wrapper">
            <pre id="txt-viewer" class="txt-pre wrap"></pre>
          </div>
        </div>
      `;
      const rawText = fetchedBlob ? await fetchedBlob.text() : await (await fetch(localBlobUrl)).text();
      
      let originalText = rawText;
      if (fileName.endsWith('.json') || rawText.trim().startsWith('{') || rawText.trim().startsWith('[')) {
        try {
          originalText = JSON.stringify(JSON.parse(rawText), null, 2);
        } catch {}
      }

      const pre = document.getElementById('txt-viewer');
      const lineNumbers = document.getElementById('txt-line-numbers');
      let fontSize = 13;
      let isWrapped = true;

      function renderText() {
        pre.textContent = originalText;
        const linesCount = originalText.split('\n').length;
        lineNumbers.innerHTML = Array.from({ length: linesCount }, (_, i) => i + 1).join('<br>');
      }

      function performSearch(query) {
        if (!query) return renderText();
        const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'gi');
        const safe = originalText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        pre.innerHTML = safe.replace(regex, m => `<span class="search-highlight">${m}</span>`);
      }

      document.getElementById('txt-copy').onclick = () => {
        navigator.clipboard.writeText(originalText);
        showToast("Copied to clipboard!");
      };
      document.getElementById('txt-wrap').onclick = (e) => {
        isWrapped = !isWrapped;
        pre.className = 'txt-pre ' + (isWrapped ? 'wrap' : 'nowrap');
        e.target.textContent = isWrapped ? 'Unwrap Lines' : 'Wrap Lines';
      };
      document.getElementById('txt-zoom-in').onclick = () => { fontSize = Math.min(fontSize + 1, 24); pre.style.fontSize = lineNumbers.style.fontSize = fontSize + 'px'; };
      document.getElementById('txt-zoom-out').onclick = () => { fontSize = Math.max(fontSize - 1, 10); pre.style.fontSize = lineNumbers.style.fontSize = fontSize + 'px'; };
      document.getElementById('txt-search').oninput = e => performSearch(e.target.value);

      renderText();
    }
  } catch (err) {
    console.error(err);
    if (targetUrl && (targetUrl.startsWith('http://') || targetUrl.startsWith('https://'))) {
      window.location.replace(targetUrl);
    } else {
      viewerContentContainer.innerHTML = `<div style="padding:40px; color:red; text-align:center;">Error rendering document: ${err.message}</div>`;
    }
  }
}

initViewer();
