var videos = ['h03QBNVwX8Q', 'ZSmh0wvYJEY', 'gSEzGDzZ1dY', 'K_ZcR5-kzv4', 'TRGkEDADmRU'];
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var playerInfo = [];
var players = {};
var i = 1;

videos.forEach(function(d) {
  var s = i.toString();
  playerInfoObj = {
    id: 'player' + s,
    videoId: d
  }
  i = i + 1;
  playerInfo.push(playerInfoObj);
  return playerInfo;
});
console.log(playerInfo);

function onYouTubeIframeAPIReady() {
  if (typeof playerInfo == 'undefined')
    return;

  for (var i = 0; i < playerInfo.length; i++) {
    players[playerInfo[i].id] = createPlayer(playerInfo[i]);
  }
}

function createPlayer(playerInfo) {
  player = new YT.Player(playerInfo.id, {
    height: '200',
    width: '234',
    videoId: playerInfo.videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}

function onPlayerStateChange(event) {
  if (event.data == 0)
    event.target.playVideo();
}
