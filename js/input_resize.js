var input = document.querySelector('input');
input.addEventListener('input', resizeInput);
resizeInput.call(input);


function resizeInput() {
    this.style.width = this.value.length + "ch";
}