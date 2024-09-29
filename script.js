let songIndex=0;;
let audioElement= new Audio("songs/audio1.mp3")
let masterPlay=document.querySelector("#masterPlay")
let myProgressBar=document.querySelector("#progressBar")
let gif=document.querySelector("#jask");
let masterSongName=document.getElementById("masterSongName")
let songItems=Array.from(document.querySelectorAll(".songItem"))
let songs=[
    {songName: "Aaoge Tum Kabhi" , filePath:"./songs/audio1.mp3" , coverPath:"./covers/cover.jpg"},
    {songName: "Pehli Nazar Mai" , filePath:"./songs/audio2.mp3", coverPath :"./covers/cover2.jpeg"},
    {songName: "Tauba Tauba" , filePath:"./songs/audio3.mp3" , coverPath:"./covers/cover3.jpeg"},
    {songName: "Love is Gone" , filePath:"./songs/audio4.mp3", coverPath:"./covers/cover4.jpeg"},
    {songName: "Ve Haaniya" , filePath:"./songs/audio5.mp3", coverPath:"./covers/cover5.jpg"},
    {songName: "Born To Shine" , filePath:"./songs/audio6.mp3", coverPath:"./covers/cover.jpg"},
    {songName: "Kaise Hua" , filePath:"./songs/audio7.mp3", coverPath:"./covers/cover2.jpeg"},

    
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.querySelectorAll(".songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener("click",()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener("timeupdate",()=>{
    console.log("timeUpdate");
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
        audioElement.src = `songs/audio${songIndex + 1}.mp3`;
        audioElement.currentTime=0;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

    })
});
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{songIndex+=1};
    audioElement.src = `songs/audio${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

    
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{songIndex -=1};
    audioElement.src = `songs/audio${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

    
})
