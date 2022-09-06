const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const allInput = document.querySelectorAll('input[type="Text"]');
const grams = document.getElementById('grams');
const pounds = document.getElementById('pounds');
const kilogram = document.getElementById('kilogram');
const ounces = document.getElementById('ounces');
const milligram = document.getElementById('milligram');
const metricTon = document.getElementById('metric-ton');


resetBtn.addEventListener('click', () => {
    allInput.forEach( (input) => {
        input.value = '';
    });
})

// Conversion converted into functions

// grams conversions
function g_to_g(grams){
   return (grams + ' g');
}

function g_to_lb(grams){
   return ((grams * 0.0022) + ' lb');
}

function g_to_kg(grams){
   return ((grams / 1000 ) + ' kg');
}

function g_to_oz(grams){
   return ((grams / 28.35) + ' oz');
}

function g_to_mg(grams){
   return ((grams * 1000)  + ' mg');
}

function g_to_mt(grams){
   return ((grams * .000001) + ' mt');
}

// pounds conversions
function lb_to_lb(pounds){
   return (pounds + ' lb');
}

function lb_to_g(pounds){
   return ((pounds * 453.60) + ' g');
}

function lb_to_kg(pounds){
   return ((pounds / 2.205) + ' kg');
}

function lb_to_oz(pounds){
   return ((pounds * 16) + ' oz');
}

function lb_to_mg(pounds){
   return ((pounds * 453600) + ' mg');
}

function lb_to_mt(pounds){
   return ((pounds / 2205) + ' mt');
}

// kilogram conversions 
function kg_to_kg(kilogram){
   return (kilogram + ' kg')
}

function kg_to_g(kilogram){
   return ((kilogram * 1000) + ' g');
}

function kg_to_lb(kilogram){
    return ((kilogram * 2.205) + ' lb');
}

function kg_to_oz(kilogram){
    return ((kilogram * 35.274) + ' oz'); 
}

function kg_to_mg(kilogram){
    return ((kilogram * 1000000) + ' mg');
}

function kg_to_mt(kilogram){
    return ((kilogram / 1000) + ' mt');
}

// ounces conversions

function oz_to_oz(ounces){
    return (ounces + ' oz');
}

function oz_to_g(ounces){
    return ((ounces / 28.35) + ' g');
}

function oz_to_lb(ounces){
    return ((ounces /16) + ' lb');
}

function oz_to_kg(ounces){
    return ((ounces / 35.274) + ' kg');
}

function oz_to_mg(ounces){
    return ((ounces * 28350) + ' mg');
}

function oz_to_mt(ounces){
    return ((ounces / 35270) + ' mt');
}

// milligram conversions

// metric-ton conversions
