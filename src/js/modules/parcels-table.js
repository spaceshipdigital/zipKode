function parcelsTable() {
    tableDefaultInit();
    const showAll = document.querySelectorAll('.parcel-detail-wrap .show-all');
    showAll.forEach(el => {
        el.addEventListener('click', e => {
            const span = el.querySelector('span');
            const parent = el.closest('.grouped-product');
            if (el.classList.contains('unwrap')) {
                el.classList.remove('unwrap');
                span.innerText = 'Show all parcels';
                toggleSiblings(parent, 'none');
            }
            else {
                el.classList.add('unwrap');
                span.innerText = 'Hide all parcels';
                const value = window.innerWidth < 768 ? 'block' : 'table-row';
                toggleSiblings(parent, value);
            }
        });
    });
}

function toggleSiblings(parent, value) {
    let child = parent.nextElementSibling;
    const color = getComputedStyle(parent).backgroundColor;
    while (child.classList.contains('child-product')) {
        child.style.display = value;
        child.style.backgroundColor = color;
        child = parent.nextElementSibling;
        parent = child;
    }
}

function tableDefaultInit() {
    const tables = document.querySelectorAll('.table-default');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr:not(.child-product)');
        rows.forEach((row, i) => {
            row.style.backgroundColor = i % 2 ? '#fff' : '#e5e5e5';
        });
    });
}


export default parcelsTable;