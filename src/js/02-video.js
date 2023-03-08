import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_VIDEOPLAYER_KEY = 'videoplayer-current-time';

const onPlay = event => {
  localStorage.setItem(LOCALSTORAGE_VIDEOPLAYER_KEY, event.seconds);
};

const currentTime = localStorage.getItem(LOCALSTORAGE_VIDEOPLAYER_KEY);
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
