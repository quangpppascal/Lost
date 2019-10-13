show_number = 1
document.addEventListener('keypress', (e) => {
    document.getElementById('div'+show_number).style.display = "block"
    show_number +=1
})

