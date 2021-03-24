// let categories = ['Bici' , 'Auto' , 'Moto' , 'Giochi' , 'Elettronica' , 'Libri' , 'Immobili' , 'Animali']   

let categories = [
    {name: 'Bici', icon:'<i class="fas fa-bicycle fs-2 mb-3 i-color"></i>'},
    {name: 'Auto', icon:'<i class="fas fa-car fs-2 mb-3 i-color"></i>'},
    {name: 'Moto', icon:'<i class="fas fa-motorcycle fs-2 mb-3 i-color"></i>'},
    {name: 'Giochi', icon:'<i class="fas fa-gamepad fs-2 mb-3 i-color"></i>'},
    {name: 'Elettronica', icon:'<i class="fas fa-laptop-medical fs-2 mb-3 i-color"></i>'} , 
    {name: 'Libri', icon:'<i class="fas fa-book fs-2 mb-3 i-color"></i>'} ,
    {name: 'Immobili', icon:'<i class="fas fa-home fs-2 mb-3 i-color"></i>'} ,
    {name: 'Animali', icon:'<i class="fas fa-paw fs-2 mb-3 i-color"></i>'} ,
    {name: 'Cucina', icon:'<i class="fas fa-utensils fs-2 mb-3 i-color"></i>'} ,
]

let categoryWrapper = document.querySelector('#category-wrapper')

categories.forEach(cat =>{
    let card = document.createElement('div')
    card.classList.add('col-12' , 'col-md-4')

    card.innerHTML = 
    `
    <div class="card">
    <h3 class="fw-bold"> ${cat.name}</h3>
    ${cat.icon}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa asperiores debitis ea velit enim harum illo vero minima aliquam sint amet dolores est temporibus ullam aut eius tenetur libero?</p>
    </div>
    
    `
    categoryWrapper.appendChild(card)
})