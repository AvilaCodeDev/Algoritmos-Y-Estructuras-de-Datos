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
let b = [];

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

 for( i = 1; i < a.length; i++ ){
     for( j = 0; j < aux.length; j++ ){
        push = true;
        if( aux[ j ].getValue() == a[ i ] ){
            aux[ j ].setFrecuency( aux[ j ].getFrecuency() + 1 );
            push = false;
        }
    }
    if( push )  aux[ aux.length ] = new Number( a[ i ] );
 }

 return aux;
}

const SortByFrecuency = ( a ) => {
    let i, j, aux;
    let isSwapped= true;
    let b = [];
    let start = 0;
    let end = a.length - 1;
    
    while( isSwapped ){
        isSwapped = false;

        for( i = start; i < end  ; i++){
            if( a[ i ].getFrecuency() < a[ i + 1 ].getFrecuency() ){
                aux = a[ i ];
                a[ i ] = a[ i +  1 ];
                a[ i + 1 ] = aux;

                isSwapped = true;
            }
        }

        if( !isSwapped ) break;
        end--;
        for( j = end ; j > start; j-- ){
            if( a[ j ].getFrecuency() > a[ j - 1 ].getFrecuency() ){
                aux = a[ j ];
                a[ j ] = a[ j - 1 ];
                a[ j - 1 ] = aux;

                isSwapped = true;
            }
        }
        start++;
    }

    for( i = 0; i < a.length; i++ ){
        for( j = 0; j < a[i].getFrecuency(); j++ ){
            b[ b.length ] = a[ i ].getValue();
        }
    }

    return b;
}

console.log( a );

a = BubbleSort( a );
b = CountFrecuency( a );
a = SortByFrecuency( b );

console.log( a );