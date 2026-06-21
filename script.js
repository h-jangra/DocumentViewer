(function() {
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

  const isLikelyDocument = (url, anchorElement) => {
    try {
      const u = new URL(url);
      const pathname = u.pathname;

      // 1. Path ends with supported extension
      if (Object.values(SUPPORTED_FORMATS).some(regex => regex.test(pathname))) {
        return true;
      }

      // 2. Anchor has download attribute
      if (anchorElement && anchorElement.hasAttribute('download')) {
        return true;
      }

      // 3. Match typical download/gateway endpoints (like Moodle /mod/resource/view.php or /pluginfile.php)
      const isGatewayPattern = /\/(mod\/resource|download|attachment|getfile)\b/i.test(pathname) ||
                               /\/pluginfile\.php/i.test(pathname) ||
                               /forcedownload=/i.test(u.search);
      if (isGatewayPattern) {
        return true;
      }
    } catch { }
    return false;
  };

  const cleanUrl = url => {
    const u = new URL(url);
    u.searchParams.delete("forcedownload");
    return u.toString();
  };

  const openViewer = (url) => {
    const viewerUrl = chrome.runtime.getURL("viewer.html") + `?file=${encodeURIComponent(url)}`;
    window.open(viewerUrl, "_blank");
  };

  document.addEventListener("click", e => {
    if (e.button !== 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
    
    const a = e.target.closest("a[href]");
    if (!a || !isLikelyDocument(a.href, a)) return;

    e.preventDefault();
    const url = cleanUrl(a.href);
    openViewer(url);
  }, true);
})();
