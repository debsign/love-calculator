function calculator(name1, name2){
    var n = (Math.random() * 100).toFixed(2);
    var msg;

    if (n > 80) {
        msg = 'Sois almas gemelas!';
    } else if (n > 80){
        msg = 'Hay posibilidades';
    } else {
        msg = 'No sois nada compatibles, buscate a otr@!';
    }

    return {
        value: n,
        message: msg,
        name1: name1,
        name2: name2
    };
    //return [n, msg, name1, name2]
}

function calcular(){
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('messages').classList.remove('hidden');

    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;

    var afinidad = calculator(name1, name2);

    setTimeout(function(){
        document.getElementById('loading').classList.add('hidden');
        
        var comment = document.getElementById('result');
        comment.innerHTML = afinidad.message;
        comment.classList.remove('hidden');
    
        var value = document.getElementById('value');
        value.classList.remove('hidden');
        value.innerHTML = afinidad.name1 + ' y ' + afinidad.name2 + ', vuestra afinidad es: ' + afinidad.value + '%';
    }, 3000)
}