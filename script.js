let song = new Audio(`star.mp3`)
let progress = document.getElementById("play-track")
let ctrlIcon = document.getElementById("ctrl");
let left = document.getElementById('ctrl-left')
let right = document.getElementById('ctrl-right')
let image = document.getElementById("image");
let head = document.getElementById('head');
let head2 = document.getElementById('head2');
let playbtn = document.querySelectorAll('.playbtn')


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause() {
    if (ctrlIcon.classList.contains('bx-pause-circle')) {
        song.pause();
        ctrlIcon.classList.remove('bx-pause-circle')
        ctrlIcon.classList.add('bx-play-circle')
    }
    else {
        song.play();
        ctrlIcon.classList.add('bx-pause-circle')
        ctrlIcon.classList.remove('bx-play-circle')
    }
}


let arr = [{
    img: 'star.png',
    vid: 'star.mp3',
    h: 'Starboy',
    h2: 'Starboy Studio by the Weeknd'
}, {
    img: 'gang.png',
    vid: 'gang.mp3',
    h: 'Gangster Yaar',
    h2: 'Song by Nav Sandhu'
},
{
    img: 'elevated.png',
    vid: 'elevated.mp3',
    h: 'Elevated',
    h2: 'Elevated - Shubh'

},
{
    img: 'babel.png',
    vid: 'babel.mp3',
    h: 'Babel',
    h2: 'Mumford & Sons'

},
{
    img: 'these.png',
    vid: 'these.mp3',
    h: 'These Days',
    h2: 'Sidhu Moose Wala'

},
{
    img: 'tbi.png',
    vid: 'tbi.mp3',
    h: 'Tangers',
    h2: 'Tanger - Xcho'

},
{
    img: 'under.jpg',
    vid: 'under.mp3',
    h: 'Influence',
    h2: 'Chris Brown'

}

]
let flag = 0;
right.addEventListener("click", () => {
    if (flag < arr.length - 1) {

        console.log('hii');




        song.pause();
        flag++;
        image.src = arr[flag].img;
        song = new Audio(`${arr[flag].vid}`)
        head.innerHTML = arr[flag].h;
        head2.innerHTML = arr[flag].h2;
        console.log(flag);

        song.play();
        progress.value = 0;
        song.currentTime = progress.value;
        ctrlIcon.classList.add('bx-pause-circle')
        ctrlIcon.classList.remove('bx-play-circle')
        song.addEventListener("timeupdate", () => {
        progress.value = song.currentTime


        })
    }

})

left.addEventListener("click", () => {
    if (flag > 0) {

        song.pause();
        console.log('hii');

        flag--;
        image.src = arr[flag].img;
        song = new Audio(`${arr[flag].vid}`)
        head.innerHTML = arr[flag].h;
        head2.innerHTML = arr[flag].h2;
        console.log(flag);

        song.play();
        progress.value = 0;
        song.currentTime = progress.value;
        ctrlIcon.classList.add('bx-pause-circle')
        ctrlIcon.classList.remove('bx-play-circle')
        song.addEventListener("timeupdate", () => {
            progress.value = song.currentTime


        })

    }

})

playbtn.forEach((el,indx) =>{

    el.addEventListener("click",(dtls) =>{
        song.pause();
        image.src = arr[dtls.target.id].img;
        song = new Audio(`${arr[dtls.target.id].vid}`) 
        head.innerHTML = arr[dtls.target.id].h;
        head2.innerHTML = arr[dtls.target.id].h2;
        
        flag = dtls.target.id;
    
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.add('bx-pause-circle')
        ctrlIcon.classList.remove('bx-play-circle')
    
        progress.value = 0;
        song.currentTime = progress.value;
        console.log('hii');
        song.addEventListener("timeupdate", () => {
         progress.value = song.currentTime
        
        
        })
        
        progress.onchange = function () {
            song.play();
            song.currentTime = progress.value;
            ctrlIcon.classList.add('bx-pause-circle')
            ctrlIcon.classList.remove('bx-play-circle')
        }
    
    })
    
    })
    // Finally change it it's not


song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime
   


})

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('bx-pause-circle')
    ctrlIcon.classList.remove('bx-play-circle')
}

