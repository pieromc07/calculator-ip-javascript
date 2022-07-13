import { generateMaskDecimal, generateMask, generateDirecctionSubRed, generateDirecctionSubRedDecimal, generateBroadcast, generatefirstDirecction, generateLastDirecction, generateDirectionsAvailable } from "./convert.js";
import { getNextHighestNumber, getNextHighestNumberWithouZero } from "./utils.js";

export const valueinit = () => {
    const mask = document.getElementById('dip-5');
    const ms1 = document.getElementById('ms-1');
    const ms2 = document.getElementById('ms-2');
    const ms3 = document.getElementById('ms-3');
    const ms4 = document.getElementById('ms-4');

    generateMaskDecimal(mask, ms1, ms2, ms3, ms4);

}

export const maskFocus = (input) => {
    input.addEventListener('focus', () => {
        const value = input.value;
        if (value === '') {
            input.value = '0';
        }
    });
}

export const maskBlur = (input) => {
    input.addEventListener('blur', () => {

        const dip = document.getElementById('dip-5');
        const ms1 = document.getElementById('ms-1');
        const ms2 = document.getElementById('ms-2');
        const ms3 = document.getElementById('ms-3');
        const ms4 = document.getElementById('ms-4');
        
        let value = input.value;
        
        if (input.id === 'ms-1') {
            input.value = getNextHighestNumberWithouZero(value);
            
        } else {
            if (value === '') {
                value = 0;
            }
            input.value = getNextHighestNumber(value);
        }
        value = input.value;
        let number = parseInt(value);
        
        if (input.id === 'ms-1') {
            if (number === 0) {
                input.value = min;
                number = min;
            }
            if (number <= 255) {
                ms2.value = 0;
                ms3.value = 0;
                ms4.value = 0;
            }
            
        } else if (input.id === 'ms-2') {

            if (number >= 128) {
                ms1.value = 255;
                ms3.value = 0;
                ms4.value = 0;
            }
        } else if (input.id === 'ms-3') {
            if (number >= 128) {
                ms1.value = 255;
                ms2.value = 255;
                ms4.value = 0;
            }
        } else if (input.id === 'ms-4') {
            const max = input.max;
            if (number >= max) {
                input.value = max;
            }
            if (number >= 128) {
                ms1.value = 255;
                ms2.value = 255;
                ms3.value = 255;
            }
        }
        generateMask(dip, ms1.value, ms2.value, ms3.value, ms4.value);

        generateDirecctionSubRed();
        generateDirecctionSubRedDecimal();
        generateBroadcast();
        generatefirstDirecction();
        generateLastDirecction();
        generateDirectionsAvailable();

    });
}
// generateMaskSubRedBinary