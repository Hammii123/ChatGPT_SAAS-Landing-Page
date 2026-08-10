const hamburgerBtn = document.getElementById("hamburger-btn");
const navlinks = document.getElementById("nav-links");

hamburgerBtn.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
});

const links = navlinks.querySelectorAll("a");
links.forEach((link) => {
    link.addEventListener("click" , ()=>{
        navlinks.classList.remove("open");
    });
});