let pageTitle = document.getElementById("pageTitle");
console.log(pageTitle);

function changeTitleColor(){
    document.getElementById("pageTitle").classList.toggle("red");
    document.getElementById("pageTitle").classList.toggle("blue");
}


function paragraph1Bold(){
    document.getElementById("paragraph1").classList.add("bold");
}

function changingParagraphContent(){
    document.getElementById("paragraph2").innerHTML = "This content has been changed"
}


