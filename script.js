const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

//Song titles
const songs = ['song1'];

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

//Pause or play song
playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }

})