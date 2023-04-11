//存放list的seciton
let seciton = document.querySelector('section');
//待辦事項button
let add = document.querySelector('form button');
add.addEventListener("click", e=>{
    //prevent form from being submitted
    e.preventDefault();
    
    //get the input values
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    console.log(todoText);

    if (todoText === ""){
        alert("請正確輸入待辦事項");
        return;
    }

    //input value -> create list
    let todo = document.createElement('div');
    todo.classList.add('todo');
    let text = document.createElement('span');
    text.classList.add('todo-text');
    text.contentEditable = false;
    text.innerText = todoText;
    todo.appendChild(text);

    //check icon
    let checkButton = document.createElement('button');
    checkButton.classList.add('check');
    checkButton.innerHTML = '<i class="fa-sharp fa-regular fa-circle-check"></i>';
    todo.appendChild(checkButton);

    //完成事項事件
    checkButton.addEventListener("click",e =>{
        let todoAction = e.target.parentElement;
        todoAction.classList.toggle('done');
    })

    //edit icon
    let editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    todo.appendChild(editButton);

    //修改事項事件
    editButton.addEventListener("click", ()=>{
        todo.classList.contains('done') ?  text.contentEditable = false : text.contentEditable = true;
        text.focus();
    });

    //離開text框便不可修改
    text.addEventListener('blur', () => {
        text.contentEditable = false;
    });

    //trash icon
    let trashButton = document.createElement('button');
    trashButton.classList.add('trash')
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todo.appendChild(trashButton);

    //刪除事項事件
    trashButton.addEventListener("click", e=>{
        let todoAction = e.target.parentElement;

        todoAction.addEventListener("animationend", ()=>{
            todoAction.remove();
        })

        todoAction.style.animation = "scaleDown 0.5s forwards";
    })
   
    todo.style.animation = "scaleUp 0.5s forwards";

    form.children[0].value = "";

    seciton.append(todo);
})