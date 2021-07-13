
window.addEventListener('load', () =>{
    //Código del dark-mode
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active')
})

const btnSwitchMobile = document.querySelector('#switchMobile');

btnSwitchMobile.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitchMobile.classList.toggle('active')
})

// Código del menú hamburguesa

const triggerButton = document.getElementById('trigger')            
const nav = document.getElementById('mobileNav')
const switchmode = document.getElementById('switchMobile')     

triggerButton.addEventListener('click', () => {
    if (triggerButton) {
        switchmode.classList.toggle('byeSwitch')
        nav.classList.toggle('mobileNav-block')                   

    }
})





})

