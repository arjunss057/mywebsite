//JavaScript

var char1='&#9612';
var char = decodeURIComponent(char1)
console.log(char);

//Type pagetitle

var titleText = "Arjun S S".split('');
var initialText = `!@#$%^&*(`.split('');

var rd = 0;
var ct = 0;
function typeTitle(){
    if(ct<titleText.length){
        let x = titleText[rd];
        let y = initialText[rd];
        if(y<x){
            initialText[rd] = String.fromCharCode((initialText[rd].charCodeAt(0))+1);
            var st = "";
            for(let l=0; l<titleText.length; l++){
                st = st + initialText[l];
                }
            document.getElementById("page-title").innerHTML = `${st}`;
            setTimeout(typeTitle, 0);
        }
        else if(y>x){
            initialText[rd] = String.fromCharCode((initialText[rd].charCodeAt(0))-1);
            var st = "";
            for(let l=0; l<titleText.length; l++){
                st = st + initialText[l];
                }
            document.getElementById("page-title").innerHTML = `${st}`;
            setTimeout(typeTitle, 0);
        }
        else{
            ct++;
            rd++;
            var st = "";
            for(let l=0; l<titleText.length; l++){
                st = st + initialText[l];
                }
            document.getElementById("page-title").innerHTML = `${st}`;
            console.log(">>>>" + st);
            setTimeout(typeTitle, 0);

        }
    }
    else{
        return;
    }
    console.log(initialText);
}


//Type salutation id="salutation"

var saluteIndex=0;
var name = window.location.hostname;
// var msg_salutation = `Hi ${window.location.hostname}!`;
var msg_salutation = `Hi !`;
function salute(){
    if (saluteIndex<msg_salutation.length){
        // document.getElementById("salutation").innerHTML += msg_salutation.charAt(saluteIndex);
        document.getElementById("salutation").innerHTML = `${msg_salutation.slice(0, saluteIndex+1)} █`;
        saluteIndex++;
        setTimeout(salute,50);
    }
    else{
        document.getElementById("salutation").innerHTML = `${msg_salutation.slice(0, saluteIndex+1)}`;
        console.log(saluteIndex);
        saluteIndex++;
        setTimeout(welcomeText, 100);
    }
}

//Type Welcome message id="welcome"

var welcomeIndex=0;
var msg_welcome = `Welcome to my World...`;
function welcomeText(){
    if(welcomeIndex<msg_welcome.length){
        document.getElementById("welcome").innerHTML = `${msg_welcome.slice(0, welcomeIndex+1)} █`;
        welcomeIndex++;
        setTimeout(welcomeText, 50);
    }
    else{
        document.getElementById("welcome").innerHTML = `${msg_welcome.slice(0, welcomeIndex+1)}`
        welcomeIndex++;
        setTimeout(typeDesig, 50);
    }
}

//Type Designation id="designation"

var desigIndex = 0;
var start = 0;
var prefix = `I am a`
var msgDesig = [`${prefix} Web Developer`, 
                `${prefix} Python Developer`,
                `${prefix}n Electrical Engineer`,
                `${prefix} Musician`, 
                `${prefix} Video Editor`
                ];       
                
                var listIndex = 0;
                var contentIndex = 0;
                
                function typeDesig(){
    var content = msgDesig[listIndex];
    if(contentIndex<content.length){
        if(start==0){
            document.getElementById("designation").innerHTML = `${content.slice(0, contentIndex+1)} █`;
            contentIndex++;
            setTimeout(typeDesig, 50);
        }
        else{
            document.getElementById("designation").innerHTML = `I am a${content.slice(prefix.length, contentIndex+1)} █`;
            contentIndex++;
            setTimeout(typeDesig, 50);
        }
    }
    else{
        start=1;
        typing();
    }
}

var scan = 0;

function typing(){
    if(scan<8){
        scan++;
        if(scan%2==0){
            document.getElementById("designation").innerHTML = `${msgDesig[listIndex]} █`;
            setTimeout(typing, 500);
        }
        else{
            document.getElementById("designation").innerHTML = `${msgDesig[listIndex]}`;
            setTimeout(typing, 500);
        }
        // start=1;
    }
    else{
            
        scan=0;
        if(listIndex==msgDesig.length-1){
            listIndex=0;
            contentIndex = prefix.length;
        }
        else{
            listIndex++;
            contentIndex = prefix.length;
        }
        typeDesig();
    }
}


var quote_msg = ["\"Process is more important than results...\" - MS Dhoni", 
    "\"All is well that ends well.\" - William Shakespeare", 
    "\"Things are unknown unless explored...\"", 
    "\"Trust & Enjoy the process...\"", 
    "\"Dreams tranform into thoughts, and thoughts result in action\" - Dr. APJ Abdul Kalam", 
    "\"Be the change you want to see in the world...\"", 
    "\"Life is about the journey, not the destination...\"", 
    "\"I can do this all day\" - Captain America", 
    "\"It is never Black and White, there has always been Shades of Grey...\""
];
var arbitrary = Math.floor(Math.random()*quote_msg.length);
var q = 0;

function typeQuote(){
    console.log("typeQuote called");
    var len_quote = quote_msg[arbitrary].length;
    if(q<len_quote){
        // document.getElementById("quote").innerHTML += quote_msg[arbitrary].charAt(q);
        document.getElementById("quote-text").innerHTML = `${quote_msg[arbitrary].slice(0, q+1)} █`
        q++;
        setTimeout(typeQuote, 50);
    }
    else{
        quoteShow();
    }
}

function quoteShow(){
    console.log("quoteShow called");      
    document.getElementById("quote-text").innerHTML = `${quote_msg[arbitrary]}`;
}

    

