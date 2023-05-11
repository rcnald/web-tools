const select = document.getElementsByClassName('js-select')[0]
let selectIsOpen;

const isOpen = () => {
    selectIsOpen = !selectIsOpen

    return selectIsOpen
}

const toggleSelectRadius = () => {
    if(isOpen()){
        select.removeEventListener('blur', toggleSelectRadius)
        select.blur();
    }
    select.addEventListener('blur', toggleSelectRadius)
}

select.addEventListener('click', toggleSelectRadius)