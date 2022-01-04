fetch("https://api.quotable.io/random?maxLength=40")
.then(response => response.json())
.then(data => {
    document.querySelector(".ansii").innerHTML = 
        data.content + "<br>- " + data.author;
}).catch(function() {
    document.querySelector(".ansii").innerHTML = 
        "Your brain is your first Internet <br>- PeterDigger";
});