import { generateMaskDecimal, decimalToBinary, generateDirecctionSubRed, generateDirecctionSubRedDecimal, generateBroadcast, generateMask, generatefirstDirecction, generateLastDirecction, generateDirectionsAvailable } from "./convert.js";

export const ipInput = (input) => {

    input.addEventListener('input', (event) => {
        const value = input.value;
        const max = input.max
        const min = input.min
        const number = parseInt(value);

        if (isNaN(number)) {
            input.value = '';
        } else if (number > max) {
            input.value = max;

        } else if (number === 0) {
            input.value = min;
        }
    });
}

export const ipFocus = (input) => {
    input.addEventListener('focus', (event) => {
        const value = input.value;
        if (value === '0') {
            input.value = '';
        }
    });
}

export const ipBlur = (input) => {
    input.addEventListener('blur', (event) => {
        const value = input.value;
        const id = input.id[4];
        if (value === '') {
            input.value = '0';
        }
        const binary = decimalToBinary(value);
        const element = document.getElementById(`dipb-${id}`);
        let octet = '';
        for (let i = binary.length - 1; i >= 0; i--) {
            if (i === 3) {
                octet += ' ';
            }
            octet += binary[i];
        }
        element.value = octet;


        generateDirecctionSubRed();
        generateDirecctionSubRedDecimal();
        generateBroadcast();
        generatefirstDirecction();
        generateLastDirecction();
        generateDirectionsAvailable();

    
    });

}

export const ipMaskBlur = (input) => {

    input.addEventListener('blur', (event) => {
        const value = input.value;
        if (value === '' || value === '0') {
            input.value = '1';

            const ms1 = document.getElementById('ms-1');
            const ms2 = document.getElementById('ms-2');
            const ms3 = document.getElementById('ms-3');
            const ms4 = document.getElementById('ms-4');
            generateMaskDecimal(input, ms1, ms2, ms3, ms4);
            const dip = document.getElementById('dip-5');
            generateMask(dip, ms1.value, ms2.value, ms3.value, ms4.value);
            generateDirecctionSubRed();
            generateDirecctionSubRedDecimal();
            generateBroadcast();
            generatefirstDirecction();
            generateLastDirecction();
            generateDirectionsAvailable();
    
        
        }else{
            const ms1 = document.getElementById('ms-1');
            const ms2 = document.getElementById('ms-2');
            const ms3 = document.getElementById('ms-3');
            const ms4 = document.getElementById('ms-4');
            const dip = document.getElementById('dip-5');
            generateMask(dip, ms1.value, ms2.value, ms3.value, ms4.value);
            generateDirecctionSubRed();
            generateDirecctionSubRedDecimal();
            generateBroadcast();
            generatefirstDirecction();
            generateLastDirecction();
            generateDirectionsAvailable();
    
        }
    });
}

export const ipMaskKeyUp = (input) => {
    input.addEventListener('keyup', (event) => {
        const value = input.value;
        const ms1 = document.getElementById('ms-1');
        const ms2 = document.getElementById('ms-2');
        const ms3 = document.getElementById('ms-3');
        const ms4 = document.getElementById('ms-4');
        generateMaskDecimal(input, ms1, ms2, ms3, ms4);
        const dip = document.getElementById('dip-5');
        generateMask(dip, ms1.value, ms2.value, ms3.value, ms4.value);
        generateDirecctionSubRed();
        generateDirecctionSubRedDecimal();
        generateBroadcast();
        generatefirstDirecction();
        generateLastDirecction();
        generateDirectionsAvailable();
    });
}


