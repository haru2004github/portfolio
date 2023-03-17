let navIcon = document.querySelector(".navIcon")
let navDisplay = document.querySelector(".navDisplay")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let main = document.querySelector("main")
let header = document.querySelector("header")
let footer = document.querySelector("footer")

navIcon.addEventListener('click' ,()=>{
    one.classList.toggle('active')
    two.classList.toggle('active')
    three.classList.toggle('active')
    navDisplay.classList.toggle('active')
    main.classList.toggle('hidden')
    header.classList.toggle('h-[1000px]')
    footer.classList.toggle('hidden')
    
})

// scroll reval

// ScrollReveal().reveal('.headline',{
//     origin: 'bottom',
//     distance: '35px' ,
//     duration : 650,
//     interval: 50,
//     delay:200,
//     reset : true,
   
//    });

   //dark mode

const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch")
const darkText = document.querySelector("#dark-text")
const html = document.documentElement;
let isDarkMode = false;



   // Switch theme function
const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    switchTheme()
}

const toDark = () => {
    darkSwitchIcon.classList.add('translate-x-full','bg-slate-dark')
    darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
    darkSwitch.classList.remove('bg-slate-100')
    darkSwitch.classList.add('bg-dark')
    localStorage.setItem('data-theme', 'dark')
    html.classList.add('dark')
    darkText.classList.add('-translate-x-7')
    // darkText.innerText = 'ON'
}

const toLight = () => {
    darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-dark')
    darkSwitch.classList.remove('bg-slate-100')
    darkSwitch.classList.add('bg-slate-100')
    localStorage.removeItem('data-theme')
    html.classList.remove('dark')
    darkText.classList.remove('-translate-x-7')
    darkText.innerText = ''
    darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
    setTimeout(() => {
        darkSwitchIcon.classList.remove('rotate-[360deg]')
    }, 200)
}

const switchTheme = () => {
    isDarkMode ? toDark() : toLight()
}



const dataTheme = localStorage.getItem('data-theme')

dataTheme === 'dark' ? toDark() : toLight();
