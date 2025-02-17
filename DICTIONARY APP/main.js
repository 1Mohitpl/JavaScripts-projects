const input = document.querySelector("#input");
const action_btn = document.querySelector(".search-btn");
const not_found = document.querySelector(".not-found");
import api_key from "./apikey.js"
const apiKey = api_key;

action_btn.addEventListener('click', e =>{
    e.preventDefault();
  
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

    const responce = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);
    const data  = await responce.json();

    // if empty result

    if(!data.length){
        not_found.innerText = 'Not Found';
        return;
    }
    
    // if my result is suggestion

    if(typeof data[0] === 'string'){
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
    console.log(data);
    
    
}