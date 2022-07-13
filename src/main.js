import { ipBlur, ipFocus, ipInput, ipMaskBlur, ipMaskKeyUp } from './utils/DireccionIPEvents.js'
import { eventKeyPress } from './utils/events.js'
import { valueinit, maskBlur } from './utils/MaskEvents.js'


document.addEventListener('DOMContentLoaded', () => {
    // * Inputs de Direccion IP
    const dip1 = document.getElementById('dip-1');
    const dip2 = document.getElementById('dip-2');
    const dip3 = document.getElementById('dip-3');
    const dip4 = document.getElementById('dip-4');
    const dip5 = document.getElementById('dip-5');
    // * Inputs de Mascara de Subred
    const ms1 = document.getElementById('ms-1');
    const ms2 = document.getElementById('ms-2');
    const ms3 = document.getElementById('ms-3');
    const ms4 = document.getElementById('ms-4');

    // *TODO 1: Eventos de control de ingreso en los input de Direccion IP.
    // * event keypress
    eventKeyPress(dip1);
    eventKeyPress(dip2);
    eventKeyPress(dip3);
    eventKeyPress(dip4);
    eventKeyPress(dip5);
    // * event input
    ipInput(dip1);
    ipInput(dip2);
    ipInput(dip3);
    ipInput(dip4);
    ipInput(dip5);
    // * event focus
    ipFocus(dip1);
    ipFocus(dip2);
    ipFocus(dip3);
    ipFocus(dip4);
    ipFocus(dip5);
    // * event blur
    ipBlur(dip1);
    ipBlur(dip2);
    ipBlur(dip3);
    ipBlur(dip4);
    ipMaskBlur(dip5);

    // * event keyup
    ipMaskKeyUp(dip5);



    //TODO 2: Eventos de control de ingreso en los input de Mascara de Sub Red.
    // * function valueinit
    valueinit();
    // * event keypress
    eventKeyPress(ms1);
    eventKeyPress(ms2);
    eventKeyPress(ms3);
    eventKeyPress(ms4);
    // * event input
    // maskInput(ms1);
    // maskInput(ms2);
    // maskInput(ms3);
    // maskInput(ms4);
    // * event focus
    // * event blur
    maskBlur(ms1);
    maskBlur(ms2);
    maskBlur(ms3);
    maskBlur(ms4);



    




});
