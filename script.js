const column = document.querySelectorAll('.circle')
let currentPlayer= 'red'
let isGameOver= false
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
    const howToWin = () =>{
        if  (column[0].classList.add('red') === currentPlayer && column[1].classList.add('red') === currentPlayer && column[2].classList.add('red') === currentPlayer && column[3].classList.add('red') === currentPlayer){
        alert(currentPlayer + ' wins')
        //isGameOver=true
        }
        // else if  (column[1] === currentPlayer && column[2] === currentPlayer && column[3] === currentPlayer && column[4] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[2] === currentPlayer && column[3] === currentPlayer && column[4] === currentPlayer && column[5] === currentPlayer){
        //         alert(currentPlayer + ' wins')
        //         isGameOver=true
        // }
        // else if  (column[6] === currentPlayer && column[7] === currentPlayer && column[8] === currentPlayer && column[9] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if  (column[7] === currentPlayer && column[8] === currentPlayer && column[9] === currentPlayer && column[10] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if  (column[8] === currentPlayer && column[9] === currentPlayer && column[10] === currentPlayer && column[11] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if  (column[12] === currentPlayer && column[13] === currentPlayer && column[14] === currentPlayer && column[15] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[13] === currentPlayer && column[14] === currentPlayer && column[15] === currentPlayer && column[16] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if  (column[14] === currentPlayer && column[15] === currentPlayer && column[16] === currentPlayer && column[17] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[18] === currentPlayer && column[19] === currentPlayer && column[20] === currentPlayer && column[21] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if  (column[19] === currentPlayer && column[20] === currentPlayer && column[21] === currentPlayer && column[22] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if  (column[20] === currentPlayer && column[21] === currentPlayer && column[22] === currentPlayer && column[23] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if  (column[24] === currentPlayer && column[25] === currentPlayer && column[26] === currentPlayer && column[27] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[25] === currentPlayer && column[26] === currentPlayer && column[27] === currentPlayer && column[28] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[26] === currentPlayer && column[27] === currentPlayer && column[28] === currentPlayer && column[29] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[30] === currentPlayer && column[31] === currentPlayer && column[32] === currentPlayer && column[33] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[31] === currentPlayer && column[32] === currentPlayer && column[33] === currentPlayer && column[34] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[32] === currentPlayer && column[33] === currentPlayer && column[34] === currentPlayer && column[35] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[36] === currentPlayer && column[37] === currentPlayer && column[38] === currentPlayer && column[39] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[37] === currentPlayer && column[38] === currentPlayer && column[39] === currentPlayer && column[40] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }
        // else if (column[38] === currentPlayer && column[39] === currentPlayer && column[40] === currentPlayer && column[41] === currentPlayer){
        //     alert(currentPlayer + ' wins')
        //     isGameOver=true
        // }

        
        
    }  




for (let i = 0; i < column.length; i++){
    
    column[i].addEventListener('click',(e)=>{
        console.log(e.currentTarget)
        if (currentPlayer === 'red'){
        column[i].classList.add('red')
        howToWin()
        currentPlayer='yellow'
        }else {
            column[i].classList.add('yellow')
            //howToWin()
            currentPlayer = 'red'   
        }})
}
//https://img.itch.zone/aW1hZ2UvMTA5NjM5Lzc3MTc5NC5naWY=/original/XfcdXj.gif