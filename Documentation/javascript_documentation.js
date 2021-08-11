(function () {

    var elements = document.querySelectorAll(".list");   
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    } 
})();


/* Trick for getting selectors to work. Some only return a collection so, you may need to loop through the results. This will be true for querySelectorAll and getElementsByClassName */




