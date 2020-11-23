var is_site_footer_added = false;
function addSiteFooter() {
  if (is_site_footer_added) {
    return;
  }
  console.log('footer added');
  // Get the link element that references the templates.html file.
  var templatesImport = document.getElementById('template_3');
  // Retrieve the loaded templates.
  var templates = templatesImport.import;
  // Get the template.
  var template = templates.getElementById('site-footer');
  // Clone the template content.
  var clone = document.importNode(template.content, true);
  // Add the blog post to the page.
  document.getElementById('site-footer').appendChild(clone);
  if (window.location.pathname.startsWith('/bn'))
    document.getElementById('ft_text').innerHTML = "মুক্তমনা &copy; ২০১৭, সর্বস্বত্ব সংরক্ষিত। যোগাযোগ: contact 'এট' mukto-mona 'ডট' com <br /> মুক্তমনা অভিজিৎ রায় (১৯৭১-২০১৫) কর্তৃক ২০০১ সালে প্রতিষ্ঠিত।";
  else
    document.getElementById('ft_text').innerHTML = "Copyright &copy; 2017 MuktoMona <br /> Founded by Avijit Roy, 2001";

  is_site_footer_added = true;
}

window.addEventListener('HTMLImportsLoaded', function (e) {
  addSiteFooter();
});

if ('import' in document.createElement('link')) {
  addSiteFooter();
}
