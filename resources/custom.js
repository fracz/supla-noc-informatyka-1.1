var currentTempInterval = null;

var TEMP_SCENE_URL = 'https://supla.fracz.com/api/scenes/public/41a21a79-b15f-466f-b9d8-5a8cd080e12e';

Reveal.addEventListener('fragmentshown', function (e) {
  var isTemp = $(e.fragment).attr('id') == 'currentTemp';
  if (isTemp) {
    var fetchTemp = function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      var rand = Math.random();
      s.src = TEMP_SCENE_URL + "?" + rand;
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
