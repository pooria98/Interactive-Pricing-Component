const PageCountElement = document.querySelector('.page-count');
const priceElement = document.querySelector('.price');
const slider = document.getElementById('slider');
const monthlyElement = document.querySelector('.monthly');
const yearlyElement = document.querySelector('.yearly');
const checkbox = document.getElementById('checkbox');

monthlyElement.style.color = 'hsl(227, 35%, 25%)';
yearlyElement.style.color = 'hsl(225, 20%, 60%)';

function calculatePrice() {

    let pageCount = parseFloat(slider.value);
    let price = 8;

    if (pageCount === 1000000) {
        PageCountElement.innerText = (pageCount / 1000000).toFixed(0) + "M";
    } else {
        PageCountElement.innerText = (pageCount / 1000).toFixed(0) + "K";
    }

    if (!checkbox.checked) {
        if (pageCount >= 50000) {
            price = 12;
        }
        if (pageCount >= 100000) {
            price = 16;
        }
        if (pageCount >= 500000) {
            price = 24;
        }
        if (pageCount >= 1000000) {
            price = 36;
        }
    } else {
        price = 8 * 0.75;
        if (pageCount >= 50000) {
            price = 12 * 0.75;
        }
        if (pageCount >= 100000) {
            price = 16 * 0.75;
        }
        if (pageCount >= 500000) {
            price = 24 * 0.75;
        }
        if (pageCount >= 1000000) {
            price = 36 * 0.75;
        }
    }

    priceElement.innerText = "$" + price.toFixed(2);
}

slider.addEventListener("input", () => {
    calculatePrice();
});

checkbox.addEventListener("input", () => {
    calculatePrice();
    if (checkbox.checked) {
        monthlyElement.style.color = 'hsl(225, 20%, 60%)';
        yearlyElement.style.color = 'hsl(227, 35%, 25%)';
    } else {
        monthlyElement.style.color = 'hsl(227, 35%, 25%)';
        yearlyElement.style.color = 'hsl(225, 20%, 60%)';
    }
});