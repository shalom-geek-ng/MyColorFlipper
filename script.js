let colors = ['pink','yellow','green','purple','blue','brown','grey','white','black','violet','red']
let color = document.querySelector('.color')
let btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    let randomNumbers = [random()]
    document.body.style.backgroundColor = colors[randomNumbers]
    color.textContent = colors[randomNumbers]

})

function random(){
    return Math.floor(Math.random()*colors.length)
}