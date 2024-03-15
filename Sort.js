const a = [0,2,1,2,0];

console.log( a );

const BubbleSort = ( a ) => {
    let i, j, aux;

    for( i = 0; i < a.length - 1; i++){
        for( j = 0; j < a.length - 1; j++ ){
            if( a[ j ] > a[ j +  1]){
                aux = a[ j ];
                a[ j ] = a[ j + 1 ];
                a[ j + 1 ] = aux;
            }

        }
    }

    return a;
}

const ShakeSort = ( a ) => {
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

console.log( BubbleSort( a ) );

console.log( ShakeSort( a ) );
