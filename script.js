let button = document.querySelector('button#btn');
let pound = document.querySelector('input#pound-lb');
let kilogram = document.querySelector('input#kilo-kg');
let input1 = 0;
let input2 = 0;

button.addEventListener('click', function(input){
    input1 = 0;
    input2 = 0;

    input1 = pound.value;
    console.log(input1);

    input2 = kilogram.value; 
    console.log(input2);

    if(input1){
        kilogram.value = (lbtokg(input1));

    }

});


function lbtokg(lb){ 
    console.log(lb * 0.45359237);
    return
}

function kgtolb(kg){
    return kg * 2.2;
}

// // function lbtog(lb){
// //     g = ((lb * 453.59237) + ' grams');
// //     return    
// // }



// // function kgtog(kg){
// //     return kg * 1000;
// // }

// // function gtokg(g){
// //     return g * 0.001;
// // }

// // function gtolb(g){
// //     return g * 0.00220462;
// // }