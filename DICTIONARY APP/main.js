const input = document.querySelector("#input");
const action_btn = document.querySelector(".search-btn");
const not_found = document.querySelector(".not-found");
const def_word = document.querySelector(".def");
const audioStart = document.querySelector(".audio");
const loadData = document.querySelector(".loading");
import api_key from "./apikey.js"
const apiKey = api_key;

action_btn.addEventListener('click', e =>{
    e.preventDefault();
    

    // clear data
    audioStart.innerHTML = '';
    not_found.innerText = '';
    def_word.innerText = '';
    // get input data

   const word = input.value;
    // call api

    if(word ===''){
        alert("please fill the required word");
        return;
    }

    getData(word);
})

async function getData(word){

    loadData.style.display = 'block';

    const responce = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);
    const data  = await responce.json();
    console.log(data);
    // if empty result

    if(!data.length){
        loadData.style.display = 'none';
        not_found.innerText = 'Not Found';
        return;
    }
    
    // if my result is suggestion

    if(typeof data[0] === 'string'){
        loadData.style.display = 'none';
        // generate an line
        let heading = document.createElement('h3');
        heading.innerText = 'Do you mean?';
        not_found.appendChild(heading);
        // now we can display our array of data using foreach loop
        data.forEach(Element =>{
           let suggestion = document.createElement('span');
           suggestion.classList.add('Suggested');
           suggestion.innerText = Element;
           not_found.appendChild(suggestion);
        })

    }

    // result found
    loadData.style.display = 'none';
    const defination  = data[0].shortdef[0];
       def_word.innerText = defination;
    
    const soundName = data[0].hwi.prs[0].sound.audio;
        if(soundName) {
           rendersound(soundName);
        } 
}


function rendersound(soundName){
   
    let subfolder = soundName.charAt(0);
    let sound_src = `https://media.merriam-webster.com/soundc11/${subfolder}/${soundName}.wav?key=${apiKey}`;

    let aud = document.createElement('audio');
    aud.src = sound_src;
    aud.controls = true;  // to controll the auido button

    audioStart.appendChild(aud);
}