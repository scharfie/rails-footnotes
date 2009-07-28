var Footnotes = function() {
  function hideAll() {}
  
  function hideAllAndToggle(id) {
    var el = get(id)
    var display = el.style.display
    Footnotes.hideAll();
    toggle(id, display)
  }  
  
  function get(id) {
    return document.getElementById(id);
  }
  
  function toggle(id, display) {
    var el = get(id)
    if (display == null) { display = el.style.display }
    display == 'none' ? show(el) : hide(el)
    location.href = '#footnotes_debug';
  }

  function show(element) {
    element.style.display = 'block'
  }

  function hide(element) {
    element.style.display = 'none'
  }

  return {
    show: show,
    hide: hide,
    get:  get,
    toggle: toggle,
    hideAllAndToggle: hideAllAndToggle,
    multipleNotes: false
  }
}();
