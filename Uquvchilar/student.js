const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const age = document.querySelector(".age");
const course = document.querySelector(".course");
const number = document.querySelector(".number");
const btn = document.querySelector(".btn");
const tbody = document.querySelector(".tbody");

let localData = JSON.parse(localStorage.getItem("todo"));
console.log(localData);

let todos = localData?localData:[]

innerData(todos)
function innerData(data){
    tbody.innerHTML = "";
    data.forEach(element =>{
        tbody.innerHTML+=`
        <tr>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.age}</td>
        <td>${element.course}</td>
        <td>${element.number}</td>
        <td><button class="btn btn-danger" onclick="removeTodo(${element.id})">Delete</button></td>
    </tr>
        `
    });
}

btn.addEventListener("click", function(){
    let todo ={};
    todo.name=name.value;
    todo.surname=surname.value;
    todo.age=age.value;
    todo.course=course.value;
    todo.number=number.value;
todo.id=Date.now();

if(todo.name && todo.surname && todo.age && todo.course && todo.number){
    if (!todos.some(item=>item.number == todo.number)){
        todos.push(todo);
        innerData(todos);
        localStorage.setItem("todo", JSON.stringify(todos))
        name.value="";
        surname.value="";
        age.value="";
        course.value="";
        number.value="";
}
else{
    alert("Bu raqam band");
}
}
else{
    alert("Kamchilik bor")

}

})
function removeTodo(id){
    if(!todos.length == 0){
        todos = todos.filter(item=> item.id !=id);
        innerData(todos);
        localStorage.setItem("todo",JSON.stringify(todos));

    }
    else{
        tbody.innerHTML ="<tr><td colspan='3' style='text-align:center'>No Data</td></tr>"
    }
}