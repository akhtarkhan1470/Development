console.log("Welcome to the Spotify Clone");
// Initialize the Variables 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songname: "warryio - Mortals", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "celio - Huma-Huma", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "DEAF KEV ", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname: "Different Heaven ", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname: "Janji - Heroes Tonight", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname: "Ruba Salam e Ishq", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songname: "You can read the lyrics", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songname: "We Were Liars featuring ", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songname: "That's So True", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songname: "Like A Rolling ", filepath: "songs/10.mp3", coverpath: "covers/10.jpg"},
]
songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
})

// audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
// Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeallplay(); 
        songIndex  = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songname;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else
    {
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songname; 
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else
    {
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})