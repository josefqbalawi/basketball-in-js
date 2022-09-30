let box = document.querySelectorAll('.box')
let count1 = 0;
let count2 = 0;

box[0].textContent = count1
box[1].textContent = count2

let lis1 = document.querySelectorAll('.boxLi1')

lis1.forEach((li) => {
    li.addEventListener('click', () => {
        count1 += +li.innerText;
        box[0].textContent = count1
    })
})


let lis2 = document.querySelectorAll('.boxLi2')

lis2.forEach((li) => {
    li.addEventListener('click', () => {
        count2 += +li.innerText;
        box[1].textContent = count2
    })
})