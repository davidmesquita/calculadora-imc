const calcular = document.getElementById('calcular');

function imc(){
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !=='' && altura !=='' && peso !=='') {
    
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificação = '';

    if (valorIMC < 18.5){
      classificação = 'Abaixo do Peso';

    }else if(valorIMC < 25){
      classificação = 'com peso ideal';
    }else if(valorIMC < 30){
      classificação = 'levemente acima do peso';
    }else if(valorIMC < 35){
      classificação = 'com obesidade grau I';
    }else if(valorIMC < 40){
      classificação = 'com obesidade grau II';
    }else{
      classificação = 'com a obesidade grau III (morbida)';
    }


    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação}`;



  }else {
    resultado.textContent = 'todos os campos tem que estar preenchidos'
  }
}

calcular.addEventListener('click', imc);