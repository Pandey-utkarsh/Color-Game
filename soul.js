// let a1= document.querySelector('.topp');
// let a2= document.querySelector('#b');
// let a3= document.querySelector('.dis');

// let tarr = [a1,a2,a3];
// a2.addEventListener('click',()=>{
//     chng();
// })
// function chng(){
//     var x= Math.floor((Math.random()*255)+0);
//     var y= Math.floor((Math.random()*255)+0);
//     var z= Math.floor((Math.random()*255)+0);
//     var temp = Math.floor((Math.random()*3)+0);
//     tarr[temp].style.background = "rgb("+x+","+y+","+z+")";
//     var temp = Math.floor((Math.random()*3)+0);
//     tarr[temp].innerText= "rgb("+x+","+y+","+z+")";
//     return 0;
// }
// var jsdom = require("jsdom");
// var JSDOM = jsdom.JSDOM;

// GLOBAL.document = new JSDOM(html).window.document;
// if (typeof window !== 'undefined') {
//     console.log('You are on the browser');
//   } else {
//     console.log('You are on the server');
//   }
let topog = document.querySelector('.topp');
let col = document.querySelector('.dis');
let np = document.querySelector('#a1');
let easy = document.querySelector('#a2');
let hard = document.querySelector('#a3');
let promp = document.querySelector('#a4');
let t1 = document.querySelector("#a");
let t2 = document.querySelector("#b");
let t3 = document.querySelector("#c");
let t4 = document.querySelector("#d");
let t5 = document.querySelector("#e");
let t6 = document.querySelector("#f");
var i,j, x, y, z, n=6, truecal, ans;
var p1=1, p2=1, p3=1, p4=1, p5=1, p6=1;
let tilearr = [t1,t2,t3,t4,t5,t6];
t1.addEventListener('mouseover', ()=>{
    if(p1){
        t1.style.width = '180px';
        t1.style.height = '180px';
    }
})
t1.addEventListener('mouseout', ()=>{
    t1.style.width = '170px';
    t1.style.height = '170px';
})
t2.addEventListener('mouseover', ()=>{
    if(p2){
        t2.style.width = '180px';
        t2.style.height = '180px';
    }
})
t2.addEventListener('mouseout', ()=>{
    t2.style.width = '170px';
    t2.style.height = '170px';
})
t3.addEventListener('mouseover', ()=>{
    if(p3){
        t3.style.width = '180px';
        t3.style.height = '180px';
    }
})
t3.addEventListener('mouseout', ()=>{
    t3.style.width = '170px';
    t3.style.height = '170px';
})
t4.addEventListener('mouseover', ()=>{
    if(p4){
        t4.style.width = '180px';
        t4.style.height = '180px';
    }
})
t4.addEventListener('mouseout', ()=>{
    t4.style.width = '170px';
    t4.style.height = '170px';
})
t5.addEventListener('mouseover', ()=>{
    if(p5){
        t5.style.width = '180px';
        t5.style.height = '180px';
    }
})
t5.addEventListener('mouseout', ()=>{
    t5.style.width = '170px';
    t5.style.height = '170px';
})
t6.addEventListener('mouseover', ()=>{
    if(p6){
        t6.style.width = '180px';
        t6.style.height = '180px';
    }
})
t6.addEventListener('mouseout', ()=>{
    t6.style.width = '170px';
    t6.style.height = '170px';
})
np.addEventListener('click', ()=>{
    truecal = newplay();
})
promp.innerText = "Press New Colors";
hard.addEventListener('click', ()=>{
    truecal = hardd();
})
easy.addEventListener('click', ()=>{
    truecal = ezy();
})
t1.addEventListener('click', ()=>{
    tile1(truecal);
})
t2.addEventListener('click', ()=>{
    tile2(truecal);
})
t3.addEventListener('click', ()=>{
    tile3(truecal);
})
t4.addEventListener('click', ()=>{
    tile4(truecal);
})
t5.addEventListener('click', ()=>{
    tile5(truecal);
})
t6.addEventListener('click', ()=>{
    tile6(truecal);
})

