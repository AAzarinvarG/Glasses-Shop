const $ = document;

let placeTextDescBtn = $.querySelector('#place-text-desc-btn');
let placeVersaceGlasses = $.querySelector('#place-versace-glasses');
let placeDiorGlasses = $.querySelector('#place-dior-glasses');
let placePradaGlasses = $.querySelector('#place-prada-glasses');
let btnBuyGlasses = $.querySelector('#btn-buyGlasses');
let btnScrollToTop = $.querySelector('#btn-scrollToTop');
let headerPlaceBagIconPersonIcon = $.querySelector('#header-place-bagIcon-personIcon');
let bagIcon = $.querySelector('#bagIcon');
let headerBag = $.querySelector('#header-bag');
let closeIconHeaderBag = $.querySelector('#close-header-bag');
let placeGlassesInBag = $.querySelector('#place-glasses-in-bag');
let container = $.querySelector('#container');
let footer = $.querySelector('footer');
let totalPriceElemInBag = $.querySelector('#total-price-in-bag');
let btnClearAllInBag = $.querySelector('#clearAll-btn-in-bag');
let lengthGlassesInBag = $.querySelector('#length-glasses-in-bag');
let placeBasicDescription = $.querySelector('#place-basic-description');
let imgModelGirl = $.querySelector('#img-model-girl');
let iconPrevModelImg = $.querySelector('#icon-prev-model-img');
let iconNextModelImg = $.querySelector('#icon-next-model-img');

bagIcon.addEventListener('click', () => {
    headerBag.style.left = '3rem';

    if (window.innerWidth < 480) {
        headerBag.style.left = '1rem';
    } else {
        headerBag.style.left = '3rem';
    }

    container.style.display = 'none';
    footer.style.display = 'none';

    placeBasicDescription.style.display = 'none';

});

closeIconHeaderBag.addEventListener('click', () => {
    headerBag.style.left = '-24rem';

    container.style.display = 'block';
    footer.style.display = 'flex';

    placeBasicDescription.style.display = 'block';
});

document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 1000) {
        btnScrollToTop.style.right = '10px';
    } else {
        btnScrollToTop.style.right = '-4.8rem';
    }

    if (document.documentElement.scrollTop > 55) {
        headerPlaceBagIconPersonIcon.style.opacity = '0';
    } else {
        headerPlaceBagIconPersonIcon.style.opacity = '1';
    }
});

btnScrollToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

btnBuyGlasses.addEventListener('click', () => {
    window.scrollTo(0, 965);
});

window.addEventListener('load', () => {

    setTimeout(() => {
        placeTextDescBtn.style.marginTop = '0';
    }, 2000);

    getLocalstorage();

});

let versaceGlassesArray = [
    { img: 'images/glassesVersace1.avif', price: 230, id: 1, name: 'Versace Glasses', number: 1 },
    { img: 'images/glassesVersace2.avif', price: 910, id: 2, name: 'Versace Glasses', number: 1 },
    { img: 'images/glassesVersace3.avif', price: 460, id: 3, name: 'Versace Glasses', number: 1 },
    { img: 'images/glassesVersace4.avif', price: 632, id: 4, name: 'Versace Glasses', number: 1 },
    { img: 'images/glassesVersace5.avif', price: 110, id: 5, name: 'Versace Glasses', number: 1 },
]

let diorGlassesArray = [
    { img: 'images/glassesDior1.avif', price: 411, id: 6, name: 'Dior Glasses', number: 1 },
    { img: 'images/glassesDior2.avif', price: 110, id: 7, name: 'Dior Glasses', number: 1 },
    { img: 'images/glassesDior3.webp', price: 506, id: 8, name: 'Dior Glasses', number: 1 },
    { img: 'images/glassesDior4.avif', price: 890, id: 9, name: 'Dior Glasses', number: 1 },
    { img: 'images/glassesDior5.webp', price: 225, id: 10, name: 'Dior Glasses', number: 1 },
]

let pradaGlassesArray = [
    { img: 'images/glassesPrada1.jpg', price: 349, id: 11, name: 'Prada Glasses', number: 1 },
    { img: 'images/glassesPrada2.jpg', price: 898, id: 12, name: 'Prada Glasses', number: 1 },
    { img: 'images/glassesPrada3.webp', price: 315, id: 13, name: 'Prada Glasses', number: 1 },
    { img: 'images/glassesPrada4.avif', price: 670, id: 14, name: 'Prada Glasses', number: 1 },
    { img: 'images/glassesPrada5.avif', price: 937, id: 15, name: 'Prada Glasses', number: 1 },
]

versaceGlassesArray.forEach((item) => {

    placeVersaceGlasses.insertAdjacentHTML('beforeend', `  <div id="glasses-versace">
                                                                <div id="header-image-glasses-versace">
                                                                    <img id="glasses-versace-img" src="${item.img}" alt="">
                                                                </div>
                                                                <p id="description-glasses-versace">
                                                                    Beautiful colored Versace glasses with excellent quality
                                                                    You can buy it from the button below
                                                                </p>
                                                                <p id="glasses-versace-price"> $${item.price} </p>
                                                                <button onclick="GlassesaddToBagArray(${item.id}, versaceGlassesArray)" id="btn-add-to-basket-versace"> add to basket </button>
                                                           </div> `);

});

