/*qua metterò un addEventListener su tasto play 
per generare il giusto numero di box nella griglia*/
document.getElementById("play").addEventListener("click", game);

 //funzione che gestisce il gioco
function game () {

    const difficult = document.getElementById("difficult").value;

    let numberBox;
    let order;

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
            

    //creo un riferimento alla griglia per generare i box all'interno
    let gridBox = document.getElementById("grid-container");
    //resetto il campo da gioco 
    gridBox.innerHTML = "";

        order = Math.sqrt(numberBox);

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

    function notCellClick() {
        this.classList.add("colorSafe");
        this.removeEventListener("click", notCellClick);
    }

    
        
        

        


    
//creo una funzione per creare 16 celle di bombe
function bombGenerator (bombNumber, numberBox) {
    const bombsGenerated = [];
    while (bombsGenerated.length < bombNumber) {
        const bomb = getRandomNumber(1, numberBox);

        if (!bombsGenerated.includes(bomb)) {
            bombsGenerated.push(bomb);
        }
    }
    return bombsGenerated;

}







//funzione che crea numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
