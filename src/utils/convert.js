import { getClosestPowerOfBaseTwo, getMaskDecimal, getMaskDecimalIP, getZeroToOctet } from './utils.js';

export const decimalToBinary = (decimal) => {
    let binary = [0, 0, 0, 0, 0, 0, 0, 0];
    let residue = decimal;
    let pow = 0;
    while (residue > 0) {
        pow = getClosestPowerOfBaseTwo(residue);
        residue -= Math.pow(2, pow);
        binary[pow] = 1;
    }
    return binary;
}

export const arrayToString = (binary) => {
    let octet = '';
    for (let i = binary.length - 1; i >= 0; i--) {
        if (i === 3) {
            octet += ' ';
        }
        octet += binary[i];
    }
    return octet;
}

export const stringToBinary = (string) => {
    let binary = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 4) {
            binary += ' ';
        }
        binary += string[i];

    }
    return binary;
}
export const generateMaskDecimal = (element, ms1, ms2, ms3, ms4) => {
    const value = element.value;
    let mask = parseInt(value);
    let maskDecimal = [0, 0, 0, 0];
    if (mask > 0 && mask <= 8) {
        maskDecimal[0] = getMaskDecimal(mask);
    } else {
        let mod = 0;
        let residue = 0;
        let count = 0;
        residue = mask / 8;
        mod = mask % 8;

        for (let i = 0; i <= (residue - 1); i++) {
            maskDecimal[i] = getMaskDecimal(8);
            count++;
        }
        maskDecimal[count] = getMaskDecimal(mod);
    }
    ms1.value = maskDecimal[0];
    ms2.value = maskDecimal[1];
    ms3.value = maskDecimal[2];
    ms4.value = maskDecimal[3];
}

export const generateMask = (dip, ms1, ms2, ms3, ms4) => {
    const ms1Value = parseInt(ms1);
    const ms2Value = parseInt(ms2);
    const ms3Value = parseInt(ms3);
    const ms4Value = parseInt(ms4);

    if (ms1Value <= 255 && ms2Value === 0) {
        dip.value = getMaskDecimalIP(ms1Value, 0);
    } else if (ms2Value <= 255 && ms3Value === 0) {
        dip.value = getMaskDecimalIP(ms2Value, 8);
    } else if (ms3Value <= 255 && ms4Value === 0) {
        dip.value = getMaskDecimalIP(ms3Value, 16);
    } else if (ms4Value >= 128) {
        dip.value = getMaskDecimalIP(ms4Value, 24);
    }

    document.getElementById('msb-1').value = arrayToString(decimalToBinary(ms1Value));
    document.getElementById('msb-2').value = arrayToString(decimalToBinary(ms2Value));
    document.getElementById('msb-3').value = arrayToString(decimalToBinary(ms3Value));
    document.getElementById('msb-4').value = arrayToString(decimalToBinary(ms4Value));
}

export const generateMaskSubRedBinary = (element) => {
    const id = element.id;
    const value = element.value;

    let maskDecimal = decimalToBinary(value);

    const inputBinary = document.getElementById(`msb-${id[3]}`);
    inputBinary.value = arrayToString(maskDecimal);
}


export const generateDirecctionSubRed = () => {
    const dip1 = parseInt(document.getElementById('dipb-1').value.split(' ').join(''), 2);
    const dip2 = parseInt(document.getElementById('dipb-2').value.split(' ').join(''), 2);
    const dip3 = parseInt(document.getElementById('dipb-3').value.split(' ').join(''), 2);
    const dip4 = parseInt(document.getElementById('dipb-4').value.split(' ').join(''), 2);

    const msb1 = parseInt(document.getElementById('msb-1').value.split(' ').join(''), 2)
    const msb2 = parseInt(document.getElementById('msb-2').value.split(' ').join(''), 2)
    const msb3 = parseInt(document.getElementById('msb-3').value.split(' ').join(''), 2)
    const msb4 = parseInt(document.getElementById('msb-4').value.split(' ').join(''), 2)



    document.getElementById('dsb-1').value = ((dip1 & msb1).toString(2) === '0') ? '0000 0000' : stringToBinary((dip1 & msb1).toString(2));
    document.getElementById('dsb-2').value = ((dip2 & msb2).toString(2) === '0') ? '0000 0000' : stringToBinary((dip2 & msb2).toString(2));
    document.getElementById('dsb-3').value = ((dip3 & msb3).toString(2) === '0') ? '0000 0000' : stringToBinary((dip3 & msb3).toString(2));
    document.getElementById('dsb-4').value = ((dip4 & msb4).toString(2) === '0') ? '0000 0000' : stringToBinary((dip4 & msb4).toString(2));

}


