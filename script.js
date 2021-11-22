const game = () => {
///////////////////

const column = document.querySelectorAll('.container')
const circle = document.querySelectorAll('.circle')
let currentPlayer= 'red'
let isGameOver= false


//found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#creating_a_two-dimensional_array
const winningArray = [
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
[5, 11, 17, 23],
[11, 17, 23, 29],
[17, 23, 29, 35],
[23, 29, 35, 41]
]
const howToWin=() =>{
    for (let i = 0; i < winningArray.length; i++){
        let combo = winningArray[i]
        if(
            circle[combo[0]].classList.contains(currentPlayer) &&
            circle[combo[1]].classList.contains(currentPlayer) &&
            circle[combo[2]].classList.contains(currentPlayer) &&
            circle[combo[3]].classList.contains(currentPlayer) 
        ){
            isGameOver=true
            //return alert('you won')
            let modal = document.createElement('div')
            modal.className='modal'
            modal.textContent= 'You Won!'
            modal.addEventListener('click',() =>{
                modal.remove()
            }
            )
            document.body.appendChild(modal)
            return
        }
    }
}




for (let i = 0; i < circle.length; i++){
    circle[i].addEventListener('click',(e)=>{
        if(isGameOver){
            return
        }
        console.log(e.currentTarget)
        if (i<=5){
            for(let j =5; j>=0; j--){
                if (circle[j].classList.contains('red') || circle[j].classList.contains('yellow')){
                    console.log(circle[j])
                    
                }
                else {
                    circle[j].classList.add(currentPlayer)
                    console.log(circle[j])
                    howToWin()
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
                    howToWin()
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
                    howToWin()
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
                    howToWin()
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
                    howToWin()
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
                    howToWin()
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
                    howToWin()
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
    }
    )
}
/////////////
let restartGame = document.querySelector('.reset').addEventListener('click', ()=>{
    isGameOver= false
    
    for(let i=0; i< circle.length;i++){
        circle[i].className='circle'
    }
    
})
}
game()
