// let categories = ['Bici' , 'Auto' , 'Moto' , 'Giochi' , 'Elettronica' , 'Libri' , 'Immobili' , 'Animali']   
// usato per creare le card delle categorie con nome categoria e icona personalizzata
let categories = [
    {name: 'Bici', icon:'<i class="fas fa-bicycle fs-2 mb-3 i-color"></i>' , text:"Vuoi un giorno fare il giro d'italia con la maglia rosa? Beh noi non possiamo garantirti che ci riuscirai ma possiamo rendere la tua passione ancora più bella!"},
    {name: 'Auto', icon:'<i class="fas fa-car fs-2 mb-3 i-color"></i>' , text:'Vuoi cambiare auto? o forse vorresti vedere la tua? vedi le migliori offerte qui da noi !'},
    {name: 'Moto', icon:'<i class="fas fa-motorcycle fs-2 mb-3 i-color"></i>', text:'Ti piace la velocità? O sei più tipo da lunghi viaggi? Nessun problema da noi potrai trovare tutto ciò che ti serve'},
    {name: 'Giochi', icon:'<i class="fas fa-gamepad fs-2 mb-3 i-color"></i>', text:'La sezione preferita da tutti i bambini! vuoi fare un regalo stupendo ai tuoi figli? beh cosa aspetti sai già cosa fare !'},
    {name: 'Elettronica', icon:'<i class="fas fa-laptop-medical fs-2 mb-3 i-color"></i>', text:'Sei appassionato di tecnologia? ti serve un pc nuovo? o forse vorresti avere una casa domotica? nessun problema troverai tutto quello che vuoi e anche di più ;)'} , 
    {name: 'Libri', icon:'<i class="fas fa-book fs-2 mb-3 i-color"></i>', text:'Sei un amante della lettura? sei alla ricerca di una nuova avventura? allora visita la nostra sezione apposita! '} ,
    {name: 'Immobili', icon:'<i class="fas fa-home fs-2 mb-3 i-color"></i>', text:'Sei alla ricerca di una nuova casa? o di un terreno? abbiamo tutto quello che fa al caso tuo' } ,
    {name: 'Animali', icon:'<i class="fas fa-paw fs-2 mb-3 i-color"></i>', text:'Troverai tantissimi articoli per il divertimento e la salute dei tuoi amici a 4 zampe... cosa aspetti ?'} ,
    {name: 'Cucina', icon:'<i class="fas fa-utensils fs-2 mb-3 i-color"></i>', text:'Sei appassionato di cucina? O forse sei alle prime armi, in ogni caso abbiamo quello che serve per rendere la tua esperienza unica!'} ,
]
// usata per creare le card delle categorie 
let categoryWrapper = document.querySelector('#category-wrapper')

categories.forEach(cat =>{
    let card = document.createElement('div')
    card.classList.add('col-12' , 'col-md-6' , 'col-lg-4')

    card.innerHTML = 
    `
    <div class="card1" data-aos="zoom-in" data-aos-duration="1500">
    <h3 class="fw-bold"> ${cat.name}</h3>
    ${cat.icon}
    <p>${cat.text}</p>
    </div>
    
    `
    categoryWrapper.appendChild(card)
})



//funzione per le card del carosello nella home 
function populateLastAds(){
    let wrapper = document.querySelector('.last-ads')

    let ads = [
        { title : 'Moto' , description : 'This is a wider card with supporting text below as a natural lead-in...', price : 1230 },
        { title : 'Auto rotta' , description : 'This is a wider card with supporting text below as a natural lead...', price : 1000 },
        { title : 'Panda' , description : 'This is a wider card with supporting text below as a natural lead-in...', price : 1230 },
        { title : 'Bambola' , description : 'This is a wider card with supporting text below as a natural lead-in..', price : 1230 },
        { title : 'Raccolta fumetti' , description : 'This is a wider card with supporting text below as a natural lead-in...', price : 1230 },
        { title : 'Orologio Hemilton' , description : 'This is a wider card with supporting text below as a natural lead-in...', price : 1230 },
        { title : 'Samsung Galaxy s200' , description : 'This is a wider card with supporting text below as a natural lead-in..', price : 1230 },
        { title : 'Iphone 24' , description : 'This is a wider card with supporting text below as a natural lead-in...', price : 1230 },
        { title : 'Tablet' , description : 'This is a wider card with supporting text below as a natural lead-in...', price : 1230 },
        { title : 'Casa degli spiriti' , description : 'This is a wider card with supporting text below as a natural lead-in...', price : 1230 },
        { title : 'Bello figo' , description : 'This is a wider card with supporting text below as a natural lead-in...', price : 1230 },
    ]


     

    ads.forEach(ad=>{
        let card = document.createElement('div')

        card.innerHTML = 
        `
        <div class="card text-white">
        <img src="https://picsum.photos/430" class="card-img" alt="...">
        <div class="card-img-overlay ads-card-overlay">
          <h5 class="card-title fw-bold fs-4 my-4">${ad.title}</h5>
          <p class="card-text text-white fw-bold">${ad.description}</p>
          <p class="tc-accent">${ad.price} $</p>
          <button class="btn button-custom rounded-pill">Scopri di più...</button>
          <i class="far fa-heart color-heart like"></i>
        </div>
      </div>
        `
        wrapper.appendChild(card)

        
    })  //da alla funzione la possibilità di riempire il cuore del like
    let likeIcons= document.querySelectorAll('.like')

            // console.log(likeIcons);

            likeIcons.forEach(icon => {
                icon.addEventListener('click', () => {
                    icon.classList.toggle('fas')
                    icon.classList.toggle('far')
                })

            })
}
    populateLastAds()
    
