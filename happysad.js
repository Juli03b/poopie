const h1 = document.querySelector("h1")
setInterval(function(){
    if(h1.classList.contains("big")){ 
        h1.innerText = "sad"
    }else{
        h1.innerText = "happy"
    }
h1.classList.toggle('big');
h1.classList.toggle('small');
}, 1000
)