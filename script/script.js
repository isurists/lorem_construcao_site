//animacao secao 2//
var myObserver = new IntersectionObserver( (entries) => {
    entries.forEach ( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } )
})

var secao2 = document.querySelectorAll('.txt2')

secao2.forEach( (element) => myObserver.observe(element) )

//animacao texto secao 3//
var myObserver = new IntersectionObserver( (entries) => {
    entries.forEach ( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } )
})

var txt1 = document.querySelectorAll('.t1')

txt1.forEach( (element) => myObserver.observe(element) )

//animacao secao 3 cards//

var myObserver = new IntersectionObserver( (entries) => {
    entries.forEach ( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } )
})

var secao3 = document.querySelectorAll('.cards')

secao3.forEach( (element) => myObserver.observe(element) )

// Botão Voltar ao Topo//

//Obter o botão//
var backtoTopBtn = document.getElementById('backtoTopBtn')

//Ao rolar para baixo 20px a partir do topo mostra o botão//
window.onscroll = function() {scrollFunction()} 

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backtoTopBtn.style.display = 'block'
    } else {
        backtoTopBtn.style.display = 'none'
    }
}

//Quando clicar no botão, rolar ate o topo//
backtoTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})