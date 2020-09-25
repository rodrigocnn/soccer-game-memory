const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard , secondCard
let lockBoard = false

function flipCard(){

    if(lockBoard) return
    if(this === firstCard) return
    
    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true
        firstCard = this
        return
    }

    secondCard = this
    hasFlippedCard = false
    checkForMatch()
}

function disabledCards(){
    firstCard.removeEventListener('flip', flipCard)
    secondCard.removeEventListener('flip', flipCard)
}

function unflipCards(){
    lockBoard = true
    setTimeout(()=>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        lockBoard = false
    }, 1500)

}

function checkForMatch(){
  
    if(firstCard.dataset.card === secondCard.dataset.card){
        disabledCards()
        return
    }
    unflipCards()
}


cards.forEach((card)=>{
    card.addEventListener('click', flipCard)
})

function shuffle(){
    cards.forEach((card)=>{
        let ramdomPositon = Math.floor(Math.random() * 12)
        card.style.order = ramdomPositon
    })
}

shuffle()


