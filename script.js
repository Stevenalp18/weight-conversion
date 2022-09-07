// DOM Selectors
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const intInput = document.querySelector('int-input');
const allInput = document.querySelectorAll('input');
const grams = document.getElementById('grams');
const pounds = document.getElementById('pounds');
const kilogram = document.getElementById('kilogram');
const ounces = document.getElementById('ounces');
const milligram = document.getElementById('milligram');
const metricTon = document.getElementById('metric-ton');

const select  = document.getElementById('measurement');
const g_option = document.getElementById('measurement').value = 'grams';
const lb_option = document.getElementById('measurement').value = 'pounds';
const kg_option = document.getElementById('measurement').value = 'kilogram';
const oz_option = document.getElementById('measurement').value = 'ounces';
const mg_option = document.getElementById('measurement').value = 'milligram';
const mt_option = document.getElementById('measurement').value = 'metric-ton';

resetBtn.addEventListener('click', () => {
   allInput.forEach( (input) => {
       input.value = '';
   });
})

convertBtn.addEventListener('click', () =>{
   console.log(intInput);
})




// Conversion converted into functions

// grams conversions
function g_to_g(){
   return (grams + ' g');
}

function g_to_lb(){
   return ((grams * 0.0022) + ' lb');
}

function g_to_kg(){
   return ((grams / 1000 ) + ' kg');
}

function g_to_oz(){
   return ((grams / 28.35) + ' oz');
}

function g_to_mg(){
   return ((grams * 1000)  + ' mg');
}

function g_to_mt(){
   return ((grams * .000001) + ' mt');
}

// pounds conversions
function lb_to_lb(){
   return (pounds + ' lb');
}

function lb_to_g(){
   return ((pounds * 453.60) + ' g');
}

function lb_to_kg(){
   return ((pounds / 2.205) + ' kg');
}

function lb_to_oz(){
   return ((pounds * 16) + ' oz');
}

function lb_to_mg(){
   return ((pounds * 453600) + ' mg');
}

function lb_to_mt(){
   return ((pounds / 2205) + ' mt');
}

// kilogram conversions 
function kg_to_kg(){
   return (kilogram + ' kg')
}

function kg_to_g(){
   return ((kilogram * 1000) + ' g');
}

function kg_to_lb(){
    return ((kilogram * 2.205) + ' lb');
}

function kg_to_oz(){
    return ((kilogram * 35.274) + ' oz'); 
}

function kg_to_mg(){
    return ((kilogram * 1000000) + ' mg');
}

function kg_to_mt(){
    return ((kilogram / 1000) + ' mt');
}

// ounces conversions
function oz_to_oz(){
    return (ounces + ' oz');
}

function oz_to_g(){
    return ((ounces / 28.35) + ' g');
}

function oz_to_lb(){
    return ((ounces /16) + ' lb');
}

function oz_to_kg(){
    return ((ounces / 35.274) + ' kg');
}

function oz_to_mg(){
    return ((ounces * 28350) + ' mg');
}

function oz_to_mt(){
    return ((ounces / 35270) + ' mt');
}

// milligram conversions
function mg_to_mg(){
   return (milligram + ' mg');
}

function mg_to_g(){
   return ((milligram / 1000) + ' g');
}

function mg_to_lb(){
   return ((milligram / 453600) + ' lb');
}

function mg_to_kg(){
   return ((milligram / 1000000) + ' kg');
}

function mg_to_oz(){
   return ((milligram / 28350) + ' oz');
}

function mg_to_mt(){
   return ((milligram / 1000000000) + ' mt');
}
// metric-ton conversions
function mt_to_mt(){
   return (metricTon + ' mt');
}

function mt_to_g(){
   return ((metricTon * 100000) + ' g');
}

function mt_to_lb(){
   return ((metricTon * 2205) + ' lb');
}

function mt_to_kg(){
   return ((metricTon * 1000) + ' kg');
}

function mt_to_oz(){
   return ((metricTon * 35270) + ' oz');
}

function mt_to_mg(){
   return ((metricTon * 1000000000) + ' mg');
}
