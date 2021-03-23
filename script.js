let categories = ['Bici' , 'Auto' , 'Moto' , 'Giochi' , 'Elettronica' , 'Libri' , 'Immobili' , 'Animali']   

let categoryWrapper = document.querySelector('#category-wrapper')

categories.forEach(cat =>{
    let card = document.createElement('div')
    card.classList.add('col-12' , 'col-md-4')

    card.innerHTML = 
    `
    <div class="card">
    <h3 class="fw-bold"> ${cat}</h3>
    <i class="fas fa-bicycle fs-2 i-color mb-2"></i> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa asperiores debitis ea velit enim harum illo vero minima aliquam sint amet dolores est temporibus ullam aut eius tenetur libero?</p>
    </div>
    
    `
    categoryWrapper.appendChild(card)
})