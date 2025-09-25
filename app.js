let input=document.getElementById('str');
let result=document.getElementById('result');
let con = document.getElementsByClassName('b');
window.onload=() =>{
    input.focus();
    input.value="";
    result.value="";
}
function btnc(){
    input.focus();
}

const buttons = document.querySelectorAll(".btn");


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const text = input.value;
        const operation = btn.textContent.trim(); // Get button text
        let output = "";

        switch (operation) {
            case "UpperCase":
                output = text.toUpperCase();
                break;

            case "LowerCase":
                output = text.toLowerCase();
                break;

            case "Reverse":
                output = text.split("").reverse().join("");
                break;

            case "length":
                output = `Length: ${text.length}`;
                break;

            case "Trim":
                output = text.trim();
                break;

            case "Replace":
                let oldStr = prompt("Enter text to replace:");
                let newStr = prompt("Enter new text:");
                output = text.replaceAll(oldStr, newStr);
                break;

            case "Repeat":
                let times = parseInt(prompt("How many times to repeat?"));
                output = text.repeat(times);
                break;

            case "charAt":
                let index = parseInt(prompt("Enter index:"));
                output = text.charAt(index);
                break;

            case "Join":
                let joinChar = prompt("Enter character to join with:");
                output = text.split("").join(joinChar);
                break;

            case "Sort":
                output = text.split("").sort().join("");
                break;

            case "Split":
                let separator = prompt("Enter separator to split:");
                output = text.split(separator);
                break;

            case "concat":
                let extra = prompt("Enter string to concat:");
                output = text.concat(extra);
                break;

            default:
                output = "Unknown operation!";
        }

        // Show result
        result.value = output;
    });
});
