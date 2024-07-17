function likebutton(){
    document.getElementById("item1").innerHTML="Thanks for the Like";
}

function dislikebutton(){
    document.getElementById("item1").innerHTML = "Please Click Like Button 👍"
}

const modeToggler = document.getElementById('togglecheckbox');

modeToggler.addEventListener('change', togglemode);

function togglemode(){
    document.body.classList.toggle("dark-mode");
}