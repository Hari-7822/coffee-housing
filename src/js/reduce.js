var a = document.querySelector('#del__esp')
var b = document.querySelector('#del__cap')
var c = document.querySelector('#del__lat')
var d = document.querySelector('#del__milk')
var e = document.querySelector('#del__crm')
var f = document.querySelector('#del__latte')


var esp = document.querySelector('.sel__esp--rng')
var cap = document.querySelector('.sel__cap--rng')
var lat = document.querySelector('.sel__lat--rng')
var milk = document.querySelector('.add__milk--rng')
var crm = document.querySelector('.add__crm--rng')
var latte = document.querySelector('.add__lat--rng');

a.addEventListener('click', () => {

        esp.value--
        
    if(esp.value == 0 || esp.value < 0) {
        esp.value = 0
    }

});

b.addEventListener('click', () => {

        cap.value--

    if(cap.value == 0 || cap.value < 0) {
        cap.value = 0
    }

});

c.addEventListener('click', () => {

        lat.value--

    if(lat.value == 0 || lat.value < 0) {
        lat.value = 0
    }

});

d.addEventListener('click', () => {

        milk.value--

    if(milk.value == 0 || milk.value < 0) {
        milk.value = 0
    }

});

e.addEventListener('click', () => {

        crm.value--

    if(crm.value == 0 || crm.value < 0) {
        crm.value = 0
    }

});

f.addEventListener('click', () => {

        latte.value--

    if(latte.value == 0 || latte.value < 0) {
        latte.value = 0
    }

});