// typetitle()

var i=0;
var content = "Arjun S S";
var len = content.length;
function typetitle(){
    if (i<len){
        document.getElementById("titles").innerHTML += content.charAt(i);
        i++;
        setTimeout(typetitle, 200);
    }
}

// typeinout()

var listofcontents = ["Web Developer", "Python Developer", "Editor", "Musician"]
var j = 0;
var k = 0;

function typeinout(){
    var content = listofcontents[j];
    var contentlength = content.length;
    if(k < contentlength){
        if(k==0){
            document.getElementById("msgs").innerHTML = "";
        }
        document.getElementById("msgs").innerHTML += content.charAt(k);
        k++;
        setTimeout(typeinout, 100);
    }
    else if(k==contentlength){
        if (j==3){
            k=0;
            j=0;
            setTimeout(typeinout, 3000);
        }
        else {
            k=0;
            j++;
            setTimeout(typeinout, 3000);
        }
        
    }
}

//himsg()

var a=0;
var msg_hi = "Hi...";
var len_msg_hi = msg_hi.length;
function himsg(){
    if (a<len_msg_hi){
        document.getElementById("msg1").innerHTML += msg_hi.charAt(a);
        a++;
        setTimeout(himsg, 200);
    }
}

//welcomemsg()

var b=0;
var msg_wel = "Welcome to my world!";
var len_msg_wel = msg_wel.length;
function welcomemsg(){
    if (b<len_msg_wel){
        document.getElementById("msg2").innerHTML += msg_wel.charAt(b);
        b++;
        setTimeout(welcomemsg, 100);
    }
}

//quotedisplay()

var q=0;
var quote_msg = ["\"Process is more important than results...\" - MS Dhoni", "\"All is well that ends well.\" - William Shakespeare", "\"Things are unknown unless explored...\"", "\"Trust & Enjoy the process...\"", "\"Dreams tranform into thoughts, and thoughts result in action\" - Dr. APJ Abdul Kalam", "\"Be the change you want to see in the world...\"", "\"Life is about the journey, not the destination...\"", "\"I can do this all day\" - Captain America", "\"It is never Black and White, there has always been Shades of Grey...\""];
var arbitrary = Math.floor(Math.random()*9);
var len_quote = quote_msg[arbitrary].length;
function quotedisplay(){
    if(q<len_quote){
        document.getElementById("quote").innerHTML += quote_msg[arbitrary].charAt(q);
        q++;
        setTimeout(quotedisplay, 50);
    }
}

//End
