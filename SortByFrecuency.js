class TDANumber {
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

class SortByFrecuency{

    BubbleSort( a ){
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

    CountFrecuency( unsortedArray ){
        let i, j, aux = [];
        let push;

        let  a = this.BubbleSort( unsortedArray );
        aux[0] = new TDANumber( a[0] );
       
        for( i = 1; i < a.length; i++ ){
            for( j = 0; j < aux.length; j++ ){
                // console.log( a[i], aux[j] )
               push = true;
               if( aux[ j ].getValue() == a[ i ] ){
                   aux[ j ].setFrecuency( aux[ j ].getFrecuency() + 1 );
                   push = false;
               }
           }
           if( push )  aux[ aux.length ] = new TDANumber( a[ i ] );
        }
        return aux;
       }

    SortByFrecuency( unsortedArray ) {
        let i, j, aux;
        let isSwapped= true;
        let b = [];
        let a = this.CountFrecuency( unsortedArray );
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
}

let a = [ 5,5,4,6,4 ];
let sort = new  SortByFrecuency();

console.log( sort.SortByFrecuency( a ) );