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

//linkag

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



//bendida t3 ch3ar w les idées t3 khra tw3eh

const addcolorButton = document.getElementById('add-color');
const colorsContainer = document.getElementById('colors-container');
let colorsData = [];

addcolorButton.addEventListener('click', function () {
    const colorContainers = document.querySelectorAll('.color-container');
    if (colorContainers.length < 9) {
        const newcolorContainer = document.createElement('div');
        newcolorContainer.classList.add('color-container');

        const colorNumber = colorContainers.length / 2 + 1;
        const colorNumberLabel = document.createElement('h3');
        colorNumberLabel.textContent = 'color ' + colorNumber;
        newcolorContainer.appendChild(colorNumberLabel);
        const colorNameLabel = document.createElement('label');
        colorNameLabel.textContent = "Nom du couleur:" + colorNumber;
        const colorNameInput = document.createElement('input');
        colorNameInput.type = 'text';
        colorNameInput.name = 'color-name';
        colorNameInput.classList.add('color-name');
        colorNameInput.required = true;

        const colorLabel = document.createElement('label');
        colorLabel.textContent = "Couleurs:";
        const colorContainer = document.createElement('div');
        colorContainer.classList.add('color-container');
        const newColorInput = document.createElement('div');
        newColorInput.classList.add('color-input');
        const newColorField = document.createElement('input');
        newColorField.type = 'color';
        newColorField.name = 'couleur';
        newColorField.classList.add('color');
        newColorField.required = true;
        newColorInput.appendChild(newColorField);
        colorContainer.appendChild(newColorInput);
        const addColorButton = document.createElement('button');
        addColorButton.classList.add('add-color');
        addColorButton.textContent = '+';

        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = "Taille:";
        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = "Quantité:";
        const sizeQuantityContainer = document.createElement('div');
        sizeQuantityContainer.classList.add('size-quantity-container');
        const newSizeQuantityInput = document.createElement('div');
        newSizeQuantityInput.classList.add('size-quantity-input');
        const newSizeInput = document.createElement('input');
        newSizeInput.type = 'text';
        newSizeInput.name = 'size';
        newSizeInput.classList.add('size-input');
        newSizeInput.required = true;
        const newQuantityInput = document.createElement('input');
        newQuantityInput.type = 'number';
        newQuantityInput.name = 'quantity';
        newQuantityInput.classList.add('quantity-input');
        newQuantityInput.required = true;
        newSizeQuantityInput.appendChild(newSizeInput);
        newSizeQuantityInput.appendChild(newQuantityInput);
        sizeQuantityContainer.appendChild(newSizeQuantityInput);
        const addSizeQuantityButton = document.createElement('button');
        addSizeQuantityButton.classList.add('add-size-quantity');
        addSizeQuantityButton.textContent = '+';

        newcolorContainer.appendChild(colorNameLabel);
        newcolorContainer.appendChild(colorNameInput);
        newcolorContainer.appendChild(colorLabel);
        newcolorContainer.appendChild(colorContainer);
        newcolorContainer.appendChild(addColorButton);
        newcolorContainer.appendChild(sizeLabel);
        newcolorContainer.appendChild(quantityLabel);
        newcolorContainer.appendChild(sizeQuantityContainer);
        newcolorContainer.appendChild(addSizeQuantityButton);

        colorsContainer.appendChild(newcolorContainer);

        if (colorContainers.length === 7) {
            addcolorButton.style.display = 'none';
        }
    }
});

colorsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-color')) {
        const colorContainer = event.target.parentNode.querySelector('.color-container');
        const colorInputs = colorContainer.querySelectorAll('.color-input');
        if (colorInputs.length < 7) {
            const newColorInput = document.createElement('div');
            newColorInput.classList.add('color-input');

            const newColorField = document.createElement('input');
            newColorField.type = 'color';
            newColorField.name = 'couleur';
            newColorField.classList.add('color');
            newColorField.required = true;
            newColorInput.appendChild(newColorField);
            colorContainer.appendChild(newColorInput);

            if (colorInputs.length === 4) {
                event.target.style.display = 'none';
            }
        }
    }

    if (event.target.classList.contains('add-size-quantity')) {
        const sizeQuantityContainer = event.target.parentNode.querySelector('.size-quantity-container');
        const sizeQuantityInputs = sizeQuantityContainer.querySelectorAll('.size-quantity-input');
        if (sizeQuantityInputs.length < 8) {
            const newSizeQuantityInput = document.createElement('div');
            newSizeQuantityInput.classList.add('size-quantity-input');
            const newSizeInput = document.createElement('input');
            newSizeInput.type = 'text';
            newSizeInput.name = 'size';
            newSizeInput.classList.add('size-input');
            newSizeInput.required = true;
            const newQuantityInput = document.createElement('input');
            newQuantityInput.type = 'number';
            newQuantityInput.name = 'quantity';
            newQuantityInput.classList.add('quantity-input');
            newQuantityInput.required = true;
            newSizeQuantityInput.appendChild(newSizeInput);
            newSizeQuantityInput.appendChild(newQuantityInput);
            sizeQuantityContainer.appendChild(newSizeQuantityInput);

            if (sizeQuantityInputs.length === 7) {
                event.target.style.display = 'none';
            }
        }
    }
});

submitButton.addEventListener('click', function () {
    const colorContainers = document.querySelectorAll('.color-container');
    colorsData = [];

    colorContainers.forEach(function (container) {
        const colorName = container.querySelector('.color-name').value;
        const colorInputs = container.querySelectorAll('.color-input .color');
        const sizeQuantityInputs = container.querySelectorAll('.size-quantity-input');

        const colors = Array.from(colorInputs).map(function (colorInput) {
            return colorInput.value;
        });

        const sizeQuantityData = Array.from(sizeQuantityInputs).map(function (sizeQuantityInput) {
            const sizeInput = sizeQuantityInput.querySelector('.size-input');
            const quantityInput = sizeQuantityInput.querySelector('.quantity-input');
            return {
                size: sizeInput.value,
                quantity: quantityInput.value
            };
        });

        const colorData = {
            name: colorName,
            colors: colors,
            sizeQuantity: sizeQuantityData
        };

        colorsData.push(colorData);
    });

    // Effectuer la requête POST avec Axios
    axios.post('URL_DE_VOTRE_ENDPOINT', colorsData)
        .then(function (response) {
            console.log('Données envoyées avec succès');
            console.log(response.data);
        })
        .catch(function (error) {
            console.error('Erreur lors de l\'envoi des données');
            console.error(error);
        });
});



// for (var checkbox of livraison) {
//     checkbox.addEventListener('click', function (){
//         if(this.checked == true) {
//             tabchek.push(this.value);
//         }
//     }
// )
// }