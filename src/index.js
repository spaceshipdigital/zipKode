'strict';
const $ = require('jquery');
require('jquery-ui/ui/widgets/tooltip');
window.jQuery = $;
window.$ = $;

import './scss/main.scss';
import './js/assets';


// import 'lazyload';
import QBox from './js/modules/class-qbox';
import animateLogos from './js/modules/animate-logos';
import parcelsTable from './js/modules/parcels-table';


(function () {
    window.addEventListener('DOMContentLoaded', (event) => {
        animateLogos();
        parcelsTable();

        // Init multistep forms
        const qboxes = document.querySelectorAll('.qbox');
        qboxes.forEach(el => new QBox(el));

        const newParcelAddRow = document.querySelectorAll('.qbox .action-add-item');
        newParcelAddRow.forEach(el => {
            el.addEventListener('click', e => {
                console.log('add row');
            });
        });

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

        // We have to use jQuery since bootstrap use it
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

})();
