window.addEventListener('load', ()=>{
    const icon = document.getElementById('linkedin')
    const h3 = document.getElementById('h3')

    icon.addEventListener('mouseover', ()=>{ 
        if(icon){
            h3.style.opacity = '1';
            icon.style.color = 'red'
        }}
       
    )
    icon.addEventListener('mouseout', ()=>{
        if(!icon){
            h3.style.opacity = '0'
        }
    })
})