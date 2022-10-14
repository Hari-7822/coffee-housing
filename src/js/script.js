class product {

    constructor(prod) {
        this.prod = this.prod;
    }

    prod() {

        var esp = parseInt(document.querySelector('#esp'))
        var cap = parseInt(document.querySelector('#cap'))
        var lat = parseInt(document.querySelector('#lat'))

    }

    add() {
        var milk = parseInt(document.querySelector('#milk'))
        var crm = parseInt(document.querySelector('#crm'))
        var lat1 = parseInt(document.querySelector('#lat1'))
    }

}




class co extends product {

    constructor(tot) {

        this.tot = tot;
        // this.prod = prod;
        // this.add = add;
    }

    sum() {
        // var tot = (esp * 30) + (cap * 50) + (lat * 70) + (milk * 30) + (crm * 45) + (lat1 * 70)
        var tot = 100;
        return tot;
    }
}


var b = document.querySelector('#tot');
let t = new co(tot);
b.innerHTML = co.tot()