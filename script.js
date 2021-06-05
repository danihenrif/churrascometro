function calculaQuantidades(){
    let qtd_adultos = document.getElementById("adultos").value;
    let qtd_criancas = document.getElementById("criancas").value;
    let duracao_evento = document.getElementById("duracao").value;
    
    //Variáveis para armazenar o valor calculado
    let qtd_carne, qtd_cerveja, qtd_refrigerante;

    if(duracao_evento < 6){
        qtd_carne = qtd_adultos * 400 + qtd_criancas * 200;
        qtd_cerveja = qtd_adultos * 1200;
        qtd_refrigerante = qtd_adultos * 1000 + qtd_criancas * 500;
        console.log(qtd_carne);

    }
    else{
        qtd_carne = qtd_adultos * 650 + qtd_criancas * 325;
        qtd_cerveja = qtd_adultos * 1200;
        qtd_refrigerante = qtd_adultos * 1500 + qtd_criancas * 750;
    }
    
    document.getElementById("carne").innerHTML=  qtd_carne/1000 + "kg de carne";
    document.getElementById("cerveja").innerHTML=  qtd_cerveja/1000 + "l de cerveja";
    document.getElementById("refri").innerHTML=  qtd_refrigerante/1000 + "l de refrigerante";


}