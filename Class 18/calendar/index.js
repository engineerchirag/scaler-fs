const prevButtonRef = document.querySelector('.controls .prev');
const nextButtonRef = document.querySelector('.controls .next');
const monthSelectRef  = document.querySelector('.controls .month');
const yearSelectRef = document.querySelector('.controls .year');
const datesRef = document.querySelector('.dates');
const todayButtonRef = document.querySelector('.today-section button');

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];


const todaysDate = new Date();

function generateMonthOptions() {
    const monthsFragment  = document.createDocumentFragment();
    MONTHS.forEach((month, idx) => {
        const createOption = document.createElement('option');
        createOption.value = idx;
        createOption.innerText = month;
        createOption.selected = todaysDate.getMonth() === idx;
        monthsFragment.appendChild(createOption);
    });
    console.log(monthsFragment);
    monthSelectRef.appendChild(monthsFragment);
}

function generateYearOptions() {
    const currentYear = todaysDate.getFullYear();
    const yearsFragment  = document.createDocumentFragment();
    for(let i = currentYear - 10; i <= currentYear + 10; i++) {
        const createOption = document.createElement('option');
        createOption.value = i;
        createOption.innerText = i;
        createOption.selected = todaysDate.getFullYear() === i;
        yearsFragment.appendChild(createOption);
    }
    yearSelectRef.appendChild(yearsFragment);
}

function generateDays(month, year) {
    const startDay = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    datesRef.innerHTML = '';
    const datesFragment = document.createDocumentFragment();

    // empty spans
    for(let i = 0; i < startDay; i++) {
        const spanRef = document.createElement('span');
        datesFragment.appendChild(spanRef);
    }

    for(let j = 1; j <= totalDaysInMonth; j++) {
        const spanRef = document.createElement('span');
        spanRef.classList.add('date');
        spanRef.setAttribute('data-id', j);
        spanRef.innerText = j;
        datesFragment.appendChild(spanRef);
    }

    datesRef.appendChild(datesFragment);
}

generateMonthOptions();
generateYearOptions();
generateDays(6, 2023);

monthSelectRef.addEventListener('change', function(ev) {
    const selectedMonth = ev.target.value;
    const selectedYear = yearSelectRef.value;
    generateDays(selectedMonth, selectedYear);
});

yearSelectRef.addEventListener('change', function(ev) {
    const selectedYear = ev.target.value;
    const selectedMonth = monthSelectRef.value;
    generateDays(selectedMonth, selectedYear);
});

nextButtonRef.addEventListener('click', function(ev) {
    let selectedMonth = +monthSelectRef.value;
    let selectedYear = +yearSelectRef.value;
    if (selectedMonth === 11) {
        yearSelectRef.value = selectedYear + 1;
        monthSelectRef.value = 0;
    } else {
        monthSelectRef.value = selectedMonth + 1;
    }
    generateDays(monthSelectRef.value, yearSelectRef.value);
})

prevButtonRef.addEventListener('click', function(ev) {
    let selectedMonth = +monthSelectRef.value;
    let selectedYear = +yearSelectRef.value;
    if (selectedMonth === 0) {
        yearSelectRef.value = selectedYear - 1;
        monthSelectRef.value = 11;
    } else {
        monthSelectRef.value = selectedMonth - 1;
    }
    generateDays(monthSelectRef.value, yearSelectRef.value);
});


todayButtonRef.addEventListener('click', function() {
    yearSelectRef.value = todaysDate.getFullYear();
    monthSelectRef.value = todaysDate.getMonth();
    generateDays(monthSelectRef.value, yearSelectRef.value);
});

