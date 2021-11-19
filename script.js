const column = document.querySelectorAll('.circle')
let currentPlayer= 'red'
// column.addEventListener('click',()=>{
//     column.children[5].classList.add('red')
//     column.children[4].classList.add('black')
    
// })

// for (let i = 0; i < column.length; i++){
    
//     column[i].addEventListener('click',()=>{
//         if(column[i].classList.contains('taken')){
//             if (currentPlayer === 'red'){
//                 column[i].classList.contains('taken')
//                 column[i].classList.add('red')
//                 currentPlayer='yellow'
//             }else {
//                 column[i].classList.contains('taken')
//                 column[i].classList.add('yellow')
//                 currentPlayer = 'red'   
//                         }

//         }
//     })
// }




for (let i = 0; i < column.length; i++){
    
    column[i].addEventListener('click',(e)=>{
        console.log(e.currentTarget)
        if (currentPlayer === 'red'){
        column[i].classList.add('red')
        currentPlayer='yellow'
        }else {
            column[i].classList.add('yellow')
            currentPlayer = 'red'   
        }})
}
//https://img.itch.zone/aW1hZ2UvMTA5NjM5Lzc3MTc5NC5naWY=/original/XfcdXj.gif