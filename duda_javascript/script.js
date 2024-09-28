function solicitarDados(){
    //Solicita o nome do usuário
    let nome = prompt ("Qual é o seu nome?");

    //Solicita a idade do usuário
    let idade = prompt ("Qual é o sua idade?");

    //Exibe a mensagem
    alert("Olá, " + nome + "! Você tem " + idade + " anos. ");

    //Mostra os dados no console
    console.log ("Nome do usuário", nome);
    console.log ("Idade do usuário", idade);
}