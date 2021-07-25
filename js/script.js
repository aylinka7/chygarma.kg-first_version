const burgerBtn = document.querySelector('.burger')
console.log(burgerBtn);
const burgerMenu = document.querySelector('.burger_menu')
const burgerBg = document.querySelector('.burger_bg')
const burgerClose = document.querySelectorAll('.burger_close')
console.log(burgerClose);

burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.add('burger_active')
    burgerBg.classList.add('burger_active')
})
for(let i = 0; i < burgerClose.length; i++){
    burgerClose[i].addEventListener('click', function() {
        burgerMenu.classList.remove('burger_active')
        burgerBg.classList.remove('burger_active')
    })
}
// overwriteList()


let likes;
let liked;
let readBtn = document.querySelector('.read')
let readersNumber = document.querySelector('.readers span')
let readers = document.querySelector('.readers')

likes = +readersNumber.innerText

localStorage.liked
    ? (liked = JSON.parse(localStorage.getItem("liked")))
    : (liked = 0)

readBtn.addEventListener('click', function(){
        liked = !liked
        overwriteLocal()
        liked === true ? likes++ : ''
    })
console.log(likes);
    

console.log(liked);

        function overwriteLocal() {
            localStorage.setItem("liked", JSON.stringify(liked));
        }
// readBtn.addEventListener('click', function(){
//     likes = +readersNumber.innerText + 1
//     readersNumber.innerText = likes
//     overwriteLocal()
// })



// localStorage.likes
//     ? (likes = JSON.parse(localStorage.getItem("likes")))
//     : (likes = 0);

//     function overwriteLocal() {
//         localStorage.setItem("likes", JSON.stringify(likes));
//     }

// readersNumber.innerHTML = likes


    
    
   