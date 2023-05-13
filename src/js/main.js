const select = document.getElementsByClassName('js-select')[0]
const selected = document.getElementsByClassName('js-selected')[0]
const options = document.getElementsByClassName('js-options')[0]
let timesSelected = 0

const selectedToZero = () => {
    timesSelected = 0
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
        },
        option(){
            selected.value = element.textContent
            select.classList.remove('active')
        }
    }

    if(actions[action] && (key === "Enter" || key === undefined)) actions[action]()

}

select.addEventListener('click', selectActions)

select.addEventListener('keypress', selectActions)

selected.addEventListener('blur', () => {
    select.classList.remove('active')
    selectedToZero()
})

for(let i = 0; i < options.children.length; i++){
    options.children[i].addEventListener('focus', () => {
        select.classList.add('active')
    })
        
    options.children[i].addEventListener('blur', () => {
        select.classList.remove('active')
        selectedToZero()
    })
}