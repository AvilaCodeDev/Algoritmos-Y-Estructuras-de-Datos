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

class SortByArray{

    ShakeSort( a ){
        let i, j, aux;
        let isSwaped = true;
        let start = 0;
        let end = a.length - 1;

        while( isSwaped ){
            isSwaped = false;
            for( i = start; i < end; i++ ){
                if( a[ i ] > a[ i + 1 ]){
                    aux= a[ i ];
                    a[ i ] = a[ i + 1 ];
                    a[ i + 1 ] = aux;

                    isSwaped = true;
                }
            }

            if( !isSwaped ) break;

            isSwaped = false;
            end--;
            for( j = end; j > start; j-- ){
                if( a[ j ] < a[ j - 1 ]){
                    aux= a[ j ];
                    a[ j ] = a[ j - 1 ];
                    a[ j - 1 ] = aux;

                    isSwaped = true;
                }
            }
            start++;
        }
        return a;
    }

    CountFrecuency( unsortedArray ){
        let i, j, aux = [];
        let push;

        let a = this.ShakeSort( unsortedArray );
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

    Sort(unsortedArray, b ){
        let i, j, k;
        let aux;
        // let a = this.CountFrecuency( unsortedArray );
        let a = this.ShakeSort( unsortedArray );
        let c = [];
        let count = 0;

        for( i = 0 ; i < b.length - 1 ; i++ ){
            for( j = 0 + i; j < a.length - 1; j++ ){
                for( k = 0; k < a.length - 1; k++ ){
                    console.log( `${ j } , ${ k }` );
                    if( a[ k + 1 ] == b[ i ] ){
                        aux = a[ k ];
                        a[ k ] = a[ k + 1 ];
                        a[ k + 1 ] = aux;

                    }
                    count++;
                }
            }
        }
        // for( i = 0; i < a.length; i++ ){
        //     for( j = 0; j < a[i].getFrecuency(); j++ ){
        //         c[ c.length ] = a[ i ].getValue();
        //     }
        // }
        // console.log( c );
        console.log( a, count );
    }
}

const a = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
const b = [2, 1, 8, 3];


let sort = new SortByArray();
// console.log( a, b );
sort.Sort( a, b );