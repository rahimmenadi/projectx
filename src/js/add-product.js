(function ($) {
    'use strict';

    /*[ Select 2 Config ]
        ===========================================================*/

    try {
        var selectSimple = $('.js-select-simple');

        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    } catch (err) {
        console.log(err);
    }


})(jQuery);


// upload photo
let fileInput = document.getElementById("file-inputP");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener("change", () => {
    fileList.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for (i of fileInput.files) {
        let reader = new FileReader();
        let listItem = document.createElement("li");
        let fileName = i.name;
        let fileSize = (i.size / 1024).toFixed(1);
        listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
        if (fileSize >= 1024) {
            fileSize = (fileSize / 1024).toFixed(1);
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
        }
        fileList.appendChild(listItem);
        tabimage.push(fileInput.value);
    }
});


// variables

let title = document.getElementById('title');
let image = document.getElementById('file-inputP');
let catégorie = document.getElementById('catégorie');
let subcatégorie = document.getElementById('sub-catégorie');
let price = document.getElementById('price');
let pricered = document.getElementById('pricered');
let color = document.getElementById('color');
let quantité = document.getElementById('quantité');
let taille = document.getElementById('taille');
let cash = document.getElementById('cash');
let amain = document.getElementById('amain');
let baridi = document.getElementById('baridi');
let description = document.getElementById('description');
let submit = document.getElementById('submit');
let cancel = document.getElementById('cancel');
let chekbox = document.querySelectorAll('input[type="checkbox"]');
let tabimage = [];
let tabchek = [chekbox];
let livraison = tabchek;
//récupurer données 

let datatab = [];

submit.onclick = function () {


    if (cash.checked) {
        tabchek = [cash.value];
    }
    if (amain.checked) {
        tabchek = [amain.value];
    }
    if (baridi.checked) {
        tabchek = [baridi.value];
    }
    if (cash.checked && amain.checked) {
        tabchek = [cash.value, amain.value];
    }
    if (amain.checked && baridi.checked) {
        tabchek = [amain.value, baridi.value];
    }
    if (cash.checked && baridi.checked) {
        tabchek = [cash.value, baridi.value];
    }
    if (amain.checked && cash.checked && baridi.checked) {
        tabchek = [cash.value, amain.value, baridi.value];
    }
    else if (amain.checked == false && cash.checked == false && baridi.checked == false) {
        tabchek = ["pas de livraison"];
    }

    let prod = {
        title: title.value,
        tabimage,
        catégorie: catégorie.value,
        subcatégorie: subcatégorie.value,
        price: price.value,
        livraison: tabchek,
        pricered: pricered.value,
        color: color.value,
        quantité: quantité.value,
        taille: taille.value,
        description: description.value
    }
    console.log(prod);
}






// for (var checkbox of livraison) {
//     checkbox.addEventListener('click', function (){
//         if(this.checked == true) {
//             tabchek.push(this.value);
//         }
//     }
// )
// }