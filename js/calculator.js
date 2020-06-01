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
        p.textContent;
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

        // Création "div" classe "nums_egale"
        let nums_egale = document.createElement("div");
        nums_egale.classList.add("nums_egale");
        div.append(nums_egale);

        // Création "div" classe "nums"
        let nums = document.createElement("div");
        nums.classList.add("nums");
        nums_egale.append(nums);

        // Création des boutons de 1 à 9
        for (let i=1; i<=9; i++) {
            let button = document.createElement("button");
            button.textContent = i;
            button.classList.add("buttons", "num");
            nums.append((button));
        }
        
        // Création du bouton "="
        let equal = document.createElement("button");
        equal.textContent = "=";
        equal.classList.add("equal", "buttons");
        nums_egale.append(equal);

        // Création "div" classe "others"
        let others = document.createElement("div");
        others.classList.add("others");
        div.append(others);

        // Création des boutons "ac", "." "0"
        let ac = document.createElement("button");
        ac.textContent = "AC";
        ac.classList.add("ac", "buttons");
        others.append(ac);

        let comma = document.createElement("button");
        comma.textContent = ".";
        comma.classList.add("comma", "buttons");
        others.append(comma);

        let zero = document.createElement("button");
        zero.textContent = "0";
        zero.classList.add("num", "buttons");
        others.append(zero);

        // Au clic afficher "buttons" dans "screen"
        div.addEventListener("click", function(event) {
            // Affichage des boutons à l'écran
            if (Number(event.target.textContent) && event.target.textContent.length <= 1 || event.target.textContent != "=" && event.target.textContent != "AC" && event.target.textContent.length <= 1) {
                p.textContent += event.target.textContent;
            }
            // Remise à 0 de l'écran
            else if ((event.target.textContent == "AC")){
                p.textContent = "";
            }
            
            // Calcule et afficher le résultat à l'écran
            else if (event.target.textContent == "="){
                let result_number = "";
                let result_number2 = "";

                if (p.textContent.indexOf("+") != -1) {
                    for (let i=0; i<p.textContent.indexOf("+"); i++) {
                        result_number += p.textContent[i];
                    }
                    
                    for (let i = (p.textContent.indexOf("+"))+1; i<p.textContent.length; i++) {
                        result_number2 += p.textContent[i];
                    }

                    p.textContent = Number(result_number)+Number(result_number2);
                }
                
                else if (p.textContent.indexOf("-") != -1) {
                    for (let i=0; i<p.textContent.indexOf("-"); i++) {
                        result_number += p.textContent[i];
                    }
                    
                    for (let i = (p.textContent.indexOf("-"))+1; i<p.textContent.length; i++) {
                        result_number2 += p.textContent[i];
                    }

                    p.textContent = Number(result_number)-Number(result_number2);
                }
                
                else if (p.textContent.indexOf("x") != -1) {
                    for (let i=0; i<p.textContent.indexOf("x"); i++) {
                        result_number += p.textContent[i];
                    }
                    
                    for (let i = (p.textContent.indexOf("x"))+1; i<p.textContent.length; i++) {
                        result_number2 += p.textContent[i];
                    }

                    p.textContent = Number(result_number)*Number(result_number2);
                }

                else if (p.textContent.indexOf("/") != -1) {
                    for (let i=0; i<p.textContent.indexOf("/"); i++) {
                        result_number += p.textContent[i];
                    }
                    
                    for (let i = (p.textContent.indexOf("/"))+1; i<p.textContent.length; i++) {
                        result_number2 += p.textContent[i];
                    }

                    p.textContent = Number(result_number)/Number(result_number2);
                }
            }
        });
    }

}