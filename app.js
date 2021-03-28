const txtAnim = document.querySelector('h1')

new TypeWriter(txtAnim, {
    deleteSpeed: 20
})
    .typeString('Les réseaux sociaux')
    .pauseFor(300)
    .typeString('<strong>,')




