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

bagIcon.addEventListener('click', () => {
    headerBag.style.left = '3rem';
});

closeIconHeaderBag.addEventListener('click', () => {
    headerBag.style.left = '-24rem';
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

});

let versaceGlassesArray = [
    { img: 'images/glassesVersace1.avif', price: '230' },
    { img: 'images/glassesVersace2.avif', price: '910' },
    { img: 'images/glassesVersace3.avif', price: '460' },
    { img: 'images/glassesVersace4.avif', price: '632' },
    { img: 'images/glassesVersace5.avif', price: '110' },
]

let diorGlassesArray = [
    { img: 'images/glassesDior1.avif', price: '411' },
    { img: 'images/glassesDior2.avif', price: '110' },
    { img: 'images/glassesDior3.webp', price: '506' },
    { img: 'images/glassesDior4.avif', price: '890' },
    { img: 'images/glassesDior5.webp', price: '225' },
]

let pradaGlassesArray = [
    { img: 'images/glassesPrada1.jpg', price: '349' },
    { img: 'images/glassesPrada2.jpg', price: '898' },
    { img: 'images/glassesPrada3.webp', price: '315' },
    { img: 'images/glassesPrada4.avif', price: '670' },
    { img: 'images/glassesPrada5.avif', price: '937' },
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
                                                                <button id="btn-add-to-basket-versace"> add to basket </button>
                                                           </div> `);

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
                                                            <button id="btn-add-to-basket-dior"> add to basket </button>
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
                                                            <button id="btn-add-to-basket-prada"> add to basket </button>
                                                        </div>`);

});