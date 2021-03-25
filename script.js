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
    <div class="card1">
    <h3 class="fw-bold"> ${cat.name}</h3>
    ${cat.icon}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa asperiores debitis ea velit enim harum illo vero minima aliquam sint amet dolores est temporibus ullam aut eius tenetur libero?</p>
    </div>
    
    `
    categoryWrapper.appendChild(card)
})

let likeIcons= document.querySelectorAll('#like')

// console.log(likeIcons);

likeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fas')
        icon.classList.toggle('far')
    })

})


function populateLastAds(){
    let wrapper = document.querySelector('.last-ads')

    let ads = [
        { title : 'Moto' , description : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price : 1230 },
        { title : 'Auto rotta' , description : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price : 1000 },
        { title : 'Panda' , description : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price : 1230 },
        { title : 'Bambola' , description : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price : 1230 },
        { title : 'Raccolta fumetti' , description : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price : 1230 },
        { title : 'Orologio Hemilton' , description : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price : 1230 },
        { title : 'Iphone 24' , description : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price : 1230 },
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
          <i id="like" class="far fa-heart color-heart"></i>
        </div>
      </div>
        `
        wrapper.appendChild(card)
    })
}
    populateLastAds()