
let coorientador = document.getElementById('cb-coorientador');
console.log(coorientador.checked);
coorientador.addEventListener('click', function(){
    if(coorientador.checked){
        document.getElementById('box-coorientador').classList.remove('hidden');
    }else document.getElementById('box-coorientador').classList.add('hidden');
});

