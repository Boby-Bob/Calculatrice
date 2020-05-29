export default function Calculator() {
    this.name = "calculatrice";
    this.element = null;

    this.init = function() {
        // Création "div" classe "calculator"
        let div = document.createElement("div");
        div.classList.add("calculator");
        document.body.prepend(div);

        // Création "div" classe "screen"
        let screen = document.createElement("div");
        screen.classList.add("screen");
        div.append(screen);

        // Création "p" dans "screen" 
        let p = document.createElement("p");
        p.textContent = 0;
        screen.append(p);

        // Création "div" classe "operators"
        let operators = document.createElement("div");
        operators.classList.add("operators");
        div.append(operators);

        // Création des boutons "+", "-", "x", "/"
        let ope = ["+", "-", "x", "/"]
        for (let i=0; i<=3; i++) {
            let operator = document.createElement("button");
            operator.textContent = ope[i];
            operator.classList.add("operator", "buttons");
            operators.append(operator);
        }

        // Création "div" classe "nums"
        let nums = document.createElement("div");
        nums.classList.add("nums");
        div.append(nums);

        // Création des boutons de 0 à 9
        for (let i=0; i<=9; i++) {
            let button = document.createElement("button");
            button.textContent = i;
            button.classList.add("buttons");
            nums.append(button);
        }

        // Création "div" classe "others"
        let others = document.createElement("div");
        others.classList.add("others");
        div.append(others);

        // Création des boutons "ac", ".", "="
        let ac = document.createElement("button");
        ac.textContent = "AC";
        ac.classList.add("ac", "buttons");
        others.append(ac);

        let comma = document.createElement("button");
        comma.textContent = ".";
        comma.classList.add("comma", "buttons");
        others.append(comma);

        let equal = document.createElement("button");
        equal.textContent = "=";
        equal.classList.add("equal", "buttons");
        others.append(equal);

        // Au clic afficher "buttons" dans "screen"
        div.addEventListener("click", function(event) {
            if (event.target.textContent.length <= 1 && event.target.textContent != "=") {
                console.log(event.target.textContent);
                p.textContent += event.target.textContent;
            }
            else if ((event.target.textContent == "AC")){
                p.textContent = 0;
            }
            else if (event.target.textContent == "="){
                for (let i=0; i<p.textContent.length; i++) {
                    if (p.textContent[i] == "+") {
                        console.log(p.textContent[i]);
                    }
                }
            }
        });
    }

}