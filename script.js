const listaFilmes = [];
const listaNomes = [];
const divFilmes = document.getElementById("listaFilmes");

function adicionarFilme() {
    let inputNome = document.getElementById("nome").value;
    let inputFilme = document.getElementById("filme").value;
    let h2 = document.getElementById("h2")

    if (inputNome == "") {
        h2.innerHTML = "Por Favor, insira o nome do filme"
    } else if (inputFilme.endsWith(".jpg")||inputFilme.endsWith(".png")) {
        listaFilmes.push(inputFilme);
        listaNomes.push(inputNome);
    } else {
        h2.innerHTML = "URL não terminada em JPG ou PNG"
    }
    document.getElementById("filme").value = "";
    document.getElementById("nome").value = "";
    console.log(listaFilmes);
    console.log(listaNomes);
}

function listarFilmes() {
    divFilmes.innerHTML = ""
    for (i=0; i < listaFilmes.length; i++) {
        divFilmes.innerHTML = divFilmes.innerHTML + '<div class="box"><img src="' + listaFilmes[i] + 
        '"><h4>' + listaNomes[i] + 
        '</h4><button onClick=removerFilme(' + i + ')>Excluir</button></div>';
        h2.innerHTML = ""
    }
}

function removerFilme(x) {
    listaFilmes.splice(x, 1);
    listaNomes.splice(x, 1);
    listarFilmes();
}