var photos = ['/img/photos/1.jpg', '/img/photos/2.jpg', '/img/photos/3.jpg', '/img/photos/4.jpg', '/img/photos/5.jpg', '/img/photos/6.jpg', '/img/photos/7.jpg', '/img/photos/8.jpg', '/img/photos/9.jpg'],
    html = '',
    weddingTime = 'March 12 2016 11:00:00 GMT-06:00';

Array.prototype.forEach.call(photos, function(v) {
  html += '<div class="col-xs-6 col-sm-3"><a href="' + v + '" data-lightbox="photos"><img src="' + v + '"></a></div>';
});

document.querySelector('[id*=photos] .row').innerHTML = html;

function time(e){
  var t = Date.parse(e) - Date.now(),
      s = Math.floor( (t/1000) % 60 ),
      m = Math.floor( (t/1000/60) % 60 ),
      h = Math.floor( (t/(1000*60*60)) % 24 ),
      d = Math.floor( t/(1000*60*60*24) );
  return d + 'd ' + h + 'h ' + m + 'm ' + s + 's';
}

setInterval(function() {
  document.querySelector('.clock').innerHTML = time(weddingTime);
}, 1000);

ga('send', 'pageview', {
 'page': window.location.pathname + window.location.hash
});

window.onhashchange = function(e) {
  ga('send', 'pageview', {
   'page': window.location.pathname + window.location.hash
  });
};