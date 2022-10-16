const button = document.getElementById('generate'); 

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(result)) {
        result = 'Insira um valor';
    }

    if(min > max) {
    	result = 'Insira um valor a cima do numero mínimo';
    }

    document.querySelector('#result > span').textContent = result;

});
