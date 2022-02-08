    //funzione che fa partire il gioco, premendo play parte la funzione game
    document.getElementById("play").addEventListener("click", game);



 //funzione che gestisce il gioco
function game () {

    const difficult = document.getElementById("difficult").value;

        let numberBox;
        const bombNumber = 16;
        console.log(bombNumber);

        switch (difficult) {
            case "easy":
            default:
                numberBox = 100;
                break;
            case "medium":
                numberBox = 81;
                break;
            case "crazy":
                numberBox = 49;
                break;
        }
        order = Math.sqrt(numberBox);

        gridGenerator();
        const bombe = bombGenerator(16, numberBox);



    //creo funzione che genera la griglia
    function gridGenerator() {
        let gridBox = document.getElementById("grid-container");
        gridBox.innerHTML = "";
        order = Math.sqrt(numberBox);

        //ciclo for che crea gli square
        for (let i = 1; i <= numberBox; i++) {
            
        
            //creo elemento square di tipo div
            const square = document.createElement("div");
            
            //aggiungo a square la classe box e imposto la width di ogni difficoltà
            square.classList.add("box");
            const size = `calc(100% / ${order})`;
            square.style.width = size;
            square.style.height = size;

            square.textContent = i;

            square.addEventListener("click", notCellClick);
            //li aggiungo tutti nella gridBox
            gridBox.appendChild(square);
        }
        return true;
    }

    //creo una funzione per creare 16 celle di bombe
    function bombGenerator (bombNumber, numberBox) {
        
        const bombsGenerated = [];
        while (bombsGenerated.length < bombNumber) {
            const bomb = getRandomNumber(1, numberBox);

            if (!bombsGenerated.includes(bomb)) {
                bombsGenerated.push(bomb);
            }
            console.log(bombsGenerated);
        }
        return bombsGenerated;

    }


    //funzione che crea numeri casuali
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //funzione che gestisce il click
     function notCellClick() {
        this.classList.add("colorSafe");
        this.removeEventListener("click", notCellClick);

        const cell =parseInt(this.innertext) ;
        if (bombe.includes(cell)) {
            alert("hai preso una bomba");
            this.classList.remove("colorSafe");
            this.classList.add("colorBomb");
        } else {

        }
    }
    
} //fine funzione game

