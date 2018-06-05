var currentTempInterval = null;

Reveal.addEventListener('fragmentshown', function (e) {
  var isTemp = $(e.fragment).attr('id') == 'currentTemp';
  if (isTemp) {
    var fetchTemp = function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      var rand = Math.random();
      s.src = "https://supla.fracz.com/api/scenes/public/e7ad5bd9-cdd2-4263-89c3-16c19a3a3a1f?" + rand;
      $("head").append(s);
      setTimeout(function () {
        $("head").remove(s);
      }, 1000);
    };
    currentTempInterval = setInterval(fetchTemp, 5000);
    fetchTemp();
  } else if (currentTempInterval) {
    clearInterval(currentTempInterval);
    currentTempInterval = null;
  }
}, false);
