const game = () => {
///////////////////

const column = document.querySelectorAll('.container')
const circle = document.querySelectorAll('.circle')
let currentPlayer= 'red'
let isGameOver= false


//found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#creating_a_two-dimensional_array
const howToWin = [
[0, 1, 2, 3],
[1, 2, 3, 4],
[2, 3, 4, 5],
[6, 7, 8, 9,],
[7, 8, 9, 10],
[8, 9, 10, 11],
[12, 13, 14, 15],
[13, 14, 15, 16],
[14, 15, 16, 17],
[18, 19, 20 ,21],
[19, 20 ,21, 22],
[20, 21, 22, 23],
[24, 25, 26, 27],
[25, 26, 27, 28],
[26, 27, 28, 29],
[30, 31, 32, 33],
[31, 32, 33, 34],
[32, 33, 34, 35],
[36, 37, 38, 39],
[37, 38, 39, 40],
[38, 39, 40, 41],
[0, 6, 12, 18],
[6, 12, 18, 24],
[12, 18, 24, 30],
[18, 24, 30, 36],
[1, 7, 13, 19],
[7, 13, 19, 25],
[13, 19, 25, 31],
[19, 25, 31, 37],
[2, 8, 14, 20],
[8, 14, 20, 26],
[14, 20, 26, 32],
[20, 26, 32, 38],
[3, 9, 15, 21],
[9, 15, 21, 27],
[15, 21, 27, 33],
[21, 27, 33, 39],
[4, 10, 16, 22],
[10, 16, 22, 28],
[16, 22, 28, 34],
[22, 28, 34, 40],
[5, 11, 17, 23,],
[11, 17, 23, 29],
[17, 23, 29, 35],
[23, 29, 35, 41],
[3, 8, 13, 18],
[4, 9, 14, 19],
[9, 14, 19, 24],
[5, 10, 15, 20],
[10, 20, 25, 30],
[11, 16, 21, 26],
[16, 21, 26, 31],
[21, 26, 31, 26],
[17, 22, 27, 32],
[22, 27, 32, 37],
[23, 28, 33, 38],
[2, 9, 16, 23],
[18, 25, 32, 39],
[1, 8, 15, 22],
[8, 15, 22, 29],
[12, 19, 26, 33],
[19, 26, 33, 40],
[0, 7, 14, 21],
[7, 14, 21, 28],
[14, 21, 28, 35],
[6, 13, 20, 27],
[13, 20, 27, 34],
[20, 27, 34, 41],

]




    // const howToWin = () =>{
    //     if  (column[0].currentTarget === currentPlayer && column[1].currentTarget === currentPlayer && column[2].currentTarget === currentPlayer && column[3].currentTarget === currentPlayer){
    //     alert(currentPlayer + ' wins')
        //isGameOver=true
       // }
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

        
        
   // }  




for (let i = 0; i < circle.length; i++){
    
    circle[i].addEventListener('click',(e)=>{
        console.log(e.currentTarget)
        if (i<=5){
            for(let j =5; j>=0; j--){
                if (circle[j].classList.contains('red') || circle[j].classList.contains('yellow')){
                    console.log(circle[j])
                    
                }
                else {
                    circle[j].classList.add(currentPlayer)
                    console.log(circle[j])
                    j=-1
                    if(currentPlayer=='yellow'){
                        currentPlayer='red'
                    }else{
                        currentPlayer='yellow'
                    }
                    return
                }
            }
        }else if (i<=11){
            for(let j = 11; j>=0; j--){
                if (circle[j].classList.contains('red') || circle[j].classList.contains('yellow')){
                    console.log(circle[j])
                    
                }
                else {
                    circle[j].classList.add(currentPlayer)
                    console.log(circle[j])
                    j=-1
                    if(currentPlayer=='yellow'){
                        currentPlayer='red'
                    }else{
                        currentPlayer='yellow'
                    }
                    return
                }
            }
        }
        else if (i<=17){
            for(let j = 17; j>=0; j--){
                if (circle[j].classList.contains('red') || circle[j].classList.contains('yellow')){
                    console.log(circle[j])
                    
                }
                else {
                    circle[j].classList.add(currentPlayer)
                    console.log(circle[j])
                    j=-1
                    if(currentPlayer=='yellow'){
                        currentPlayer='red'
                    }else{
                        currentPlayer='yellow'
                    }
                    return
                }
            }
        }
        else if (i<=23){
            for(let j = 23; j>=0; j--){
                if (circle[j].classList.contains('red') || circle[j].classList.contains('yellow')){
                    console.log(circle[j])
                    
                }
                else {
                    circle[j].classList.add(currentPlayer)
                    console.log(circle[j])
                    j=-1
                    if(currentPlayer=='yellow'){
                        currentPlayer='red'
                    }else{
                        currentPlayer='yellow'
                    }
                    return
                }
            }
        }
        else if (i<=29){
            for(let j = 29; j>=0; j--){
                if (circle[j].classList.contains('red') || circle[j].classList.contains('yellow')){
                    console.log(circle[j])
                    
                }
                else {
                    circle[j].classList.add(currentPlayer)
                    console.log(circle[j])
                    j=-1
                    if(currentPlayer=='yellow'){
                        currentPlayer='red'
                    }else{
                        currentPlayer='yellow'
                    }
                    return
                }
            }
        }
        else if (i<=35){
            for(let j = 35; j>=0; j--){
                if (circle[j].classList.contains('red') || circle[j].classList.contains('yellow')){
                    console.log(circle[j])
                    
                }
                else {
                    circle[j].classList.add(currentPlayer)
                    console.log(circle[j])
                    j=-1
                    if(currentPlayer=='yellow'){
                        currentPlayer='red'
                    }else{
                        currentPlayer='yellow'
                    }
                    return
                }
            }
        }
        else if (i<=41){
            for(let j = 41; j>=0; j--){
                if (circle[j].classList.contains('red') || circle[j].classList.contains('yellow')){
                    console.log(circle[j])
                    
                }
                else {
                    circle[j].classList.add(currentPlayer)
                    console.log(circle[j])
                    j=-1
                    if(currentPlayer=='yellow'){
                        currentPlayer='red'
                    }else{
                        currentPlayer='yellow'
                    }
                    return
                }
            }
        }
        else {
            return "You picked the wrong sqaure"
        }





    })
    //     if (currentPlayer === 'red'){
    //     circle[i].classList.add('red')
    //     //howToWin()
    //     currentPlayer='yellow'
    //     }else {
    //         circle[i].classList.add('yellow')
    //         //howToWin()
    //         currentPlayer = 'red'   
    // }})
}
/////////////
}
game()
let restartGame = document.querySelector('.reset').addEventListener('click', ()=>{
    isGameOver= false
    const circle = document.querySelectorAll('.cirlce');
    for(let i=0; i< circle.length;i++){
        circle[i].classList.add()
    }
    game()
})