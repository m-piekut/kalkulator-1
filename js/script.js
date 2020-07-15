const haburger = document.querySelector('.hamburger')
const closeHamburger = document.querySelector('.close-hamburger')
const nav = document.querySelector('nav')
const add = document.querySelector('.nav-add')
//popup
const popup = document.querySelector('.popup')
const addBtn = document.querySelector('.add-btn')
const closeBtn = document.querySelector('.close-btn')
const popupError = document.querySelector('.error')
//popup inputs
const textInp = document.querySelector('#new-expenditure')
const numberInp = document.querySelector('#number')
const rentInp = document.querySelector('#checkbox-rent')
const clothesInp = document.querySelector('#checkbox-clothes')
const healthInp = document.querySelector('#checkbox-health')
const relaxInp = document.querySelector('#checkbox-relax')
const transportInp = document.querySelector('#checkbox-transport')
const foodInp = document.querySelector('#checkbox-food')
const othersInp = document.querySelector('#checkbox-others')
const allInputsLabels = [rentInp, clothesInp, healthInp, relaxInp, transportInp, foodInp, othersInp]

// listy
let rentList = document.querySelector('.rent-list')
let clothesList = document.querySelector('.clothes-list')
let healthList = document.querySelector('.health-list')
let relaxList = document.querySelector('.relax-list')
let transportList = document.querySelector('.transport-list')
let foodList = document.querySelector('.food-list')
let othersList = document.querySelector('.others-list')
let allList = document.querySelector('.all-list')
window.onload = function() {
    if (JSON.parse(localStorage.getItem("rent-list")) != null)
    rentList.innerHTML = JSON.parse(localStorage.getItem("rent-list"));
    if (JSON.parse(localStorage.getItem("clothes-list")) != null)
    clothesList.innerHTML = JSON.parse(localStorage.getItem("clothes-list"));
    if (JSON.parse(localStorage.getItem("health-list")) != null)
    healthList.innerHTML = JSON.parse(localStorage.getItem("health-list"));
    if (JSON.parse(localStorage.getItem("relax-list")) != null)
    relaxList.innerHTML = JSON.parse(localStorage.getItem("relax-list"));
    if (JSON.parse(localStorage.getItem("transport-list")) != null)
    transportList.innerHTML = JSON.parse(localStorage.getItem("transport-list"));
    if (JSON.parse(localStorage.getItem("food-list")) != null)
    foodList.innerHTML = JSON.parse(localStorage.getItem("food-list"));
    if (JSON.parse(localStorage.getItem("others-list")) != null)
    othersList.innerHTML = JSON.parse(localStorage.getItem("others-list"));
    SumExpends()
    chartUpdate()
};

// butony nawigacji
const homeBtn = document.querySelector('.nav-home')
const rentBtn = document.querySelector('.nav-rent')
const clothesBtn = document.querySelector('.nav-clothes')
const healthBtn = document.querySelector('.nav-health')
const relaxBtn = document.querySelector('.nav-relax')
const transportBtn = document.querySelector('.nav-transport')
const foodBtn = document.querySelector('.nav-food')
const othersBtn = document.querySelector('.nav-others')
const allBtn = document.querySelector('.nav-all')
//sekcje
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



