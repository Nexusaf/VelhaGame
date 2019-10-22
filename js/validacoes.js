blocos = document.getElementsByClassName("bloco");
winner = document.querySelectorAll(".winner")[0];
vez = true;
for(var i=0;i<blocos.length;i++){
    blocos[i].onclick = function(click){
        if(vez == true && click.target.innerHTML == ""){
            click.target.innerHTML = "X";
            if(validarJogador()){
                setTimeout(() => {
                    winner.innerHTML = "O jogador X venceu, parabéns, reiniciando...";
                    winner.style.display = "flex";
                }, 1000);
                setTimeout(() => {
                    window.location.reload();  
                }, 3000);
            }
            vez = false;
        }else if(vez == false && click.target.innerHTML == ""){
            click.target.innerHTML = "O";
            if(validarJogador()){
                setTimeout(() => {
                    winner.innerHTML = "O jogador O venceu, parabéns, reiniciando...";
                    winner.style.display = "flex";
                }, 1000);
                setTimeout(() => {
                    window.location.reload();  
                }, 3000);
            }
            vez = true;
        }
    }
}
validarJogador = () => {
    //Horizontal
    if((blocos[0].outerText=="X" && blocos[1].outerText=="X" && blocos[2].outerText=="X") || (blocos[0].outerText=="O" && blocos[1].outerText=="O" && blocos[2].outerText=="O")){
        return true;
    }
    if((blocos[3].outerText=="X" && blocos[4].outerText=="X" && blocos[5].outerText=="X") || (blocos[3].outerText=="O" && blocos[4].outerText=="O" && blocos[5].outerText=="O")){
        return true;
    }
    if((blocos[6].outerText=="X" && blocos[7].outerText=="X" && blocos[8].outerText=="X") || (blocos[6].outerText=="O" && blocos[7].outerText=="O" && blocos[8].outerText=="O")){
        return true;
    } 
    //Vertical
    if((blocos[0].outerText=="X" && blocos[3].outerText=="X" && blocos[6].outerText=="X") || (blocos[0].outerText=="O" && blocos[3].outerText=="O" && blocos[6].outerText=="O")){
        return true;
    }
    if((blocos[1].outerText=="X" && blocos[4].outerText=="X" && blocos[7].outerText=="X") || (blocos[1].outerText=="O" && blocos[4].outerText=="O" && blocos[7].outerText=="O")){
        return true;
    }
    if((blocos[2].outerText=="X" && blocos[5].outerText=="X" && blocos[8].outerText=="X") || (blocos[2].outerText=="O" && blocos[5].outerText=="O" && blocos[8].outerText=="O")){
        return true;
    } 
    //Diagonal
    if((blocos[0].outerText=="X" && blocos[4].outerText=="X" && blocos[8].outerText=="X") || (blocos[0].outerText=="O" && blocos[4].outerText=="O" && blocos[8].outerText=="O")){
        return true;
    }
    if((blocos[2].outerText=="X" && blocos[4].outerText=="X" && blocos[6].outerText=="X") || (blocos[2].outerText=="O" && blocos[4].outerText=="O" && blocos[6].outerText=="O")){
        return true;
    }
}
