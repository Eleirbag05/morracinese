const scelte = ["Sasso", "Carta", "Forbici"];
var v, s, p;
v=0;
s=0;
p=0;
function gioca(checosa){

    let indice = Math.floor(Math.random() * 3);
    document.getElementById("computer").innerHTML = scelte[indice];
    if(checosa==(indice+1)){
        document.getElementById("risultato").innerHTML = "Pareggio";
        console.log(checosa, indice);
        p = p + 1;
        document.getElementById("pareggiate").innerHTML = p;
    }else{
        if((checosa==3 && indice==0)||(checosa==1 && indice==1)||(checosa==2 && indice ==2)) {
            
            document.getElementById("risultato").innerHTML = "Hai perso";
            console.log(checosa, indice);
            s=s+1;
            document.getElementById("perse").innerHTML = s;
        }else{
            document.getElementById("risultato").innerHTML = "Hai vinto";
            console.log(checosa, indice);
            v=v+1;
            document.getElementById("vinte").innerHTML = v;
        }
    }
}