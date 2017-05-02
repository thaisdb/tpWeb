function navSection() {
    let ativos = document.getElementsByClassName('active');
    for (let i = 0; i < ativos.length; i++) {
        if (ativos[i].classList.contains('container'))
            ativos[i].classList.add('hidden');
        ativos[i].classList.remove('active');
    }
    event.target.parentNode.classList.add('active');
    document.getElementById(event.target.dataset.section).classList.add('active');
    document.getElementById(event.target.dataset.section).classList.remove('hidden');
}

let nav = document.querySelectorAll('#myNavBar li');
for (let li of nav) {
    li.addEventListener('click', navSection);
}

let coorientador = document.getElementById('cb-coorientador');
coorientador.addEventListener('click', function () {
    if (coorientador.checked) {
        document.getElementById('box-coorientador').classList.remove('hidden');
    } else
        document.getElementById('box-coorientador').classList.add('hidden');
});

