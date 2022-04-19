const card = document.querySelector('.card')
const hiddenText = document.querySelector('.hidden')

card.addEventListener('mousedown', () => {
    if(hiddenText.style.display ='none'){
    hiddenText.style.display = 'block'
    console.log('clicked')}
    else if (hiddenText.style.display = 'block'){
        hiddenText.style.display = 'none'
    }
})