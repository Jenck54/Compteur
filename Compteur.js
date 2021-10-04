function Compteur() {
    let date = new Date()
    let datediplome = new Date('2022-07-20T17:00')
    let seconde = 1000
    let minute = 1000 * 60
    let heure = 1000 * 60 * 60
    let jour = 1000 * 60 * 60 * 24
    let compteur = datediplome - date
    document.getElementById('jourJ').innerHTML = Math.floor(compteur / jour)
    document.getElementById('heureH').innerHTML = ("00" + (Math.floor(compteur / heure) % 24)).slice(-2)
    document.getElementById('minuteM').innerHTML = ("00" + (Math.floor(compteur / minute) % 60)).slice(-2)
    document.getElementById('secondeS').innerHTML = ("00" + (Math.floor(compteur / seconde) % 60)).slice(-2)
}
    
setInterval(Compteur, 500)
