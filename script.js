const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

//Song titles
const songs = ['song1','song2','song3'];

//Song selected
let songIndex = 0;

//Update song info
function loadSong(song){
    title.innerText = song;
    audio.src = `audio/${song}.mp3`;
    cover.src = `css/image/songs/${song}.jpg`;
}

//Initially load song
loadSong(songs[songIndex]);

//Play song function
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();
}

//Pause song function
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');

    audio.pause();
}

//Next song function
function nextSong(){
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0;
      }

    loadSong(songs[songIndex]);

    playSong();
}

//Next song function
function prevSong(){
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1;
      }

    loadSong(songs[songIndex]);

    playSong();
}

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//Pause or play song
playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }

})

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  // Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }