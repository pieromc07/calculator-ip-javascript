export const getClosestPowerOfBaseTwo = (number) => {
    let power = 0;
    while (number >= Math.pow(2, power)) {
        power++;
    }
    return (power - 1);
}

export const getMaskDecimal = (mask) => {
    let values = [128, 192, 224, 240, 248, 252, 254, 255];
    switch (mask) {
        case 1:
            return values[0];
        case 2:
            return values[1];
        case 3:
            return values[2];
        case 4:
            return values[3];
        case 5:
            return values[4];
        case 6:
            return values[5];
        case 7:
            return values[6];
        case 8:
            return values[7];
        default:
            return 0;
    }

}

export const getNextHighestNumberWithouZero = (number) => {
    const values = [128, 192, 224, 240, 248, 252, 254, 255];
    const value = parseInt(number);
    let index = values.indexOf(value);
    if (index === -1) {
        for (let i = 0; i < values.length; i++) {
            if (values[i] > value) {
                return values[i];
            }
        }
    }
    else {
        return value;
    }
}

export const getNextHighestNumber = (number) => {
    const values = [0, 128, 192, 224, 240, 248, 252, 254, 255];
    let value = parseInt(number);
    // ver si numer esta en el array
    let index = values.indexOf(value);
    if (index === -1) {
        for (let i = 0; i < values.length; i++) {
            if (values[i] > value) {
                return values[i];
            }
        }
    }
    else {
        return value;
    }
}

export const getMaskDecimalIP = (number, input) => {
    switch (number) {
        case 128:
            return 1 + input;
        case 192:
            return 2 + input;
        case 224:
            return 3 + input;
        case 240:
            return 4 + input;
        case 248:
            return 5 + input;
        case 252:
            return 6 + input;
        case 254:
            return 7 + input;
        case 255:
            return 8 + input;
        default:
            return 0;
    }
}

export const getZeroToOctet = (value) => {
    if(value === '0') {
        return '00000000';
    }else{
        return value
    }
}