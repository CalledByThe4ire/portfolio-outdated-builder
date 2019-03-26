(function() {
  var w;
  w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (w > 600) {
    new WOW().init();
  }
}.call(this));
