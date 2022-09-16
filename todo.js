// 1. 입력에 대한 이벤트 리스너 등록하기
// - 할 일 추가를 위해서는 input 요소로부터 이벤트 리스너를 등록하여, 이벤트 캐치 후 입력받은 데이터를 배열에 순차적으로 담아줘야한다.
// const todoInputElem = document.querySelector('.todo-input');

// let todos = []; // 할 일들을 담을 배열
// let id = 0; // 각각의 할 일들을 구별할 수 있는 키 값을 설정하기 위해 선언

// const init = () => { 
//     todoInputElem.addEventListener('keypress',(e) =>{
//         if(e.key === 'ENTER'){
//             appendTodos(e.target.value); todoInputElem.value='';
//         }
//     })
// }

// init()
// init() 함수 : todo.js 파일이 실행되자마자 호출되는 함수, input요소를 담은 e.target.value 'keypress'에 대한 이벤트 리스너 등록시킴
// 만약 입력되는 값이 Enter라면 appendTodos()함수에 e.target.value(input의 value)를 넘겨주고, e.target.valu의 value값을 초기화 함

// 2. 할 일 추가하기
// - appendTodos() 함수 : todos 배열에 할 일을 추가하는 함수
// - 할 일의 타입 : {id:number; isCompleted:boolean; content:string}
// - id: number 타입, 할 일의 키 값
// - isCompleted:boolean 타입, 할 일의 완료상태
// - content:string 타입, 할 일의 내용

// const setTodos = (newTodos) => {
//     todos = newTodos;
// }
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.todo-input')
    const addButton = document.querySelector('#add-button')
    const todoList = document.querySelector('.todo-list')
    const alert = document.querySelector('span')
    const clearButton = document.querySelector('.allcl_btn')

      // '+' 버튼 익명 화살표 함수 
    const addTodo = () => {
        if (input.value !== '') {
            const item = document.createElement('ul')
            item.className='tdl_libox'
        // 체크박스
            const checkbox = document.createElement('input')
            checkbox.type='checkbox'
        // text
            const text = document.createElement('span');
            text.className='listem'
        // 제거하기 버튼
            const deleteButton = document.createElement('button')
            deleteButton.textContent="X"

            text.textContent = input.value
            input.value=''
        
            item.appendChild(checkbox)
            item.appendChild(text)
            item.appendChild(deleteButton)
            todoList.appendChild(item)

        // 체크박스 이벤트 리스너
            checkbox.addEventListener('change', (event) =>{ 
                if (event.currentTarget.checked)
                {
                    text.style.textDecoration='line-through'
                    text.style.opacity='0.6'
                }
                else {
                    text.style.textDecoration='none'
                    text.style.opacity='1'
                }
            })

          // 제거하기 버튼 클릭 이벤트 리스너
            deleteButton.addEventListener('click', (event) => {
                todoList.removeChild(event.currentTarget.parentNode)
            })
            input.value =''
        }
        else
            alert.textContent = 'TO DO LIST'
    }

    addButton.addEventListener('click', addTodo)

      // 할 일 입력창에서 enter key가 눌렸을 때
    input.addEventListener('keypress', (event) => {
        const ENTER = 13
        if (event.keyCode === ENTER)
            addTodo();
    })

    // 모두 지우기 버튼 클릭 이벤트 리스너
    clearButton.addEventListener('click', function() {
        todoList.innerHTML = '';
    });
})