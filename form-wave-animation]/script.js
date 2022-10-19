const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        // splits the text string into an array
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        // turns it into an array with span around each
        .join('')
        // turns it back into a string
})