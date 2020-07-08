const haburger = document.querySelector('.hamburger')
const closeHamburger = document.querySelector('.close-hamburger')
const nav = document.querySelector('nav')
const add = document.querySelector('.nav-add')
const popup = document.querySelector('.popup')


const homeBtn = document.querySelector('.nav-home')
const rentBtn = document.querySelector('.nav-rent')
const clothesBtn = document.querySelector('.nav-clothes')
const healthBtn = document.querySelector('.nav-health')
const relaxBtn = document.querySelector('.nav-relax')
const transportBtn = document.querySelector('.nav-transport')
const foodBtn = document.querySelector('.nav-food')
const othersBtn = document.querySelector('.nav-others')
const allBtn = document.querySelector('.nav-all')

const homeSection = document.querySelector('#home')
const rentSection = document.querySelector('#rent')
const clothesSection = document.querySelector('#clothes')
const healthSection = document.querySelector('#health')
const relaxSection = document.querySelector('#relax')
const transportSection = document.querySelector('#transport')
const foodSection = document.querySelector('#food')
const othersSection = document.querySelector('#others')
const allSection = document.querySelector('#all')
const allSections = [homeSection, rentSection, clothesSection, healthSection, relaxSection, transportSection, foodSection, othersSection, allSection]


haburger.addEventListener('click', ()=>{
    nav.classList.add('show-nav')
    haburger.style.display = 'none'
    closeHamburger.style.display = 'block'
})
closeHamburger.addEventListener('click', ()=>{
    nav.classList.remove('show-nav')
    haburger.style.display = 'block'
    closeHamburger.style.display = 'none'
})

add.addEventListener('click', ()=>{
    popup.classList.toggle('show-popup')
})


const hideSection = ()=>{
        allSections.forEach((e)=>{
            e.classList.remove('show-section')
        })
    }








homeBtn.addEventListener('click', ()=>{
    hideSection()
    homeSection.classList.add('show-section')
})
rentBtn.addEventListener('click', ()=>{
    hideSection()
    rentSection.classList.add('show-section')
})
clothesBtn.addEventListener('click', ()=>{
    hideSection()
    clothesSection.classList.add('show-section')
})
healthBtn.addEventListener('click', ()=>{
    hideSection()
    healthSection.classList.add('show-section')
})
relaxBtn.addEventListener('click', ()=>{
    hideSection()
    relaxSection.classList.add('show-section')
})
transportBtn.addEventListener('click', ()=>{
    hideSection()
    transportSection.classList.add('show-section')
})
foodBtn.addEventListener('click', ()=>{
    hideSection()
    foodSection.classList.add('show-section')
})
othersBtn.addEventListener('click', ()=>{
    hideSection()
    othersSection.classList.add('show-section')
})
allBtn.addEventListener('click', ()=>{
    hideSection()
    allSection.classList.add('show-section')
})




















// wykres

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Czynsz, kredyt rachunki', 'Ubrania', 'Zdrowie, chemia, higiena', 'Relaks, hobby, kino', 'Paliwo, bilety, transport', 'Jedzenie', 'Inne'],
        datasets: [{
            label: 'Wszytkie wydatki',
            backgroundColor: [
                            '#4A5899',
                            '#ECB42E',
                            '#F84AA7',
                            '#5FAD56',
                            '#CF5C36',
                            '#FFF275',
                            '#ABABB0'],


            borderColor: '#001242',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage:50,
        legend: {
            display: false,
            fullWidth: false,
            
        }
    }
});