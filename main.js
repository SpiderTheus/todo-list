function novoLi(name){
    if(name == ""){
        alert("Sua tarefa precisa ter mais de um letra ;(")
        return;
    } 
    else {
        const tarefasUl = document.querySelector("ul")
        li = document.createElement('li')
        li.classList.add("tarefa")
        li.innerHTML = name  

        tarefasUl.appendChild(li)
        salvarListaNoLocalStorage()
    }    
}

function salvarListaNoLocalStorage(){
    const ul = document.getElementsByTagName("ul")
    const li = document.getElementsByTagName("li")

    let task = []
    for(i = 0; i < li.length; i++){
        task.push(li[i].textContent)
    }

    localStorage.setItem("tarefas", JSON.stringify(task))
}

/* function carregarListaDoLocalStorage(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas"))
    const ul = document.getElementsByTagName("ul")
    ul.innerHTML = ""
    for(i = 0; i < tarefas.length; i++){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(tarefas[i]))
        ul.appendChild(li)
    }
} */
function carregarListaDoLocalStorage(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas"))
    const ul = document.getElementsByTagName("ul")[0] // seleciona o primeiro elemento "ul"
    ul.innerHTML = ""
    for(let i = 0; i < tarefas.length; i++){
        const li = document.createElement('li')
        li.classList.add("tarefa")
        li.appendChild(document.createTextNode(tarefas[i]))
        ul.appendChild(li)
    }
}

/* function reniciarListaLocalStoarage(){
    localStorage.clear();
}

const btnReniciar = document.querySelector("button.reni");

btnReniciar.addEventListener('click', function() {
    reniciarListaLocalStoarage();
}); */

function limparLocalStorage() {
    
    const ul = document.querySelector("ul")
    ul.innerHTML = ""

    localStorage.clear();

}

const btnReniciar = document.querySelector("button.reni");
btnReniciar.addEventListener('click', function() {
    limparLocalStorage();
});



function add(){
    
    let name = document.querySelector("input").value
     novoLi(name)   
     document.querySelector("input").value = ""
}

const btn = document.querySelector("button")
btn.addEventListener("click", add)

document.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
})


window.onload = function() {
    carregarListaDoLocalStorage()
}