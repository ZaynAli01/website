let menuIcon = document.getElementById('menu-icon')
let hamBurgerLinks = document.getElementById('ham-burger-links')
let hamBurgerul = document.querySelector('#ham-burger-links ul')
let section = document.querySelector('section')
let hamBurgerLi = document.querySelectorAll('#ham-burger-links ul li')


menuIcon.addEventListener('click', ()=>{
    hamBurgerLinks.classList.toggle('show')
    section.classList.toggle('show')
    main.classList.toggle('show')
    footer.classList.toggle('show')
})



hamBurgerul.addEventListener('click', (e)=>{
    
    hamBurgerLi.forEach(element => {
        if(element.classList == 'active'){
        
            element.classList.remove('active')
        }
    });
    
    let clickedLi = e.target
    clickedLi.classList.add('active')
})
