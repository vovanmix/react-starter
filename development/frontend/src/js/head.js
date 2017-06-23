console.log('head.js loaded');
function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}
var html = '<div class="preloader"><h1>Some Title</h1><span>Some arbitrary text</span></div>';
appendHtml(document.body, html);
