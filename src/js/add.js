var a = document.querySelector('#add__esp')
var b = document.querySelector('#add__cap')
var c = document.querySelector('#add__lat')
var d = document.querySelector('#add__milk')
var e = document.querySelector('#add__crm')
var f = document.querySelector('#add__latte')


var esp = document.querySelector('.sel__esp--rng')
var cap = document.querySelector('.sel__cap--rng')
var lat = document.querySelector('.sel__lat--rng')
var milk = document.querySelector('.add__milk--rng')
var crm = document.querySelector('.add__crm--rng')
var latte = document.querySelector('.add__lat--rng')




a.addEventListener('click', () => {

    esp.value++

});

b.addEventListener('click', () => {

    cap.value++

});

c.addEventListener('click', () => {

    lat.value++

});

d.addEventListener('click', () => {

    milk.value++

});

e.addEventListener('click', () => {

    crm.value++

});

f.addEventListener('click', () => {

    latte.value++

})