const checkInputLabels = () => {
    let newExpenditure = document.createElement('li')
    popup.classList.remove('show-popup')
    if (rentInp.checked) {
        newExpenditure.innerHTML = `<p>${textInp.value}</p> <div class="li__rest"><span class="rent-amount">${numberInp.value}</span><button class="delete"><i class="far fa-trash-alt"></i></button></li>`
        rentList.appendChild(newExpenditure)
        hideSection()
        rentSection.classList.add('show-section')
        if(localStorage.getItem('rent-list')== null){
            localStorage.setItem('rent-list', JSON.stringify(rentList.innerHTML))
        }else{
            localStorage.setItem('rent-list', JSON.stringify(rentList.innerHTML))
        }

    } else if (clothesInp.checked) {
        newExpenditure.innerHTML = `<p>${textInp.value}</p> <div class="li__rest"><span class="clothes-amount">${numberInp.value}</span><button class="delete"><i class="far fa-trash-alt"></i></button></li>`
        clothesList.appendChild(newExpenditure)
        hideSection()
        clothesSection.classList.add('show-section')
        if(localStorage.getItem('clothes-list')== null){
            localStorage.setItem('clothes-list', JSON.stringify(clothesList.innerHTML))
        }else{
            localStorage.setItem('clothes-list', JSON.stringify(clothesList.innerHTML))
        }
    } else if (healthInp.checked) {
        newExpenditure.innerHTML = `<p>${textInp.value}</p> <div class="li__rest"><span class="health-amount">${numberInp.value}</span><button class="delete"><i class="far fa-trash-alt"></i></button></li>`
        healthList.appendChild(newExpenditure)
        hideSection()
        healthSection.classList.add('show-section')
        if(localStorage.getItem('health-list')== null){
            localStorage.setItem('health-list', JSON.stringify(healthList.innerHTML))
        }else{
            localStorage.setItem('health-list', JSON.stringify(healthList.innerHTML))
        }
    } else if (relaxInp.checked) {
        newExpenditure.innerHTML = `<p>${textInp.value}</p> <div class="li__rest"><span class="relax-amount">${numberInp.value}</span><button class="delete"><i class="far fa-trash-alt"></i></button></li>`
        relaxList.appendChild(newExpenditure)
        hideSection()
        relaxSection.classList.add('show-section')
        if(localStorage.getItem('relax-list')== null){
            localStorage.setItem('relax-list', JSON.stringify(relaxList.innerHTML))
        }else{
            localStorage.setItem('relax-list', JSON.stringify(relaxList.innerHTML))
        }
    } else if (transportInp.checked) {
        newExpenditure.innerHTML = `<p>${textInp.value}</p> <div class="li__rest"><span class="transport-amount">${numberInp.value}</span><button class="delete"><i class="far fa-trash-alt"></i></button></li>`
        transportList.appendChild(newExpenditure)
        hideSection()
        transportSection.classList.add('show-section')
        if(localStorage.getItem('transport-list')== null){
            localStorage.setItem('transport-list', JSON.stringify(transportList.innerHTML))
        }else{
            localStorage.setItem('transport-list', JSON.stringify(transportList.innerHTML))
        }
    } else if (foodInp.checked) {
        newExpenditure.innerHTML = `<p>${textInp.value}</p> <div class="li__rest"><span class="food-amount">${numberInp.value}</span><button class="delete"><i class="far fa-trash-alt"></i></button></li>`
        foodList.appendChild(newExpenditure)
        hideSection()
        foodSection.classList.add('show-section')
        if(localStorage.getItem('food-list')== null){
            localStorage.setItem('food-list', JSON.stringify(foodList.innerHTML))
        }else{
            localStorage.setItem('food-list', JSON.stringify(foodList.innerHTML))
        }
    } else if (othersInp.checked) {
        newExpenditure.innerHTML = `<p>${textInp.value}</p> <div class="li__rest"><span class="others-amount">${numberInp.value}</span><button class="delete"><i class="far fa-trash-alt"></i></button></li>`
        othersList.appendChild(newExpenditure)
        hideSection()
        othersSection.classList.add('show-section')
        if(localStorage.getItem('others-list')== null){
            localStorage.setItem('others-list', JSON.stringify(othersList.innerHTML))
        }else{
            localStorage.setItem('others-list', JSON.stringify(othersList.innerHTML))
        }
    }
}


const clearInputs = () => {
    const inputs = popup.querySelectorAll('input')
    inputs.forEach(e => {
        e.value = '';
        e.checked = false
    })
}





const checkInputs = () => {
    if (textInp.value !== '' && numberInp.value !== '') {
        checkInputLabels()

    }
    if (textInp.value === '') {
        textInp.style.border = 'red 1px solid'
        textInp.placeholder = 'Wprowadź wydatek...'
    } else {
        textInp.style.border = 'royalblue 1px solid'

    }
    if (numberInp.value === '') {
        numberInp.style.border = 'red 1px solid'
        numberInp.placeholder = 'wprowadź kwotę w zł'
    } else if (numberInp.value <= 0) {
        numberInp.value = ''
        numberInp.placeholder = 'wprowadź liczbę dodatnią'
        numberInp.style.border = 'red 1px solid'
    } else {
        numberInp.style.border = 'royalblue 1px solid'

    }
}

const test = () => {
    rentInp.checked || clothesInp.checked || healthInp.checked || relaxInp.checked || transportInp.checked || foodInp.checked || othersInp.checked ? popupError.classList.remove('visable') : popupError.classList.add('visable')
}


let allAmountList = document.querySelectorAll('.all-amount')
console.log(allAmountList)
//wszystkie ceny wydatków w kategorii
let amountOfRent = document.getElementsByClassName('rent-amount')
let amountOfClothes = document.getElementsByClassName('clothes-amount')
let amountOfHealth = document.getElementsByClassName('health-amount')
let amountOfRelax = document.getElementsByClassName('relax-amount')
let amountOfTransport = document.getElementsByClassName('transport-amount')
let amountOfFood = document.getElementsByClassName('food-amount')
let amountOfOthers = document.getElementsByClassName('others-amount')


//paragraf od wyświetlania wszystkich wydatków w kategorii
let pRent = document.querySelector('.all-amount__rent')
let pClothes = document.querySelector('.all-amount__clothes')
let pHealth = document.querySelector('.all-amount__health')
let pRelax = document.querySelector('.all-amount__relax')
let pTransport = document.querySelector('.all-amount__transport')
let pFood = document.querySelector('.all-amount__food')
let pOthers = document.querySelector('.all-amount__others')
let pAll = document.querySelector('.all-amount__all')