function refreshQuote(){
    const parent = document.getElementById("quote-bar");
    const child = document.getElementById("refresh-quote");
    const para = document.createElement("p");
    const node = document.createTextNode("Refresh Quote");
    para.appendChild(node);
    console.log(para, typeof(para));
    console.log(child, typeof(child));
    console.log(parent, typeof(child));
    parent.replaceChild(para, child);
}

// new style for quote

var quote_msg = ["\"Process is more important than results...\" - MS Dhoni", 
    "\"All is well that ends well.\" - William Shakespeare", 
    "\"Things are unknown unless explored...\"", 
    "\"Trust & Enjoy the process...\"", 
    "\"Dreams tranform into thoughts, and thoughts result in action\" - Dr. APJ Abdul Kalam", 
    "\"Be the change you want to see in the world...\"", 
    "\"Life is about the journey, not the destination...\"", 
    "\"I can do this all day\" - Captain America", 
    "\"It is never Black and White, there has always been Shades of Grey...\""
];
var key;

function precalculate(key){
    var newKey = Math.floor(Math.random()*quote_msg.length);
    console.log(quote_msg.length);
    console.log(key);
    console.log(typeof(quote_msg[key]));
    
    var source = quote_msg[key].split('');
    var target = quote_msg[newKey].split('');
    
    var dif = Math.abs(source.length-target.length);
    sp = ``;
    for(let q = 0; q<dif; q++){
        sp = sp + ` `;
    }
    
    if(source.length < target.length){
        source = `${quote_msg[key]}${sp}`.split('');
    }
    else{
        target  = `${quote_msg[newKey]}${sp}`.split('');
    }
    
    console.log(source, target);
    var max = source.length>=target.length ? source.length : target.length;
    changeName(0, 0, max, source, target);
}

/*

function changeName(i, count, max, source, target){

    console.log("function call");
    if(count<max){
        let x = target[i];
        let y = source[i];
        if(y<x){
            source[i] = String.fromCharCode((source[i].charCodeAt(0))+1);
            var st = "";
            for(let l=0; l<max; l++){
                st = st + source[l];
                }
            document.getElementById("quote-text").innerHTML = `${st}`;
            setTimeout(changeName(i, count, max, source, target), 50);
        }
        else if(y>x){
            source[i] = String.fromCharCode((source[i].charCodeAt(0))-1);
            var st = "";
            for(let l=0; l<max; l++){
                st = st + source[l];
                }
            document.getElementById("quote-text").innerHTML = `${st}`;
            setTimeout(changeName(i, count, max, source, target), 50);
        }
        else{
            count++;
            i++;
            console.log(source);
            var st = "";
            for(let l=0; l<max; l++){
                st = st + source[l];
                }
            document.getElementById("quote-text").innerHTML = `${st}`;
            console.log(">>>>" + st);
            setTimeout(changeName(i, count, max, source, target), 50);
        }
    }
    else{
        key = newKey;
        return;
    }
    console.log(source);
    }


// var i = 0;
// var count = 0;
// // var dif = Math.abs(source.length-target.length);
// console.log(dif, max);
// function changeName(){
*/


function execute(){
    salute();
    typeQuote();
    getLoggedInfo();
    typeTitle();
    // var p = Math.floor(Math.random()*quote_msg.length);
    // precalculate(p);
    // setTimeout(refreshQuote, 5000);  
}

//Type About Title

var titleText1 = "My Profile".split('');
var initialText1 = `Arjun S S `.split('');

var rd = 0;
var ct = 0;
function typeTitleAbout(){
    if(ct<titleText1.length){
        let x = titleText1[rd];
        let y = initialText1[rd];
        if(y<x){
            initialText1[rd] = String.fromCharCode((initialText1[rd].charCodeAt(0))+1);
            var st = "";
            for(let l=0; l<titleText1.length; l++){
                st = st + initialText1[l];
                }
            document.getElementById("page-title").innerHTML = `${st}`;
            setTimeout(typeTitleAbout, 0);
        }
        else if(y>x){
            initialText1[rd] = String.fromCharCode((initialText1[rd].charCodeAt(0))-1);
            var st = "";
            for(let l=0; l<titleText1.length; l++){
                st = st + initialText1[l];
                }
            document.getElementById("page-title").innerHTML = `${st}`;
            setTimeout(typeTitleAbout, 0);
        }
        else{
            ct++;
            rd++;
            var st = "";
            for(let l=0; l<titleText1.length; l++){
                st = st + initialText1[l];
                }
            document.getElementById("page-title").innerHTML = `${st}`;
            console.log(">>>>" + st);
            setTimeout(typeTitleAbout, 0);

        }
    }
    else{
        return;
    }
    console.log(initialText1);
}

//Event listeners

var but = document.querySelector(".quote-bar > a");
console.log(but);

but.addEventListener(
    "click",
    () => {
        console.log("Vanakkam dei");
        // showCount = -1;
        let x = Math.floor(Math.random()*quote_msg.length);
        // precalculate(x);
        arbitrary = x;
        q=0;
        typeQuote();
    }
);

// function changeQuote(){
    //     let x = Math.floor(Math.random()*quote_msg.length);
    //     arbitrary = x;
    //     q = 0;
    //     console.log(quote_msg[arbitrary]);
    //     typeQuote();
    
    // }
    function getLoggedInfo(){
        
        document.getElementById("log-data").innerHTML = `${window.location.href}`;
        console.log(g);
    }


    
    var g = window.location.href + window.location.protocol + window.location.host + window.location.pathname + window.location.search;


