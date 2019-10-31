blocos = document.getElementsByClassName("bloco");
winnerContainer = document.querySelectorAll(".winner")[0];
winnerContent = winnerContainer.querySelector("p");
vez = true;

for(var i=0;i<blocos.length;i++){
    blocos[i].onclick = function(click){
        if(vez == true && click.target.innerHTML == ""){
            click.target.innerHTML = "X";

            if (verifica(blocos, "X")) {
                setTimeout(() => {
                    winnerContent.innerHTML = "O jogador X venceu, parabéns, reiniciando...";
                    winnerContainer.style.display = "flex";
                }, 1000);
                setTimeout(() => {
                    window.location.reload();  
                }, 3000);
            }

            vez = false;
        }else if(vez == false && click.target.innerHTML == ""){
            click.target.innerHTML = "O";

            if (verifica(blocos, "O")) {
                setTimeout(() => {
                    winnerContent.innerHTML = "O jogador O venceu, parabéns, reiniciando...";
                    winnerContainer.style.display = "flex";
                }, 1000);

                setTimeout(() => {
                    window.location.reload();  
                }, 3000);
            }

            vez = true;
        }
    }
}

function verifica(arr, player) {
    let tabuleiro = [
        [arr[0], arr[1], arr[2]],
        [arr[3], arr[4], arr[5]],
        [arr[6], arr[7], arr[8]],
        [arr[0], arr[3], arr[6]],
        [arr[1], arr[4], arr[7]],
        [arr[2], arr[5], arr[8]],
        [arr[0], arr[4], arr[8]],
        [arr[2], arr[4], arr[6]]
    ]

    for(let i = 0; i < tabuleiro.length; i++) {
        let values = tabuleiro[i].map(elem => elem.innerHTML);
        values = new Set(values);
        if (values.size === 1 && values.has(player)) {
            return player;
        }
    };
    
}



// validarJogador = () => {
//     //Horizontal
//     if((blocos[0].outerText=="X" && blocos[1].outerText=="X" && blocos[2].outerText=="X") || (blocos[0].outerText=="O" && blocos[1].outerText=="O" && blocos[2].outerText=="O")){
//         return true;
//     }
//     if((blocos[3].outerText=="X" && blocos[4].outerText=="X" && blocos[5].outerText=="X") || (blocos[3].outerText=="O" && blocos[4].outerText=="O" && blocos[5].outerText=="O")){
//         return true;
//     }
//     if((blocos[6].outerText=="X" && blocos[7].outerText=="X" && blocos[8].outerText=="X") || (blocos[6].outerText=="O" && blocos[7].outerText=="O" && blocos[8].outerText=="O")){
//         return true;
//     } 
//     //Vertical
//     if((blocos[0].outerText=="X" && blocos[3].outerText=="X" && blocos[6].outerText=="X") || (blocos[0].outerText=="O" && blocos[3].outerText=="O" && blocos[6].outerText=="O")){
//         return true;
//     }
//     if((blocos[1].outerText=="X" && blocos[4].outerText=="X" && blocos[7].outerText=="X") || (blocos[1].outerText=="O" && blocos[4].outerText=="O" && blocos[7].outerText=="O")){
//         return true;
//     }
//     if((blocos[2].outerText=="X" && blocos[5].outerText=="X" && blocos[8].outerText=="X") || (blocos[2].outerText=="O" && blocos[5].outerText=="O" && blocos[8].outerText=="O")){
//         return true;
//     } 
//     //Diagonal
//     if((blocos[0].outerText=="X" && blocos[4].outerText=="X" && blocos[8].outerText=="X") || (blocos[0].outerText=="O" && blocos[4].outerText=="O" && blocos[8].outerText=="O")){
//         return true;
//     }
//     if((blocos[2].outerText=="X" && blocos[4].outerText=="X" && blocos[6].outerText=="X") || (blocos[2].outerText=="O" && blocos[4].outerText=="O" && blocos[6].outerText=="O")){
//         return true;
//     }
// }
