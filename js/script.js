//simula um banco de dados em memória
var clientes = []
//guarda o objeto que esta sendo alterado
var clienteAlterado = null


function adicionar(){
    document.getElementById("cpf").disabled = false
    clienteAlterado = null
    mostrarModal()
    limparForm()
    
}

function alterar(cpf){
    //prcurar o cliente que tem o cpf clicado no alterar
    for(let i = 0; i < clientes.length; i++){
    let cliente = clientes[i]
    if (cliente.cpf == cpf){
        //achou o cliente, então preenche o form
        document.getElementById("nome").value = cliente.nome
        document.getElementById("cpf").value = cliente.cpf
        document.getElementById("telefone").value = cliente.telefone
        document.getElementById("nomePeriquito").value = cliente.nomePeriquito
        document.getElementById("cidadeNascimento").value = cliente.cidadeNascimento
        clienteAlterado = cliente

        // bloquear a alteração de cpf
        document.getElementById("cpf").disabled = true 
        mostrarModal()
    }
    
    }
    mostrarModal() 

}

function excluir(cpf){
    if (confirm("Você deseja realmente excluir?")){
        for (let i =0; i< clientes.length; i++){
        let cliente = clientes[i]
        if (cliente.cpf = cpf){
            clientes.splice(i,1)
        
    }
    }
    exibirDados()

}}

function mostrarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "flex"

}

function ocultarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "none"

}

function cancelar(){
    ocultarModal()
    limparForm()
}

function salvar(){
let nome = document.getElementById("nome").value
let cpf = document.getElementById("cpf").value
let telefone = document.getElementById("telefone").value
let nomePeriquito = document.getElementById("nomePeriquito").value
let cidadeNascimento = document.getElementById("cidadeNascimento").value



if(clienteAlterado == null){
        let cliente = {
        "nome": nome,
        "cpf": cpf,
        "telefone": telefone,
        "nomePeriquito" : nomePeriquito,
        "cidadeNascimento": cidadeNascimento,
    }

    clientes.push(cliente)
    } else{
        clienteAlterado.nome = nome
        clienteAlterado.cpf = cpf
        clienteAlterado.telefone = telefone
        clienteAlterado.nomePeriquito = nomePeriquito
        clienteAlterado.cidadeNascimento = cidadeNascimento

    }  

    clienteAlterado = null

console.log(clientes)
    //Limpar FORM
    limparForm()

    ocultarModal()

    
exibirDados()

}

function exibirDados(){
    
    let tbody = document.querySelector("#table-customers tbody")

    //antes de listar os clientes, limpa toda a linha
    tbody.innerHTML = ""

    for (let i=0; i< clientes.length; i++){
    let linha = `
    <tr>
            <td>${clientes[i].nome}</td>
            <td>${clientes[i].cpf}</td>
            <td>${clientes[i].telefone}</td>
            <td>${clientes[i].nomePeriquito}</td>
            <td>${clientes[i].cidadeNascimento}</td>
            <td>
                <button onclick="alterar('${clientes[i].cpf}')">Alterar</button>
                <button onclick="excluir('${clientes[i].cpf}')" class= "botao-excluir">Excluir</button>
            </td>
        </tr>`

        let tr = document.createElement("tr")
        tr.innerHTML = linha

        tbody.appendChild(tr)
    }

}


function limparForm(){
    document.getElementById("nome").value = ""
    document.getElementById("cpf").value = ""
    document.getElementById("telefone").value = ""
    document.getElementById("nomePeriquito").value = ""
    document.getElementById("cidadeNascimento").value = ""

}


