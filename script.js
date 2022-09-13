// DOM Selectors
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const intInput = document.getElementById('int_input');
const allInput = document.querySelectorAll('input');
const select  = document.getElementById('measurement');

let grams = document.getElementById('grams');
let pounds = document.getElementById('pounds');
let kilogram = document.getElementById('kilogram');
let ounces = document.getElementById('ounces');
let milligram = document.getElementById('milligram');
let metricTon = document.getElementById('metric-ton');

// DOM Selector End

//Main Code

//Resets everything
resetBtn.addEventListener('click', () => {
   allInput.forEach( (input) => {
       input.value = '';
   });
})

//Code running all different functions and conversions
convertBtn.addEventListener('click', () =>{
   if_gram();
   if_pound();
   if_kilogram();
   if_ounces();
   if_milligram();
   if_metricTon();
})

//Main Code end

// convertBtn.addEventListener('click', () =>{

// })

// if Gram function, output to all boxes
function if_gram(){
   if(select.value === 'grams' && intInput.value > 0){
      g_to_g();
      g_to_lb();
      g_to_kg();
      g_to_oz();
      g_to_mg();
      g_to_mt();
   }
}

// if Pound function, output to all boxes
function if_pound(){
   if(select.value === 'pounds' && intInput.value > 0){
      lb_to_g();
      lb_to_lb();
      lb_to_kg();
      lb_to_oz();
      lb_to_mg();
      lb_to_mt();
   
   }
}

// if Kilogram function, output to all boxes
function if_kilogram(){
   if(select.value === 'kilogram' && intInput.value > 0){
      kg_to_kg();
      kg_to_g();
      kg_to_lb();
      kg_to_oz();
      kg_to_mg();
      kg_to_mt();
   }
}

// if Ounces function, output to all boxes
function if_ounces(){
   if(select.value === 'ounces' && intInput.value > 0){
      oz_to_g();
      oz_to_lb();
      oz_to_kg();
      oz_to_oz();
      oz_to_mg();
      oz_to_mt();
   }
}

// if Milligram Function, output to all boxes
function if_milligram(){
   if(select.value === 'milligram' && intInput.value > 0){
      mg_to_g();
      mg_to_kg();
      mg_to_mg();
      mg_to_lb();
      mg_to_oz();
      mg_to_mt();
   }
}

// if MetricTon Function, output to all boxes
function if_metricTon(){
   if(select.value === 'metric-ton' && intInput.value > 0){
      mt_to_g();
      mt_to_kg();
      mt_to_lb();
      mt_to_mg();
      mt_to_mt();
      mt_to_oz();
   }
}

// Conversion converted into functions
// grams conversions
function g_to_g(){
   return grams.value = `${intInput.value} g`;
}

function g_to_lb(){
   return pounds.value = `${intInput.value * 0.0022} lb`;
}

function g_to_kg(){
   return kilogram.value = intInput.value / 1000;
}

function g_to_oz(){
   return ounces.value = `${intInput.value / 28.35} oz`;
}

function g_to_mg(){
   return milligram.value = `${intInput.value * 1000}  mg`;
}

function g_to_mt(){
   return metricTon.value = `${intInput.value * .000001} mt`
}
// gram conversions end
// pounds conversions
function lb_to_lb(){
   return pounds.value = `${intInput.value} lb`;
}

function lb_to_g(){
   return grams.value = `${intInput.value * 453.60} g`;
}

function lb_to_kg(){
   return kilogram.value = `${intInput.value / 2.205} kg`;
}

function lb_to_oz(){
   return ounces.value = `${intInput.value * 16} oz`;
}

function lb_to_mg(){
   return milligram.value = `${intInput.value * 453600} mg`;
}

function lb_to_mt(){
   return metricTon.value = `${intInput.value / 2205} mt`;
}
// pound conversions end
// kilogram conversions 
function kg_to_kg(){
   return kilogram.value = `${intInput.value} kg`;
}

function kg_to_g(){
   return grams.value = `${intInput.value * 1000}  g`;
}

function kg_to_lb(){
    return pounds.value = `${intInput.value * 2.205} lb`;
}

function kg_to_oz(){
    return ounces.value = `${intInput.value * 35.274} oz`; 
}

function kg_to_mg(){
    return milligram.value = `${intInput.value * 1000000} mg`;
}

function kg_to_mt(){
    return metricTon.value = `${intInput.value / 1000} mt`;
}
// kilogram conversions end
// ounces conversions
function oz_to_oz(){
    return ounces.value = `${intInput.value} oz`;
}

function oz_to_g(){
    return grams.value = `${intInput.value / 28.35} g`;
}

function oz_to_lb(){
    return pounds.value = `${intInput.value /16} lb`;
}

function oz_to_kg(){
    return kilogram.value = `${intInput.value / 35.274} kg`;
}

function oz_to_mg(){
    return milligram.value = `${intInput.value * 28350} mg`;
}

function oz_to_mt(){
    return metricTon.value = `${intInput.value / 35270} mt`;
}
// ounces conversions end
// milligram conversions 
function mg_to_mg(){
   return milligram.value = `${intInput.value} mg`;
}

function mg_to_g(){
   return grams.value =`${intInput.value / 1000} g`;
}

function mg_to_lb(){
   return pounds.value = `${intInput.value / 453600} lb`;
}

function mg_to_kg(){
   return kilogram.value = `${intInput.value / 1000000} kg`;
}

function mg_to_oz(){
   return ounces.value = `${intInput.value / 28350} oz`;
}

function mg_to_mt(){
   return metricTon.value = `${intInput.value / 1000000000} mt`;
}
// milligram conversions end
// metric-ton conversions
function mt_to_mt(){
   return metricTon.value = `${intInput.value} mt`;
}

function mt_to_g(){
   return grams.value = `${intInput.value * 100000} g`;
}

function mt_to_lb(){
   return pounds.value = `${intInput.value * 2205} lb`;
}

function mt_to_kg(){
   return kilogram.value = `${intInput.value * 1000} kg`;
}

function mt_to_oz(){
   return ounces.value = `${intInput.value * 35270} oz`;
}

function mt_to_mg(){
   return milligram.value = `${intInput.value * 1000000000} mg`;
}
// metric-ton conversions end









