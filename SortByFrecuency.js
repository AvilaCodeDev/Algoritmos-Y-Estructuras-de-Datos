class Number {
    value;
    frecuency;

    constructor( value ){
        this.setValue( value );
        this.setFrecuency( 1 );
    }


    getValue(){
        return this.value;
    }

    getFrecuency(){
        return this.frecuency;
    }

    setValue( value ){
        this.value = value;
    }

    setFrecuency( frecuency ){
        this.frecuency = frecuency;
    }
}

let a = [ 5,5,4,6,4 ];

const BubbleSort = ( a ) => {
    let i, j, aux;
    
    for( i = 0; i < a.length; i++ ){
        for( j = 0; j < a.length; j++ ){
            if( a[ j ] > a[ j + 1 ]){
                aux = a[ j ];
                a[ j ] = a[ j + 1 ];
                a[ j + 1 ] = aux
            }
        }
    }
    return a;
}

const CountFrecuency = ( a ) => {
 let i, j, aux =[ new Number( a[ 0 ]) ];
 let push;
//  console.log( a );

 for( i = 1; i < a.length; i++ ){
     for( j = 0; j < aux.length; j++ ){
        push = true;
        if( aux[ j ].getValue() == a[ i ] ){
            console.log('suma', a[ i ], aux[ j ].getValue() , `---- ${i}`);
            aux[ j ].setFrecuency( aux[ j ].getFrecuency() + 1 );

            push = false;
        }
    }
    if( push )  aux[ aux.length ] = new Number( a[ i ] );
 }

 return aux;
}

a = BubbleSort( a );
console.log( CountFrecuency( a ) );