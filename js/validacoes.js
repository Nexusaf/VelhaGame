blocos = document.getElementsByClassName("bloco");
vez = true;
for(var i=0;i<blocos.length;i++){
    blocos[i].onclick = function(click){
        if(vez == true && click.target.innerHTML == ""){
            click.target.innerHTML = "X";
            if(validarJogador()){
                //alert("Jogador X Venceu, Parabéns, Reiniciando...");
                setTimeout(() => {
                    window.location.reload();  
                }, 2000);
            }
            vez = false;
        }else if(vez == false && click.target.innerHTML == ""){
            click.target.innerHTML = "O";
            if(validarJogador()){
                setTimeout(() => {
                    //alert("Jogador O Venceu, Parabéns, Reiniciando...");
                    window.location.reload();  
                }, 2000);
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
