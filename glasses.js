const $ = document;

let placeTextDescBtn = $.querySelector('#place-text-desc-btn');
let placeVersaceGlasses = $.querySelector('#place-versace-glasses');
let btnBuyGlasses = $.querySelector('#btn-buyGlasses');

window.addEventListener('load', () => {

    setTimeout(() => {
        placeTextDescBtn.style.marginTop = '0';
    }, 2000);

});

let versaceGlassesArray = [
    { img: 'images/glassesVersace1.avif', price: '230$' },
    { img: 'images/glassesVersace2.avif', price: '910$' },
    { img: 'images/glassesVersace3.avif', price: '460$' },
    { img: 'images/glassesVersace4.avif', price: '632$' },
    { img: 'images/glassesVersace5.avif', price: '110$' },
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
                                                                <p id="glasses-versace-price"> ${item.price} </p>
                                                                <button id="btn-add-to-basket-versace"> add to basket </button>
                                                           </div> `);

});