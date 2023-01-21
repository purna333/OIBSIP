let input = document.querySelector('.entered_list');
let addbtn = document.querySelector('.add_list');
let tasks = document.querySelector('.tasks');

//add btn enabled
input.addEventListener('keyup', () =>{
    if(input.value.trim() !== 0){
        addbtn.classList.add('active')
    }
    else{
        addbtn.classList.remove('active')
    }
})

// add new item to list

addbtn.addEventListener('click', () => {
    if(input.value.trim()!=0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `

        tasks.appendChild(newItem);
        input.value = '';

    }
    else{
        alert("please enter a task")
    }
})

//delete item from list

tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed

tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.
        toggle('completed');
    }
})
