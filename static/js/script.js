$(document).ready(function(){
        $(".icon").fadeIn("slow");
        console.log("working");
});

window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    const nav2 = document.querySelector('.submenu');
    if(this.scrollY <= 200) nav.style.backgroundColor = "rgba(255, 255, 255,0.2)"; 
    else nav.style.backgroundColor = "azure";
    if(this.scrollY <= 200) nav2.style.backgroundColor = "rgba(255, 255, 255,0.2)"; 
    else nav2.style.backgroundColor = "azure";
};

function dropdown(){
    var elem = document.getElementById("dropmenu");
    if ( elem.style.display === "none"){
        elem.style.display = "block";
    }
    else{
        elem.style.display = "none";
    }
}

function myFunction() {
    document.getElementById("dropmenu").style.display = "none";
}

