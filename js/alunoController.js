//READ

function listarAlunos(){


    let alunos = localStorage.getItem('alunos');
    
    
    let tabela = document.getElementById("tabela-body");
    alunos.forEach((aluno) => {
        tabela.innerHTML += `<tr>
                                <td>${aluno.id}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.email}</td>
                                <td>${aluno.telefone}</td>
                                <td>${aluno.cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger">Excluir</button>
                                </td>
                            </tr>`;
    })
}

//CREATE

function salvarAluno(){
    event.preventDefault();
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    } 
    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    alert("Salvo com sucesso!");
}

//UPDATE

function atualizarAluno(){};

//DELETE
function deletarAluno(){

};
