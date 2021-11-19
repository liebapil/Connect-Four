const column = document.querySelectorAll('.circle')
let currentPlayer= 'red'
// column.addEventListener('click',()=>{
//     column.children[5].classList.add('red')
//     column.children[4].classList.add('black')
    
// })

for (let i = 0; i < column.length; i++){
    
    column[i].addEventListener('click',()=>{
        if (currentPlayer === 'red'){
        column[i].classList.add('red')
        currentPlayer='black'
        }else {
            column[i].classList.add('black')
            currentPlayer = 'red'   
        }})

}
