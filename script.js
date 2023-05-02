"use strict"

let validdate=()=>{
    let yourname=document.getElementById('yname').value;
    let lovename=document.getElementById('lname').value;
    if(yourname.length==""){
        alert("please enter your name");
        return false;
    }
    else if(lovename.length==""){
        alert("please enter your lover name");
        return false;
    }
    else if(yourname.length<=2){
        alert("Minimum 3 chracter allowed recheack your name");
        return false;
    }
    else if(lovename.length<=2){
        alert("Minimum 3 chracter allowed recheack your lover name");
        return false;
    }
    return true;
}

let clickbtn=()=>{
    if(validdate()){
        let result=Math.floor(Math.random()*100);
        document.getElementById('result').value=result+"%";
        document.getElementById('yname').value="";
        document.getElementById('lname').value="";

    }
}
