'strict';
import 'bootstrap';

import './scss/main.scss';
import './js/assets';

// import 'lazyload';
// import 'slick-carousel'
// import 'smartwizard';
// import 'jquery-validation';

// (function () {
//     $(function () {
//     });
// })();

window.addEventListener('DOMContentLoaded', (event) => {
    animateLogos();

    const actionCopyAddress = document.querySelectorAll('.action-copy-address');
    actionCopyAddress.forEach(el => {
        el.addEventListener('click', (e) => {
            console.log('copied');
        })
    })

    const actionEditParcel = document.querySelectorAll('td.customs-value');
    actionEditParcel.forEach(td => {
        td.addEventListener('click', e => {
            if (e.target && e.target.matches('.action-edit-parcel')) {
                td.querySelector('.result').style.display = 'none';
                td.querySelector('.edit').style.display = 'block';
            }
        });
    });
});

function animateLogos() {
    const heroLogos = document.querySelectorAll('.hero-logos');
    const delay = 3000;
    let i = 0

    if (heroLogos.length) {
        const items = heroLogos[0].querySelectorAll('li');

        activateCurrentElement(items);
        setInterval(() => {
            // reset logos
            items.forEach(item => item.querySelector('.logo-3d').classList.remove('active'));
            activateCurrentElement(items);
        }, delay);
    }

    function activateCurrentElement(items) {
        let indx = i % items.length;

        // animate only visible
        const style = window.getComputedStyle(items[indx]);
        if ((style.display === 'none') || (style.visibility === 'hidden')) {
            i++;
            indx = i % items.length;
        }

        // rotate element
        items[indx].querySelector('.logo-3d').classList.add('active');
        i++;
    }
}