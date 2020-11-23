var is_sidebar_added = false;
function addSiteSidebar() {
  if (is_sidebar_added) {
    console.log('sidebar added already');
    return;
  }
  console.log('sidebar added');
  // Get the link element that references the templates.html file.
  var templatesImport = document.getElementById('template_2');
  // Retrieve the loaded templates.
  var templates = templatesImport.import;
  // Get the template.
  var template = templates.getElementById('site-sidebar');
  // Clone the template content.
  var clone = document.importNode(template.content, true);
  // Add the blog post to the page.
  document.getElementById('site-sidebar').appendChild(clone);
  is_sidebar_added = true;
}

window.addEventListener('HTMLImportsLoaded', function (e) {
  console.log('imports loaded');
  // all imports loaded
  addSiteSidebar();
});

if ('import' in document.createElement('link')) {
  console.log('chrome manual sidebar addition');
  addSiteSidebar();
}
