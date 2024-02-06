const files = [ "hat.mp3", "kick.mp3", "beat.mp3", "digi.mp3", 
"cool.mp3", "cowbell1.mp3", "cowbell2.mp3", "break.mp3",
"drifing.mp3", "happy.mp3",  "bagpipe.mp3", "weird.mp3",
"micro.mp3", "stallion.mp3", "trave.mp3", "120bpm.mp3"];

const hotKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 
'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h'];

// refactor: combine data from files and hotkeys arrays into
// one array of objects, where each obj has 2 key-value pairs
// files and hotKeys both have 16 items, cuz 'q' goes w 'hat.mp3' etc
// meaning, the idea is, when you type the q key, hat.mp3 will play
// but before implementing the playSound function, refactor the data
// so we have all letters and mp3s in one array
// hint: map()
// expected result:
// [
//     {file: 'hat.mp3', key: 'q'},
//     {file: 'kick.mp3', key: 'w'},
//      .. etc. ..
// ]

// new expected result no array
// q: 'hat.mp3'
// w: 'kick.mp3'

//for loop way:
// const keySounds = {};
// for(let i = 0; i < files.length; i++){
//     let letter = hotKeys[i];//q,w
//     let mp3File = files[i];// hat.mp3, kick.mp3 ect..
//     keySounds[letter] = mp3File;//assign property to obj: q:'hat.mp3
// }
// console.log('keySounds obj:', keySounds) 

// reduce() version of the above, because our iterations are resulting in ONE final product




// forEach() way:
// const soundObjArr = []
// files.forEach((e,i) => soundObjArr.push({file: e, key: hotKeys[i]}));

// console.log('forEach soundObjArr:', soundObjArr) 

// //map()way: if map is returning a obj, wrap it in parens ({})
// const audioArr = files.map((e,i) => ({file: e, key: hotKeys[i]}))
// console.log('audioArr:', audioArr)


// this works but twe havw an inefficiency do we really need two properties
// {file: 'hat.mp3',key:'q'}
// would it not be meor efficient to have one property w letter as key and mp3 as value

// q: 'hat.mp3'
// w: 'kick.mp3'

// forEach()way: this is probabley the best way all since reduce is kinda complicated
const keySnds = {};
hotKeys.forEach((e,i) => keySnds[e] = files[i])
console.log('keySnds:',keySnds)


//  use the audio element  juet the invisible Audio obj
// get the audio element form the DOM
const audioPlayer = document.querySelector('audio')
const output = document.querySelector('.output')

// have the document listen for a key down event iterate the audioArr
document.addEventListener('keydown',(event) => {
    let k = event.key;
    // has OwnProperty is like includes for an object
    // it check to see if the obj it is called on has the key passed to ti
    if(keySnds.hasOwnProperty(event.key)){//includes switch with hasOwnProperty
        //play that key's sound: keySnds[event.key] = keySnds.q = 'hat.mp3
        // new Audio(`audio/${keySnds[event.key]}`).play()
        audioPlayer.src = `audio/${keySnds[event.key]}`;
        audioPlayer.play()
        output.textContent = `${k}:${keySnds[k]}`
    }else{//there is no sound for this key
        output.textContent =`${k}: no sound`
    }
})




// function playSound() {
//     // DO STUFF:
// }

