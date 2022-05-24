// toggle style-switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//Hide style-switcher on scroll
window.addEventListener("scroll", ()=> {
    if( document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

// Theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}
//theme light and dark
const dayNigth = document.querySelector(".day-nigth");
dayNigth.addEventListener("click", ()=> {
    dayNigth.querySelector("i").classList.toggle("fa-moon");
    dayNigth.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark")
} )
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        dayNigth.querySelector("i").classList.add("fa-moon")
    }
    else
    {
        dayNigth.querySelector("i").classList.add("fa-sun")
    }
})