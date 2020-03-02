saqueFunc = function (valor) {
    //cédulas disponíveis para saque
    notas = [100, 50, 20, 10, 5, 2];
    //vetor para armazenar as cédulas usadas no saque solicitado
    nUsadas = [0, 0, 0, 0, 0, 0];
    //verifica se o valor é ímpar 
    if (valor % 2 != 0) {
        //verifica se o valor é igual a 5 e já retorna uma única cédula usada, cuja a mesma é a de R$5 
        if (valor == 5) {
            nUsadas[4] = 1;
            return nUsadas;
        }
        //Subtrai o valor do saque solicitado por -5, já armazenando 1 cédula de R$5 no vetor de cédulas usadas
        valor = valor - 5;
        nUsadas[4] = 1;
    }
    //laço para percorrer o vetor de cédulas disponíveis
    for (i = 0; i < notas.length; i++) {
        //verifica se a cédula percorrida não é a de índice 4, que é a de R$5, pois já foi verificada acima
        if (i != 4) {
            //verifica se a cédula percorrida é menor ou igual ao valor
            if (notas[i] <= valor) {
                //Armazena a quantidade usada da cédula percorrida, através do resultado inteiro do valor do saque dividido pela cédula percorrida.
                nUsadas[i] = parseInt(valor / notas[i]);
                //Atualiza o valor pelo resto da divisão
                valor = valor % notas[i];
            }
        }
    }
    //retorna o vetor de cédulas usadas
    return nUsadas;
}

module.exports = saqueFunc;