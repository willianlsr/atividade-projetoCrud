//simula um banco de dados na memória
var alunos = []

// guarda o objeto que está sendo alterado
var alunoAlterado = null

function adicionar() {
    //libera para digitar o ra
    alunoAlterado = null
    mostrarModal()
    limparForm()
}

function alterar(ra){
 //Procurar o aluno que tem o Ra clicado no alterar
 for(let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i]
        if( aluno.ra == ra) {
    //achou o aluno, então preenche o form
    document.getElementById("ra").value = aluno.ra
    document.getElementById("nome").value = aluno.nome
    document.getElementById("cidade").value = aluno.cidade
    document.getElementById("estado").value = aluno.estado
    document.getElementById("curso").value = aluno.curso
    alunoAlterado = aluno
        }
    }
    //bloquear o cpf para nao permitir alterá-lo
    document.getElementById("ra").disabled = true
    mostrarModal()
}

function excluir(ra){
    if(confirm("Você deseja realmente excluir?")){
    //excluir tudo do aluno
    for(let i = 0; i < alunos.length; i++) { 
        let aluno = alunos[i]
    if (aluno.ra == ra) {
        //remove o elemento encontrado na posição "i"
      alunos.splice(i, 1)
    }
  }
  exibirDados()
}
}

function mostrarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "flex"
}

function ocultarModal() {
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "none"
}

function cancelar() {
    ocultarModal()
    limparForm()
}

function salvar(){
    let ra = document.getElementById("ra").value
    let nome = document.getElementById("nome").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let curso = document.getElementById("curso").value

   //se não estiver alterando ninguém, adiciona no vetor
    if(alunoAlterado == null) {
    let aluno = {
        "ra": ra,
        "nome": nome,
        "cidade": cidade,
        "estado": estado,
        "curso": curso
    }

    //adiciona o objeto aluno no vetor de alunos
    alunos.push(aluno)
    } else {
    alunoAlterado.ra = ra
    alunoAlterado.nome = nome
    alunoAlterado.cidade = cidade
    alunoAlterado.estado = estado
    alunoAlterado.curso = curso
    }

    alunoAlterado = null



    //limpar o form
    limparForm()
    ocultarModal()

    exibirDados()
}

function exibirDados() {

    let tbody = document.querySelector("#table-customers tbody")

    //antes de listar os alunos,limpa todas as linhas

    tbody.innerHTML = ""

    for(let i = 0; i < alunos.length; i++) {
        
        let linha = `
            <tr>
                <td>${alunos[i].ra}</td>
                <td>${alunos[i].nome}</td>
                <td>${alunos[i].cidade}</td>
                <td>${alunos[i].estado}</td>
                <td>${alunos[i].curso}</td>
                <td>
                    <button onclick="alterar('${alunos[i].ra}')">Alterar</button>
                    <button onclick="excluir('${alunos[i].ra}')">Excluir</button>
                </td>
            </tr>
        `

            let tr = document.createElement("tr")
            tr.innerHTML = linha
    
            tbody.appendChild(tr)
    }
}

    function limparForm() {
        document.getElementById("ra").value = ""
        document.getElementById("nome").value = ""
        document.getElementById("cidade").value = ""
        document.getElementById("estado").value = ""
        document.getElementById("curso").value = ""
    }

    
        
    
