const haburger = document.querySelector('.hamburger')
const closeHamburger = document.querySelector('.close-hamburger')
const nav = document.querySelector('nav')
const add = document.querySelector('.nav-add')
const popup = document.querySelector('.popup')




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


const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Czynsz, kredyt rachunki', 'Ubrania', 'Zdrowie, chemia, higiena', 'Relaks, hobby, kino', 'Paliwo, bilety, transport', 'Jedzenie', 'Inne'],
        datasets: [{
            label: 'Wszytkie wydatki',
            backgroundColor: ['rgb(255, 99, 132)',
                            'rgb(0, 99, 132)',
                            'rgb(0, 22, 132)',
                            'rgb(0, 99, 132)',
                            'rgb(0, 99, 11)',
                            'rgb(0, 33, 132)',
                            'rgb(0, 0, 0)'],


            borderColor: 'rgb(255, 99, 132)',
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