let bagArray = [];

function GlassesaddToBagArray(Id, ArrayName) {
    let findGlasses = ArrayName.find((glasses) => {
        return glasses.id == Id;
    });

    if (!bagArray.includes(findGlasses)) {
        bagArray.push(findGlasses);
    }
    
    setLocalstorage();
    console.log(bagArray);
    addToBag();
    priceCalculation();
}

function priceCalculation() {
    let totalPrice = 0;
    bagArray.forEach((item) => {
        totalPrice += item.price * item.number;
    });

    totalPriceElemInBag.innerHTML = `$${totalPrice}`;
}

function addToBag() {
    lengthGlassesInBag.innerHTML = bagArray.length;
    placeGlassesInBag.innerHTML = '';

    bagArray.forEach((item) => {
        placeGlassesInBag.insertAdjacentHTML('beforeend', ` <div id="glasses-in-bag">
                                                                <div id="header-img-glasses-in-bag">
                                                                    <img src="${item.img}" alt="">
                                                                </div>
                                                                <div id="header-name-input-price-removeIcon-in-bag">
                                                                    <p id="name-glasses-in-bag"> ${item.name} </p>
                                                                    <input id="tes" onchange="change(event.target.value, ${item.id})" type="number" value="${item.number}" min="1" max="3">
                                                                    <ion-icon onclick="removeGlasses(${item.id})" name="trash-outline"></ion-icon>
                                                                    <p id="price-in-glasses-in-bag"> $${item.price} </p>
                                                                </div>
                                                            </div>`);

    });

}

function change(value, Id) {
    let findGlassesChange = bagArray.find((item) => {
        return item.id == Id;
    });

    findGlassesChange.number = Number(value);
    priceCalculation();
    setLocalstorage();
}

function removeGlasses(Id) {
    let findIndex = bagArray.findIndex((item) => {
        return item.id == Id;
    });

    bagArray.splice(findIndex, 1);
    addToBag();
    priceCalculation();
    setLocalstorage();
}

btnClearAllInBag.addEventListener('click', () => {
    bagArray = [];
    addToBag();
    priceCalculation();
    setLocalstorage();
});

diorGlassesArray.forEach((item) => {

    placeDiorGlasses.insertAdjacentHTML('beforeend', ` <div id="glasses-dior">
                                                            <div id="header-image-dior-versace">
                                                                <img id="glasses-dior-img" src="${item.img}" alt="">
                                                            </div>
                                                            <p id="description-glasses-dior">
                                                                Beautiful colored Versace glasses with excellent quality
                                                                You can buy it from the button below
                                                            </p>
                                                            <p id="glasses-dior-price"> $${item.price} </p>
                                                            <button onclick="GlassesaddToBagArray(${item.id}, diorGlassesArray)" id="btn-add-to-basket-dior"> add to basket </button>
                                                       </div>`);

});

pradaGlassesArray.forEach((item) => {

    placePradaGlasses.insertAdjacentHTML('beforeend', ` <div id="glasses-prada">
                                                            <div id="header-image-prada">
                                                                <img id="glasses-prada-img" src="${item.img}" alt="">
                                                            </div>
                                                            <p id="description-glasses-prada">
                                                                Beautiful colored Versace glasses with excellent quality
                                                                You can buy it from the button below
                                                            </p>
                                                            <p id="glasses-prada-price"> $${item.price} </p>
                                                            <button onclick="GlassesaddToBagArray(${item.id}, pradaGlassesArray)" id="btn-add-to-basket-prada"> add to basket </button>
                                                        </div>`);

});

let imgModelSrc = [
    'modelImg/versaceModel1.avif',
    'modelImg/boyModel.jpg',
    'modelImg/boyModel2.jpg',
    'modelImg/girlModel.jpg',
    'modelImg/pradaModel1.webp',
    'modelImg/pradaModel2.webp',
];
let numberTest = 0;

iconNextModelImg.addEventListener('click', () => {

    if (numberTest == imgModelSrc.length - 1) {
        numberTest = 0;
    } else {
        numberTest++;
    }

    imgModelGirl.style.backgroundImage = `url(${imgModelSrc[numberTest]})`;
});

iconPrevModelImg.addEventListener('click', () => {

    if (numberTest == 0) {
        numberTest = 5;
    } else {
        numberTest--;
    }

    imgModelGirl.style.backgroundImage = `url(${imgModelSrc[numberTest]})`;
});

function getLocalstorage() {
    let getBagArray = JSON.parse(localStorage.getItem('bagArray'));

    if (getBagArray != null) {
        bagArray = getBagArray;
        addToBag();
        priceCalculation();
    } else {
        bagArray = [];
    }

}

function setLocalstorage() {
    localStorage.setItem('bagArray', JSON.stringify(bagArray));
}