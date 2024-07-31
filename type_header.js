var i=0;
var content = "Arjun S S";
var len = content.length;
function foo(){
    if (i<len){
        document.getElementById("titles").innerHTML += content.charAt(i);
        i++;
        setTimeout(foo, 200);
    }
}

var listofcontents = ["Web Developer", "Python Developer", "Editor", "Musician"]
var j = 0;
var k = 0;
// function typeinout(){
//     var content = listofcontents[j];
//     var contentlength = content.length;
//     if(k < contentlength){
//         document.getElementById("msgs").innerHTML += "in-if j, k = " + j + k + " | ";
//         k++;
//         setTimeout(typeinout, 100);
//     }
//     document.getElementById("msgs").innerHTML += "out-if" + j + k + " | ";
// }

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
            setTimeout(typeinout, 750);
        }
        else {
            k=0;
            j++;
            setTimeout(typeinout, 750);
        }
        
    }
    // else{
    //     k=0;
    //     j=0;
    //     document.getElementById("msgs").innerHTML = "else case";
    //     setTimeout(typeinout, 750);
    // }
}

function stay_there(){
    document.getElementById("msgs").innerHTML = "Staying there";
}
// var draw_content = "Hacked version##";
// var len_draw = draw_content.length;
// function drawing(){
//     if(j<len_draw){
//         document.getElementById("msgs").innerHTML += draw_content.charAt(j);
//         j++;
//         setTimeout(drawing, 100);
//     }   
// }

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

var q=0;
var quote_msg = "\"All is well that ends well\"- Anonymous";
var len_quote = quote_msg.length;
function quotedisplay(){
    if(q<len_quote){
        document.getElementById("quote").innerHTML += quote_msg.charAt(q);
        q++;
        setTimeout(quotedisplay, 50);
    }
}
