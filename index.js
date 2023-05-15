const listDiv = document.getElementById('List');
const input = document.getElementById('addToList');
const addButton = document.getElementById('Add');

let items = localStorage.getItem('data')

listDiv.innerHTML = items

addButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value == '') {
        alert('enter something')
    } else {
        addToList(input.value)
    }
})

function addToList (text) {
    let item = document.createElement('li')
    item.innerHTML = `${text} <span id="del">&xotime;</span>`
    listDiv.appendChild(item)
    input.value = ''

    localStorage.setItem('data', listDiv.innerHTML)
}

listDiv.addEventListener('click', (e) => {
    if (e.target.id == 'del') {
        listDiv.removeChild(e.target.parentNode)

        localStorage.setItem('data', listDiv.innerHTML)
    }
})