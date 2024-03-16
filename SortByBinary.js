class TDANumberBinary{
    value;
    binaryRepresentation;
    numberBits = 0;

    constructor( value ){
        this.setValue( value );
        this.setBinaryRepresentarion();
    }

    setValue( value ){
        this.value = value;
    }

    setBinaryRepresentarion(){
        this.binaryRepresentation = this.convertToBinary( this.getValue() );
    }

    setNumberBits(numberBits){
        this.numberBits = numberBits;
    }

    getValue(){ return this.value }
    getBinaryRepresentation(){ return this.binaryRepresentation }
    getNumberBits(){ return this.numberBits }

    convertToBinary( decimal ){
        let dividend = decimal;
        let residue;
        let binary = [];

        while( dividend != 0 ){
            residue = dividend % 2;
            ( residue == 1 ) && ( this.setNumberBits( this.getNumberBits() + 1 ) );
            if( binary.length  == 0 ){
                binary.push( residue )
            }else{
                binary.unshift( residue) ;
            }
            dividend =  parseInt( dividend / 2 );
        }
        return binary;
    }
}

class SortByBinary{

    BubbleSort( a ){
        let i, j, buble;

        for( i = 0; i < a.length -1; i++ ){
            for( j = 0; j < a.length - i - 1; j++ ){
                if( a[ j ].getNumberBits() < a[ j + 1 ].getNumberBits() ){
                    buble = a[ j ];
                    a[ j ] = a[ j + 1 ];
                    a[ j + 1 ] = buble
                }
            }
        }

        return a.map( element => element.getValue() );
    }

    ShakeSort( a ){
        let i, j, aux;
        let isSwaped = true;
        let start = 0;
        let end = a.length - 1;

        while( isSwaped ){
            isSwaped = false;
            for( i = start; i < end; i++ ){
                if( a[ i ].getNumberBits() < a[ i + 1 ].getNumberBits() ){
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
                if( a[ j ].getNumberBits() > a[ j - 1 ].getNumberBits() ){
                    aux= a[ j ];
                    a[ j ] = a[ j - 1 ];
                    a[ j - 1 ] = aux;

                    isSwaped = true;
                }
            }
            start++;
        }
        return a.map( element => element.getValue() );
    }
}

let a = [ 5, 2, 3, 9, 4, 6, 7, 15, 32 ];
let aux = a.map( element => new TDANumberBinary( element ) );
let sort = new SortByBinary();

console.log( sort.ShakeSort( aux ) );


