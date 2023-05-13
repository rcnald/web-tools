const select = document.getElementsByClassName('js-select')[0]
const selected = document.getElementsByClassName('js-selected')[0]

select.addEventListener('click', e => {
    const element = e.target
    const action = element.getAttribute('data-action')

    if(!action) return

    const actions = {
        selected(){
            select.classList.toggle('active')
        },
        option(){
            selected.value = element.textContent
            select.classList.remove('active')
        }
    }

    if(actions[action]) actions[action]()

})

selected.addEventListener('blur', () => {
    select.classList.remove('active')
})