let myCards = document.querySelector('.cards');
const liveCards = myCards.children;
console.log(myCards)
console.log(liveCards)

// init();
// window.addEventListener('resize', init);

function cloneCards(){
        let newNodeR = liveCards[2].cloneNode(true)
        myCards.appendChild(newNodeR)
        let newNodeL = liveCards[6].cloneNode(true)
        liveCards[1].insertAdjacentElement("afterend", newNodeL)
}

// function removeCards(){
//     setTimeout(() => {
//         liveCards[2].remove()
//         document.querySelectorAll('.card')[5].remove()
//       }, 2000);
//     };

document.querySelector('.left').addEventListener('click', function () {

    cloneCards()
    console.log(myCards)
    console.log(liveCards.length)

    setTimeout(() => {
        rollSlider('.left')
        if(liveCards.length > 7){
            document.querySelectorAll('.card')[1].remove()
            document.querySelectorAll('.card')[0].remove()
            }
    }, 1000)
});


document.querySelector('.right').addEventListener('click', function () {
    cloneCards()
    console.log(myCards)
    console.log(liveCards.length)
    // document.querySelectorAll('.card')[6].remove()
    // console.log(liveCards.length)
    // document.querySelectorAll('.card')[5].remove()
    setTimeout(() => {
        setTimeout(() => {
            rollSlider('.right')
        }, 1000)

        if(liveCards.length > 7){
            document.querySelectorAll('.card')[6].remove()
            document.querySelectorAll('.card')[5].remove()
        }
    }, 1000)
});

function rollSlider(direction) {
    console.log('rol slider')
    const moveCollection = document.querySelector('.cards')
        console.log(moveCollection.children.length)
    if(direction == '.left' ){
        for(let i = 2; i < moveCollection.children.length; i++){
        moveCollection.children[i].style.transform = 'translate(-' + 368 + 'px)'
        // moveCollection.children[i].style.left = -368 + 'px';
        }
        // if(liveCards.length > 7){
        //     document.querySelectorAll('.card')[1].remove()
        //     document.querySelectorAll('.card')[0].remove()
        //     }
    }else{
        for(let i = 2; i < moveCollection.children.length; i++){
            moveCollection.children[i].style.transform = 'translate(' + 368 + 'px)'
            // moveCollection.children[i].style.left = -368 + 'px';
        }
        // if(liveCards.length > 7){
        //     document.querySelectorAll('.card')[liveCards.length - 1].remove()
        //     document.querySelectorAll('.card')[liveCards.length - 1].remove()
        // }
    }

}



