const select = document.getElementsByClassName('js-select')[0]
const selected = document.getElementsByClassName('js-selected')[0]
const selectedDisplay = document.getElementsByClassName('js-selected-display')[0]
const options = document.getElementsByClassName('js-options')[0]
let timesSelected = 0

const selectedToZero = () => {
    timesSelected = 0
}

const isSelectActive = () => {
    if(select.classList.contains('active')){
        for(let i = 0; i < options.children.length; i++){
            options.children[i].setAttribute('tabindex', 0)
        }
    }else{
        for(let i = 0; i < options.children.length; i++){
            options.children[i].removeAttribute('tabindex')
        }
    }
}

const selectActions = e => {
    const element = e.target
    const key = e.key
    const action = element.getAttribute('data-action')
    
    if(!action) return
    

    const actions = {
        selected(){
            select.classList.toggle('active')
            timesSelected += 1
            
            if(timesSelected === 2){
                selected.blur()
                selectedToZero()
            }
            isSelectActive()
        },
        option(){
            selected.value = element.textContent
            selectedDisplay.textContent = selected.value
            select.classList.remove('active')
        }
    }
    
    if(actions[action] && (key === "Enter" || key === undefined)) actions[action]()

}

select.addEventListener('click', selectActions)

select.addEventListener('keypress', selectActions)

selected.addEventListener('blur', () => {
    isSelectActive()
    selectedToZero()
    select.classList.remove('active')
})

for(let i = 0; i < options.children.length; i++){
    options.children[i].addEventListener('focus', () => {
        select.classList.add('active')
    })
        
    options.children[i].addEventListener('blur', () => {
        selectedToZero()
        select.classList.remove('active')
    })
    isSelectActive()
}

const accordion = document.getElementsByClassName('js-main')[0]

accordion.addEventListener('click', e => {
    const activeAccordion = e.target.closest(".js-accordion");
    if(!activeAccordion) return

    openAccordion(activeAccordion)
})
// const trigger = [...document.getElementsByClassName('js-trigger')]

const openAccordion = (activeAccordion) => {
    const triggers = [...document.getElementsByClassName('js-accordion-trigger')]
    const contents = [...document.getElementsByClassName('js-accordion-content')]

    triggers.forEach(trigger => {
        trigger.setAttribute('aria-expanded', 'false')
    })

    contents.forEach(content => {
        content.setAttribute('aria-hidden', 'true')
    })

    activeAccordion.getElementsByClassName('js-accordion-trigger')[0].setAttribute('aria-expanded', 'true')
    activeAccordion.getElementsByClassName('js-accordion-content')[0].setAttribute('aria-hidden', 'false')

}