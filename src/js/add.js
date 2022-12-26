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

    if(esp.value == 150 || esp.value > 150) {
    
        esp.value = 150
    
    }

});

b.addEventListener('click', () => {

    cap.value++

    if (cap.value == 150 || esp.value > 150) {

        esp.value = 150
        
    }

});

c.addEventListener('click', () => {

    lat.value++

    if (lat.value == 150 || esp.value > 150) {

        lat.value = 150
        
    }

});

d.addEventListener('click', () => {

    milk.value++

    if (milk.value == 150 || milk.value > 150) {
        
        milk.value = 150
        
    }

});

e.addEventListener('click', () => {

    crm.value++

    if (crm.value == 150 || crm.value > 150) {
        
        crm.value = 150
        
    }

});

f.addEventListener('click', () => {

    latte.value++

    if (latte.value == 150 || latte.value > 150) {

        latte.value = 150
        
    }

})

