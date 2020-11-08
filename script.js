import { searchUser } from './github-dashboard.js';

console.log("Hello World !");

console.log(window);

window.searchGitHubUser = () => {
    searchUser();
}

var myVar = "Souvik Das";

var that = window;
var obj = {
    name: "Souvik Das",
    age: 26
}


function print() {

    console.log("Hey There !! From print");
    console.log(obj.name);
    
    return function printAge() {
        console.log("Hey There !! From printAge");
        console.log(obj.age);
    }
    // printAge();
}

print()();


let counter=0;

function update() {
    counter++;

    let sc = document.getElementById("cValue");
    sc.innerHTML = counter;
}

function updateCounter() {
    let c = 0;

    return function update() {
        c++;
        let sc=document.getElementById("cValue");
        sc.innerHTML = c;
    }
}

// Closure Example
window.uc = function(){
    let c = 0;
    return function() {
        c++;
        let sc = document.getElementById("cValue");
        sc.innerHTML=c;
    }
}();

// Fetch API And Promise


// https://api.github.com/users/${name}

// https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits



    
    /*
    let url = `https://api.github.com/users/${userName}`;
    let response = await fetch(url);

    let commits = await response.json(); // read response body and parse as JSON
    */


// searchUser();


