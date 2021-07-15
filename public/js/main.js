
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
const language = document.getElementById('language')
triggerButton.addEventListener('click', () => {
    if (triggerButton) {
        switchmode.classList.toggle('byeSwitch')
        language.classList.toggle('byelanguage')
        nav.classList.toggle('mobileNav-block')                   

    }
})


// CÓDIGO DE CONTACTO

const icon = document.getElementById('linkedin')
const h3 = document.getElementById('h3')
icon.addEventListener('mouseover', ()=>{ 
    if(icon && window.matchMedia("(min-width: 800px)").matches){
       h3.style.display = 'inline-block';
        h3.style.opacity = '1';        
    }}
   
)
icon.addEventListener('mouseout', ()=>{
    if(icon){
        h3.style.opacity = '0'
        
    }
})




const codepen = document.getElementById('codepen')
const code = document.getElementById('code')
codepen.addEventListener('mouseover', ()=>{ 
    if(codepen&& window.matchMedia("(min-width: 800px)").matches){
        code.style.display = 'inline-block'
        code.style.opacity = '1';  
              
    }}
   
)
codepen.addEventListener('mouseout', ()=>{
    if(codepen){
        code.style.opacity = '0'
        
    }
})


const github = document.getElementById('github')
const git = document.getElementById('git')
github.addEventListener('mouseover', ()=>{ 
    if(github && window.matchMedia("(min-width: 800px)").matches){
        git.style.display = 'inline-block';
        git.style.opacity = '1';        
    }}
   
)
github.addEventListener('mouseout', ()=>{
    if(github && window.matchMedia("(min-width: 800px)").matches){
        git.style.opacity = '0'
        
    }
})


const email = document.getElementById('email')
const em = document.getElementById('em')




email.addEventListener('mouseover', ()=>{ 
    if(email && window.matchMedia("(min-width: 800px)").matches){
        em.style.display = 'inline-block';
        em.style.opacity = '1';        
}}
   
)
email.addEventListener('mouseout', ()=>{
    if(email && window.matchMedia("(min-width: 800px)").matches){
        em.style.opacity = '0'
        
    }
})





})


