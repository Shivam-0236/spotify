//spotify - software
// console.log("Welocome to spotify")
//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar= document.getElementById("myProgressBar")
let gif= document.getElementById("gif")
let masterSongName = document.getElementById("masterSongName")
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    {songName:"Warriyo - Mortals (feat. Laura)",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Huma Huma",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Kya loge Tum",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Achha Sila Diya",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Teri mitti - Tribute",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Maana Dil",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"O Saki Saki",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Mann Bharryaa",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Nach balliye",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"}
]

//7.
songItems.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//1. Starting Point Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})
//2. listen to event
audioElement.addEventListener('timeupdate',()=>{
    // console.log(audioElement.duration);
    progress = Number.parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    myProgressBar.value = progress;
})

//3.
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//5. songItem icons
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle')
            element.classList.add('fa-play-circle')
            // audioElement.currentTime = 0;
       
    })    
}
//4. songItem icon
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target)
        // console.log(element)
        //6.===================================
        if(audioElement.paused || audioElement.currentTime<=0){
            e.target.classList.remove("fa-play-circle")
            e.target.classList.add("fa-pause-circle")
            songIndex = parseInt(e.target.id);
            console.log("if : ",songIndex)
            audioElement.src = `songs/${songIndex+1}.mp3`
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle')
            masterPlay.classList.add('fa-pause-circle')
        }else{
            e.target.classList.remove("fa-pause-circle")
            e.target.classList.add("fa-play-circle")
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            console.log("else : ",songIndex)
            audioElement.src = `songs/${songIndex+1}.mp3`
            masterSongName.innerText = songs[songIndex].songName;
            
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-play-circle')
    }
    })
})

//8. masterSong right button 
document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})
//9. masterSong left button
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})