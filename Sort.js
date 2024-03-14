const a = [0,2,1,2,0];

console.log( a );

const BubbleSort = ( a ) => {
    let i, j, aux;

    for( i = 0; i < a.length; i++){
        for( j = 0; j < a.length; j++ ){
            if( a[ j ] > a[ j +  1]){
                aux = a[ j ];
                a[ j ] = a[ j + 1 ];
                a[ j + 1 ] = aux;
                console.log( a );
            }

        }
    }

    return a;
}

const ShakeSort = ( a ) => {
    let i, j, aux;
    let isSwaped = true;

    while( isSwaped ){
        isSwaped = false;
        for( i = 0; i < a.length; i++ ){
            if( a[ i ] > a[ i + 1 ]){
                aux= a[ i ];
                a[ i ] = a[ i + 1 ];
                a[ i + 1 ] = aux;

                isSwaped = true;
            }
        }

        if( !isSwaped ) break;

        isSwaped = false;

        for( j = a.length; j > 0; j-- ){
            if( a[ j ] < a[ j - 1 ]){
                aux= a[ j ];
                a[ j ] = a[ j - 1 ];
                a[ j - 1 ] = aux;

                isSwaped = true;
            }
        }
    }
    return a;
}

console.log( BubbleSort( a ) );

console.log( ShakeSort( a ) );