function newplay(){
    topog.style.background = "rgb(255,191,0)";
    promp.innerText = "Find the correct color";
    np.innerText = "NEW COLORS";
    x= Math.floor((Math.random()*256)+0);
    y= Math.floor((Math.random()*256)+0);
    z= Math.floor((Math.random()*256)+0);
    col.innerText= "rgb("+x+","+y+","+z+")";
    var temp = Math.floor((Math.random()*6)+0);
    var l1, l2, l3;
    tilearr[temp].style.background = "rgb("+x+","+y+","+z+")";
    tilearr[temp].innerText = "answer";
    for(i=0;i<6;i++){
        if(i==temp){
            continue;
        }
        else{
            l1= Math.floor((Math.random()*256)+0);
            l2= Math.floor((Math.random()*256)+0);
            l3= Math.floor((Math.random()*256)+0);
            tilearr[i].style.background = "rgb("+l1+","+l2+","+l3+")";
            tilearr[i].innerText = "1";
        }
    }
    n=6;
    return {x,y,z,n};
}
function hardd(){
    topog.style.background = "rgb(255,191,0)";
    promp.innerText = "Find the correct color";
    np.innerText = "NEW COLORS";
    x= Math.floor((Math.random()*256)+0);
    y= Math.floor((Math.random()*256)+0);
    z= Math.floor((Math.random()*256)+0);
    col.innerText= "rgb("+x+","+y+","+z+")";
    var temp = Math.floor((Math.random()*6)+0);
    var l1, l2, l3;
    tilearr[temp].style.background = "rgb("+x+","+y+","+z+")";
    tilearr[temp].innerText = "answer";
    for(i=0;i<6;i++){
        if(i==temp){
            continue;
        }
        else{
            l1= Math.floor((Math.random()*256)+0);
            l2= Math.floor((Math.random()*256)+0);
            l3= Math.floor((Math.random()*256)+0);
            tilearr[i].style.background = "rgb("+l1+","+l2+","+l3+")";
            tilearr[i].innerText = "1";
        }
    }
    n=6;
    return {x,y,z,n};
}
function ezy(){
    topog.style.background = "rgb(255,191,0)";
    promp.innerText = "Find the correct color";
    np.innerText = "NEW COLORS";
    x= Math.floor((Math.random()*256)+0);
    y= Math.floor((Math.random()*256)+0);
    z= Math.floor((Math.random()*256)+0);
    col.innerText= "rgb("+x+","+y+","+z+")";
    var temp = Math.floor((Math.random()*3)+0);
    var l1, l2, l3;
    tilearr[temp].style.background = "rgb("+x+","+y+","+z+")";
    tilearr[temp].innerText = "answer";
    for(i=0;i<6;i++){
        if(i==temp){
            continue;
        }
        else if(i<=2){
            l1= Math.floor((Math.random()*256)+0);
            l2= Math.floor((Math.random()*256)+0);
            l3= Math.floor((Math.random()*256)+0);
            tilearr[i].style.background = "rgb("+l1+","+l2+","+l3+")";
            tilearr[i].innerText = "1";
        }
        else{
            tilearr[i].style.background = "rgb(59,58,56)";
        }
    }
    n=3;
    return {x,y,z,n};
}
function tile1(ans){
    if(t1.innerText === "answer"){
        topog.style.backgroundColor = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        promp.innerText = "Correct!!";
        np.innerText = "PLAY AGAIN";
        p1=1, p2=1, p3=1, p4=1, p5=1, p6=1;
        for(i=0;i<ans.n;i++){
            tilearr[i].style.background = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        }
    }
    else{
        t1.style.background = "rgb(59,58,56)";
        promp.innerText = "Try Again!";
        p1=0;
    }
    return 0;
}
function tile2(ans){
    if(t2.innerText === "answer"){
        topog.style.backgroundColor = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        promp.innerText = "Correct!!";
        np.innerText = "PLAY AGAIN";
        p1=1, p2=1, p3=1, p4=1, p5=1, p6=1;
        for(i=0;i<ans.n;i++){
            tilearr[i].style.background = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        }
    }
    else{
        t2.style.background = "rgb(59,58,56)";
        promp.innerText = "Try Again!";
        p2=0;
    }
    return 0;
}
function tile3(ans){
    if(t3.innerText === "answer"){
        topog.style.backgroundColor = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        promp.innerText = "Correct!!";
        np.innerText = "PLAY AGAIN";
        p1=1, p2=1, p3=1, p4=1, p5=1, p6=1;
        for(i=0;i<ans.n;i++){
            tilearr[i].style.background = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        }
    }
    else{
        t3.style.background = "rgb(59,58,56)";
        promp.innerText = "Try Again!";
        p3=0;
    }
    return 0;
}
function tile4(ans){
    if(t4.innerText === "answer"){
        topog.style.backgroundColor = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        promp.innerText = "Correct!!";
        np.innerText = "PLAY AGAIN";
        p1=1, p2=1, p3=1, p4=1, p5=1, p6=1;
        for(i=0;i<ans.n;i++){
            tilearr[i].style.background = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        }
    }
    else{
        t4.style.background = "rgb(59,58,56)";
        promp.innerText = "Try Again!";
        p4=0;
    }
    return 0;
}
function tile5(ans){
    if(t5.innerText === "answer"){
        topog.style.backgroundColor = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        promp.innerText = "Correct!!";
        np.innerText = "PLAY AGAIN";
        p1=1, p2=1, p3=1, p4=1, p5=1, p6=1;
        for(i=0;i<ans.n;i++){
            tilearr[i].style.background = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        }
    }
    else{
        t5.style.background = "rgb(59,58,56)";
        promp.innerText = "Try Again!";
        p5=0;
    }
    return 0;
}
function tile6(ans){
    if(t6.innerText === "answer"){
        topog.style.backgroundColor = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        promp.innerText = "Correct!!";
        np.innerText = "PLAY AGAIN";
        p1=1, p2=1, p3=1, p4=1, p5=1, p6=1;
        for(i=0;i<ans.n;i++){
            tilearr[i].style.background = "rgb("+ans.x+","+ans.y+","+ans.z+")";
        }
    }
    else{
        t6.style.background = "rgb(59,58,56)";
        promp.innerText = "Try Again!";
        p6=0;
    }
    return 0;
}