// Reserved for future enhancements.
// Intentionally kept empty for a clean professional portfolio.

const text = [
    "AI Enthusiast",
    "Machine Learning Learner",
    "IoT Developer",
    "Robowars Winner"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    current = text[count];

    letter = current.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === current.length){

        count++;
        index = 0;

        setTimeout(type,1000);

    }
    else{
        setTimeout(type,100);
    }

})();