let placeUserInformation = document.querySelector('#place-userInformations');
let modal = document.querySelector('#modal');

getInformation();
function getInformation() {

    fetch('https://user-information-2415b-default-rtdb.firebaseio.com/userInformation.json') // api firebase
        .then(res => res.json())
        .then(res => {
            let userData = Object.entries(res);

            placeUserInformation.innerHTML = '';
            userData.forEach((item) => {
                placeUserInformation.insertAdjacentHTML('beforeend', `                  <div id="parent-userInformation">
                                                                                            <div id="userInformation">
                                                                                                <div id="header-name-email-information">
                                                                                                    <h2 id="user-name"> ${item[1].userName} </h2>
                                                                                                    <h4 id="user-email"> ${item[1].userEmail} </h4>
                                                                                                </div>
                                                                                                <p id="user-description"> ${item[1].userDescription} </p>
                                                                                            </div>
                                                                                            <ion-icon onclick="removeInformation('${item[0]}')" onmouseenter="styleLeftForModal1()" onmouseleave="styleLeftForModal2()" id="removeIcon" name="trash-outline"></ion-icon>
                                                                                        </div>`);
            });

        })
        .catch(err => {
            console.log('Error for Get Information !');
            placeUserInformation.innerHTML = '';
        });

};

function styleLeftForModal1() {
    modal.style.left = '1rem';
}

function styleLeftForModal2() {
    modal.style.left = '-25.5rem';
}

function removeInformation(id) {
    fetch(`https://user-information-2415b-default-rtdb.firebaseio.com/userInformation/${id}.json`, {
        method: 'DELETE',
    }).then(() => {
        console.log('delete shod :)')
        getInformation();
        styleLeftForModal2();
    })
        .catch(err => console.log(err));
}