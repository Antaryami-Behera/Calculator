//let input = document.getElementById('inputBox');
//let buttons = document.querySelector('button');

//let string = "";
//let arr = Array.from(buttons);
//arr.forEach(button => {
//   button.addEventListner('click', (e) => {
//     if(e.target.innerHTML == '='){
//        string = eval(string);
//       input.value = string;
//  }
//else if(e.target.innerHTML == 'AC'){
//    string = "";
//   input.value = string;
// }
// else if(e.target.innerHTML == 'DEL'){
//    string = string.substring(0, string.length-1);
// }
//else{
//   string += e.target.innerHTML;
// input.value = string;
// }
//})
//})

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); // Select all buttons

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Evaluating the expression (not recommended for production)
                input.value = string;
            } catch (error) {
                input.value = 'Error';
                string = ""; // Reset string to handle error
            }
        }
        else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
