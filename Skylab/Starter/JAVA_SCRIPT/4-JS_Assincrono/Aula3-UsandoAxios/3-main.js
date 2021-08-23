//O axios é utilizado para executar mais facilmente os codigos anteiros
axios.get('https://api.github.com/users/igortn1999')
    .then(function (response) {
        console.log(response);
    })//o .then será executado quando o resolve for chamado na promisse
    .catch(function(error){
        console.warn(error);
    });//.catch é executado quando o reject for chamado na promisse