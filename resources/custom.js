var currentTempInterval = null;

Reveal.addEventListener('fragmentshown', function (e) {
  var isTemp = $(e.fragment).attr('id') == 'currentTemp';
  if (isTemp) {
    var fetchTemp = function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "https://supla.fracz.com/api/scenes/public/41a21a79-b15f-466f-b9d8-5a8cd080e12e";
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
