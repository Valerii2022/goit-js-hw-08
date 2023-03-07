import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = (e) => {
    console.log('played the video!');
    console.log(e.seconds)
}

player.on('timeupdate', onPlay);

// player.getVideoTitle().then(function(title) {
//      console.log('title:', title);
// });



// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });
