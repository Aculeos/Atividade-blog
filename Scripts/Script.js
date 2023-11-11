
function valida(){
    if(window.confirm("Você prefere backend?")==true){
    window.location.href="node-js.html"
    }
}
function voltar(){
    if(volta.checked){
        window.location.href="Index.html"
    }else{
        alert("clique no checkbox")
    }
    }
function TrocarIMG(){
    
    var opcao = document.getElementById("Passatempo");
    var imagemTroca = document.getElementById("ImagemGM");

    if (opcao.value == 1) {
        imagemTroca.src = "../Imagens/Minecraft.jpeg";
    } else if (opcao.value == 2) {
    imagemTroca.src = "../Imagens/Age-Of-Mythology.jpeg"
    } else if (opcao.value == 3) {
    imagemTroca.src = "../Imagens/Age-Of-Empires-III.jpeg"
    } else if (opcao.value == 4) {
    imagemTroca.src = "../Imagens/Terraria.jpeg"
    } else if (opcao.value == 5) {
    imagemTroca.src = "../Imagens/StardewValley.jpeg"
    } else if (opcao.value == 6) {
    imagemTroca.src = "../Imagens/Factorio.jpeg"
    }
}