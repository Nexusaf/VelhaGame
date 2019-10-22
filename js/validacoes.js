blocos = document.getElementsByClassName("bloco");
vez = true;
for(var i=0;i<blocos.length;i++){
    blocos[i].onclick = function(teste){
        if(vez == true && teste.target.innerHTML == ""){
            teste.target.innerHTML = "X";
            vez = false;
        }else if(vez == false && teste.target.innerHTML == ""){
            teste.target.innerHTML = "O";
            vez = true;
        }
    }
}