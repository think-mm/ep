var is_site_header_added = false;
function addSiteHeader() {
  if (is_site_header_added) {
    console.log('header added already');
    return;
  }
  addFavIcon("../common/favicon.ico");
  console.log('header added');
  // Get the link element that references the templates.html file.
  var templatesImport = document.getElementById('template_1');
  // Retrieve the loaded templates.
  var templates = templatesImport.import;
  // Get the template.
  var template = templates.getElementById('site-header');
  // Clone the template content.
  var clone = document.importNode(template.content, true);
  // Add the blog post to the page.
  document.getElementById('site-header').appendChild(clone);
  is_site_header_added = true;
}

function addFavIcon(src) {
  /*!
   * Dynamically changing favicons with JavaScript
   * Works in all A-grade browsers except Safari and Internet Explorer
   * Demo: http://mathiasbynens.be/demo/dynamic-favicons
   */

  // HTML5™, baby! http://mathiasbynens.be/notes/document-head
  document.head || (document.head = document.getElementsByTagName('head')[0]);

    var link = document.createElement('link'),
      oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
      document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
    console.log('favicon added');
}

window.addEventListener('HTMLImportsLoaded', function (e) {
  console.log('imports loaded');
  // all imports loaded
  addSiteHeader();
});

if ('import' in document.createElement('link')) {
  console.log('chrome manual navbar addition');
  addSiteHeader();
}
