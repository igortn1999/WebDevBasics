//AJAX é uma requisição assincrona realizada em algum backend
//é uma forma de requisitar informações do servidor sem precisar recarregar a pagina

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/igortn1999');//GET é para buscar um informação
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState ===4){
        console.log(JSON.parse(xhr.responseText));
    }
}