import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

const currentTime = localStorage.getItem('videoplayer-current-time');
player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
