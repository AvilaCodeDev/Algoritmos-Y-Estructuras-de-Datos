const factorial = () => {
    let i, resultado = 1, numero = 1;

    for( i = 2; i <= numero; i++ ){
        resultado *= i;
    }

    console.log(resultado);
}

factorial();