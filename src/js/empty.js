function disp() {
    var i = document.querySelector(".bill")

    if (i.style.display === 'none') {
        i.style.display = "block"
    } else {
        var nul = null;
        }

    var j = document.querySelector('#esp')

    if (j.value == null || j.value == 0) {
        alert('Order Something...');
        i.style.display = 'none';
    }
}
