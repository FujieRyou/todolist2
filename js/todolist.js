const taskInput = document.querySelector(".task_input")
const addBtn = document.querySelector(".add_btn")
const taskListWrap = document.querySelector("#task_list_wrap")

// テンプレートの関数を作る
const taskElementTemplete = (text) =>{
    // 引数を渡す
    const templete = `
    <div class="task_element">
        <input type="checkbox">
        <p>${text}</p>
        <button type="button">削除</button>
    </div>
    `

    return templete;
}

addBtn.addEventListener("click",()=>{
    const taskInputValue = taskInput.value;
    // テンプレートの関数に引数としてtaskのvalueを入れる
    taskListWrap.innerHTML += taskElementTemplete(taskInputValue)
})
