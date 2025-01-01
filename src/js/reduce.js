// var a = document.querySelector('#del__esp')
// var b = document.querySelector('#del__cap')
// var c = document.querySelector('#del__lat')
// var d = document.querySelector('#del__milk')
// var e = document.querySelector('#del__crm')
// var f = document.querySelector('#del__latte')


// var esp = document.querySelector('.sel__esp--rng')
// var cap = document.querySelector('.sel__cap--rng')
// var lat = document.querySelector('.sel__lat--rng')
// var milk = document.querySelector('.add__milk--rng')
// var crm = document.querySelector('.add__crm--rng')
// var latte = document.querySelector('.add__lat--rng');
function DecrementValue(selector, limit) {
    var element = document.querySelector(selector);
    element.value--;

    if (element.value <= limit) {
        element.value = limit;
    }
}

// Attach event listeners to buttons
document.querySelector('#add__esp').addEventListener('click', () => incrementValue('.sel__esp--rng', 0));
document.querySelector('#add__cap').addEventListener('click', () => incrementValue('.sel__cap--rng', 0));
document.querySelector('#add__lat').addEventListener('click', () => incrementValue('.sel__lat--rng', 0));
document.querySelector('#add__milk').addEventListener('click', () => incrementValue('.add__milk--rng', 0));
document.querySelector('#add__crm').addEventListener('click', () => incrementValue('.add__crm--rng', 0));
document.querySelector('#add__latte').addEventListener('click', () => incrementValue('.add__lat--rng', 0));
