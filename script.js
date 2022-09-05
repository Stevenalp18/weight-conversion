const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const allInput = document.querySelectorAll('input[type="Text"]');

resetBtn.addEventListener('click', () => {
    allInput.forEach( (input) => {
        input.value = '';
    });
})

