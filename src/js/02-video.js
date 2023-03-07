import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

const currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', onPlay);

player.setCurrentTime(currentTime);
