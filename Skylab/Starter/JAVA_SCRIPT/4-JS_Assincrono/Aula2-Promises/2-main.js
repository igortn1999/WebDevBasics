//Promises são codigos (funcoes) q não vão influenciar na linha do tempo no JS
//vão devolver o valor de resultado só depois de um tempo, não é preciso se preocupar quando o valor sera retornado

var minhaPromise = function(){
    return new Promise(function(resolve, reject){
       var xhr = new XMLHttpRequest();
       xhr.open('GET','https://api.github.com/users/igortn1999');
       xhr.send(null);

       xhr.onreadystatechange = function(){
           if(xhr.readyState === 4){
               if(xhr.status ===200){
                   resolve(JSON.parse(xhr.responseText));
               }
               else{
                   reject('erro na requisição');
               }
           }
       }
    });
}

//var resultado = minhaPromise();
//console.log(resultado);//Por a var resultado ser uma promisse, ele não espera o retorno desta função para continuar para esta linha

minhaPromise()
    .then(function (response) {
        console.log(response);
    })//o .then será executado quando o resolve for chamado na promisse
    .catch(function(error){
        console.warn(error);
    });//.catch é executado quando o reject for chamado na promisse