let AllRentValue = document.getElementById('all__rent')
let AllClothesValue = document.getElementById('all__clothes')
let AllHealthValue = document.getElementById('all__health')
let AllRelaxValue = document.getElementById('all__relax')
let AllTransportValue = document.getElementById('all__transport')
let AllFoodValue = document.getElementById('all__food')
let AllOthersValue = document.getElementById('all__others')

let chartArr =[]
//Sumowanie wydatków w kategoriii
let changeToNumber = (x, y, z) => {
    let sum = 0;
    let allSum = 0;
    let arr = [0]
    for (const element of x) {
        let elInner = element.innerText *1
        arr.push(elInner)
    }
    for (let index = 0; index < arr.length; index++) {
        const el = arr[index];
        sum +=el
        y.innerText = `${sum} zł`
        z.innerText = sum
    }
    chartArr.push(z.innerText*=1)


    for (let i = 0; i < chartArr.length; i++) {
        const e= chartArr[i];
        allSum += e
    }
    pAll.innerText = allSum
}




//używanie funkci do sumowania wydatków
const SumExpends = () => {
    changeToNumber(amountOfRent, pRent, AllRentValue)
    changeToNumber(amountOfClothes, pClothes, AllClothesValue)
    changeToNumber(amountOfHealth, pHealth, AllHealthValue)
    changeToNumber(amountOfRelax, pRelax, AllRelaxValue)
    changeToNumber(amountOfTransport, pTransport, AllTransportValue)
    changeToNumber(amountOfFood, pFood, AllFoodValue)
    changeToNumber(amountOfOthers, pOthers, AllOthersValue)
}
console.log(localStorage.getItem('all-amountlist'))
function chartUpdate (){
    newData = chartArr
    chart.data.datasets[0].data = chartArr

    chart.update();
} 



const hideSection = () => {
    allSections.forEach((e) => {
        e.classList.remove('show-section')
    })
}
const addNew = () => {
    checkInputs()
    test()
    SumExpends()
}

homeBtn.addEventListener('click', () => {
    hideSection()
    homeSection.classList.add('show-section')
})
rentBtn.addEventListener('click', () => {
    hideSection()
    rentSection.classList.add('show-section')
})
clothesBtn.addEventListener('click', () => {
    hideSection()
    clothesSection.classList.add('show-section')
})
healthBtn.addEventListener('click', () => {
    hideSection()
    healthSection.classList.add('show-section')
})
relaxBtn.addEventListener('click', () => {
    hideSection()
    relaxSection.classList.add('show-section')
})
transportBtn.addEventListener('click', () => {
    hideSection()
    transportSection.classList.add('show-section')
})
foodBtn.addEventListener('click', () => {
    hideSection()
    foodSection.classList.add('show-section')
})
othersBtn.addEventListener('click', () => {
    hideSection()
    othersSection.classList.add('show-section')
})
allBtn.addEventListener('click', () => {
    hideSection()
    allSection.classList.add('show-section')
})


haburger.addEventListener('click', () => {
    nav.classList.add('show-nav')
    haburger.style.display = 'none'
    closeHamburger.style.display = 'block'
})
closeHamburger.addEventListener('click', () => {
    nav.classList.remove('show-nav')
    haburger.style.display = 'block'
    closeHamburger.style.display = 'none'
})

add.addEventListener('click', () => {
    popup.classList.toggle('show-popup')
    clearInputs()
})

closeBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup')
})

addBtn.addEventListener('click', ()=>{
    chartArr = []
    test()
    addNew()
    chartUpdate()
})

window.addEventListener('click', (e) => {
    if (e.target.closest('button').classList.contains('delete')) {
        e.target.closest('li').remove()
        chartArr =[]
        SumExpends()
        chartUpdate()
        localStorage.setItem('rent-list', JSON.stringify(rentList.innerHTML))
        localStorage.setItem('clothes-list', JSON.stringify(clothesList.innerHTML))
        localStorage.setItem('health-list', JSON.stringify(healthList.innerHTML))
        localStorage.setItem('relax-list', JSON.stringify(relaxList.innerHTML))
        localStorage.setItem('transport-list', JSON.stringify(transportList.innerHTML))
        localStorage.setItem('food-list', JSON.stringify(foodList.innerHTML))
        localStorage.setItem('others-list', JSON.stringify(othersList.innerHTML))
    }
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
                '#ABABB0'
            ],

            borderColor: '#001242',
            data: [0, 0, 0, 0, 0, 0, 0]
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage: 50,
        legend: {
            display: false,
            fullWidth: false,

        }
    }

});