export const generateDirecctionSubRedDecimal = () => {
    const dsb1 = document.getElementById('dsb-1').value.split(' ').join('');
    const dsb2 = document.getElementById('dsb-2').value.split(' ').join('');
    const dsb3 = document.getElementById('dsb-3').value.split(' ').join('');
    const dsb4 = document.getElementById('dsb-4').value.split(' ').join('');
    const dip5 = document.getElementById('dip-5').value;

    document.getElementById('ds-1').value = parseInt(dsb1, 2);
    document.getElementById('ds-2').value = parseInt(dsb2, 2);
    document.getElementById('ds-3').value = parseInt(dsb3, 2);
    document.getElementById('ds-4').value = parseInt(dsb4, 2);
    document.getElementById('ds-5').value = dip5;
}



export const generateBroadcast = () => {
    const dip1 = getZeroToOctet(parseInt(document.getElementById('dipb-1').value.split(' ').join(''), 2).toString(2));
    const dip2 = getZeroToOctet(parseInt(document.getElementById('dipb-2').value.split(' ').join(''), 2).toString(2));
    const dip3 = getZeroToOctet(parseInt(document.getElementById('dipb-3').value.split(' ').join(''), 2).toString(2));
    const dip4 = getZeroToOctet(parseInt(document.getElementById('dipb-4').value.split(' ').join(''), 2).toString(2));

    const msb1 = getZeroToOctet(parseInt(document.getElementById('msb-1').value.split(' ').join(''), 2).toString(2));
    const msb2 = getZeroToOctet(parseInt(document.getElementById('msb-2').value.split(' ').join(''), 2).toString(2));
    const msb3 = getZeroToOctet(parseInt(document.getElementById('msb-3').value.split(' ').join(''), 2).toString(2));
    const msb4 = getZeroToOctet(parseInt(document.getElementById('msb-4').value.split(' ').join(''), 2).toString(2));



    const dipb = `${dip1}${dip2}${dip3}${dip4}`;
    const msb = `${msb1}${msb2}${msb3}${msb4}`;

    let i = msb.indexOf('0');
    let broadcast = '';
    // remplazar apartir de la posicion i
    for (let iterator = 0; iterator < dipb.length; iterator++) {
        if (iterator < i) {
            broadcast += dipb[iterator];
        } else {
            broadcast += '1';
        }
    }



    const dbt1 = parseInt(broadcast.substring(0, 8), 2);
    const dbt2 = parseInt(broadcast.substring(8, 16), 2);
    const dbt3 = parseInt(broadcast.substring(16, 24), 2);
    const dbt4 = parseInt(broadcast.substring(24, 32), 2);

    document.getElementById('dbt-1').value = dbt1;
    document.getElementById('dbt-2').value = dbt2;
    document.getElementById('dbt-3').value = dbt3;
    document.getElementById('dbt-4').value = dbt4;
}

export const generatefirstDirecction = () => {
    const ds1 = parseInt(document.getElementById('ds-1').value);
    const ds2 = parseInt(document.getElementById('ds-2').value);
    const ds3 = parseInt(document.getElementById('ds-3').value);
    const ds4 = parseInt(document.getElementById('ds-4').value);


    document.getElementById('pdip-1').value = ds1;
    document.getElementById('pdip-2').value = ds2;
    document.getElementById('pdip-3').value = ds3;
    document.getElementById('pdip-4').value = ds4 + 1;
}

export const generateLastDirecction = () => {
    const dbt1 = parseInt(document.getElementById('dbt-1').value);
    const dbt2 = parseInt(document.getElementById('dbt-2').value);
    const dbt3 = parseInt(document.getElementById('dbt-3').value);
    const dbt4 = parseInt(document.getElementById('dbt-4').value);

    document.getElementById('udip-1').value = dbt1;
    document.getElementById('udip-2').value = dbt2;
    document.getElementById('udip-3').value = dbt3;
    document.getElementById('udip-4').value = dbt4 - 1;
}

export const generateDirectionsAvailable = () => {
    const msb1 = getZeroToOctet(parseInt(document.getElementById('msb-1').value.split(' ').join(''), 2).toString(2));
    const msb2 = getZeroToOctet(parseInt(document.getElementById('msb-2').value.split(' ').join(''), 2).toString(2));
    const msb3 = getZeroToOctet(parseInt(document.getElementById('msb-3').value.split(' ').join(''), 2).toString(2));
    const msb4 = getZeroToOctet(parseInt(document.getElementById('msb-4').value.split(' ').join(''), 2).toString(2));
    const msb = `${msb1}${msb2}${msb3}${msb4}`;
    // contar cuantos 0 hay en la cadena
    let i = msb.indexOf('0');
    let dipd = msb.length - i;
    document.getElementById('dipd').value = (Math.pow(2,parseInt(dipd)) - 2);
}