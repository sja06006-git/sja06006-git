let buttons = document.querySelectorAll(".buttons button");
buttons.forEach(function(button) {
    button.addEventListener("click", function () {
        swith (button.textContent) {
            case "C":
                console.log("버튼: " + button.textContent);
                break;
            case "←":
                break;
            case "%":
                break;
            case "/":
                break;
            case "7":
                break;
            case "8":
                break;
            case "9":
                break;
            case "*":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            case "-":
                break;
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "+":
                break;
            case "0":
                break;
            case ".":
                break;
            case "=":
                break;
            default :
                break;
        }
    })
})