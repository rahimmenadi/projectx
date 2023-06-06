// copy link
var copyButton = document.getElementById('copyButton');
var linkInput = document.getElementById('linkInput');


copyButton.addEventListener('click', function () {
    // Get the URL of the current page
    var currentUrl = window.location.href;

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentUrl).then(function () {
        // Write the URL to the input field
        linkInput.value = currentUrl;
        alert('Link copied!');
    }).catch(function (err) {
        console.error('Failed to copy link: ', err);
    });
});


// pop up
var delet = document.getElementById('delet');
var confirmationPopup = document.getElementById('confirmationPopup');
var confirmYes = document.getElementById('confirmYes');
var confirmNo = document.getElementById('confirmNo');

delet.addEventListener('click', function () {
    confirmationPopup.style.display = 'block';
});

confirmYes.addEventListener('click', function () {
    // Code to execute when "Yes" is clicked
    confirmationPopup.style.display = 'none';
});

confirmNo.addEventListener('click', function () {
    // Code to execute when "No" is clicked
    confirmationPopup.style.display = 'none';
});

// variables


let titre = document.getElementById('titre');
let nbavis = document.getElementById('nbavis');
let price = document.getElementById('price');
let mark = document.getElementById('mark');
let reduction = document.getElementById('reduction');
let ancien = document.getElementById('ancien');
let proddispo = document.getElementById('prod-dispo');
let nbstock = document.getElementById('nb-stock');
let nbsales = document.getElementById('nb-sales');
let nbprocess = document.getElementById('nb-in-process');
let nbretour = document.getElementById('nb-retour');
let classement = document.getElementById('classement');
let agence = document.getElementById('agence-a-name');
let typeliv = document.getElementById('typeliv');
let description = document.getElementById('description');
let typegr = document.getElementById('typegr');
let typepr = document.getElementById('typepr');
let poids = document.getElementById('poids');
let barre = document.getElementById('barre');
let moyrev = document.getElementById('moyrev');
let nbreviews = document.getElementById('nb-reviews');
let nbcomment = document.getElementById('nb-comment');


//comment
var comments = [
    { author: "John", content: "Great product!", rating: 5, date: "2023-05-15" },
    { author: "esi", content: "Great product!", rating: 5, date: "2023-05-15" },
    { author: "Mike", content: "Excellent quality!", rating: 3, date: "2023-05-10" },
    { author: "Jane", content: "Awesome service!", rating: 4.5, date: "2023-05-12" },
    { author: "Jane", content: "Awesome service!", rating: 4.5, date: "2023-05-12" },
    { author: "rahil", content: "mliha!", rating: 4.5, date: "2023-05-12" },
    // Ajoutez plus de commentaires au besoin
];

var commentsContainer = document.getElementById('commentsContainer');

// Génération et remplissage des commentaires
for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];

    var commentElement = document.createElement('div');
    commentElement.className = 'comment';

    var authorElement = document.createElement('div');
    authorElement.className = 'author';
    authorElement.textContent = comment.author;

    var contentElement = document.createElement('div');
    contentElement.className = 'content';
    contentElement.textContent = comment.content;

    var ratingElement = document.createElement('div');
    ratingElement.className = 'rating';
    ratingElement.innerHTML = generateStarRating(comment.rating);

    var dateElement = document.createElement('div');
    dateElement.className = 'date';
    dateElement.textContent = 'Date : ' + comment.date;

    commentElement.appendChild(authorElement);
    commentElement.appendChild(contentElement);
    commentElement.appendChild(ratingElement);
    commentElement.appendChild(dateElement);
    commentsContainer.appendChild(commentElement);
}

nbcomment.textContent = comments.length;

function generateStarRating(rating) {
    var starRatingElement = document.createElement('div');
    starRatingElement.className = 'star-rating';

    for (var i = 1; i <= 5; i++) {
        var starInput = document.createElement('input');
        starInput.type = 'radio';
        starInput.name = 'rating';
        starInput.value = i;
        starInput.id = 'star' + i;
        starInput.disabled = true;
        if (i === rating) {
            starInput.checked = true;
        }

        var starLabel = document.createElement('label');
        starLabel.htmlFor = 'star' + i;

        starRatingElement.appendChild(starInput);
        starRatingElement.appendChild(starLabel);
    }

    return starRatingElement.innerHTML;
}


// image scrool
var images = [
    "../../public/frame-image-principale@2x.png",
    "../../public/mask-group@2x.png",
    "../../public/frame-img4@2x.png",
    "../../public/mask-group1@2x.png",
    "../../public/mask-group2@2x.png",
];

var mainImage = document.getElementById('mainImage');
var thumbnailContainer = document.getElementById('thumbnailContainer');

// Afficher l'image principale
mainImage.setAttribute('src', images[0]);

// Générer les miniatures des images
for (var i = 1; i < images.length && i <= 5; i++) {
    var thumbnail = document.createElement('img');
    thumbnail.setAttribute('src', images[i]);
    thumbnail.setAttribute('alt', 'Thumbnail ' + i + 1);

    // Gérer le clic sur la miniature
    thumbnail.addEventListener('click', function () {
        var currentImageSrc = mainImage.getAttribute('src');
        var clickedImageSrc = this.getAttribute('src');
        mainImage.setAttribute('src', clickedImageSrc);
        this.setAttribute('src', currentImageSrc);
    });

    thumbnailContainer.appendChild(thumbnail);
}


//essaie

var newTitle = "";
titre.textContent = newTitle;


//color
// Tableaux des couleurs HTML
var couleursHTML1 = ["#FF0000", "#00FF00", "#0000FF", "#0000FF", "#0000FF"];
var couleursHTML2 = ["#FFFF00", "#FF00FF", "#00FFFF", "#0000FF", "#0000FF"];
var couleursHTML3 = ["#FFA500", "#800080", "#008000", "#0000FF", "#0000FF"];
var couleursHTML4 = ["#FFA500", "#800080", "#008000", "#0000FF", "#0000FF"];
var couleursHTML5 = ["#FFA500", "#800080", "#008000", "#0000FF"];

// Récupérer les lignes des couleurs pour chaque tableau
var couleursRow1 = document.getElementById("couleursRow1");
var couleursRow2 = document.getElementById("couleursRow2");
var couleursRow3 = document.getElementById("couleursRow3");
var couleursRow4 = document.getElementById("couleursRow4");
var couleursRow5 = document.getElementById("couleursRow5");

// Fonction pour ajouter les couleurs à une ligne donnée
function ajouterCouleurs(couleurs, row) {
    // Boucle pour ajouter chaque couleur dans la ligne
    for (var i = 0; i < 5; i++) {
        if (i >= 6) {
            break; // Sortir de la boucle si on atteint la fin du tableau
        }
        var couleur = couleurs[i];

        // Créer une cellule pour la couleur
        var couleurCell = document.createElement("td");
        couleurCell.classList.add("couleur-cell");
        couleurCell.style.backgroundColor = couleur;

        // Ajouter la cellule de couleur à la ligne
        row.appendChild(couleurCell);
    }
}

// Ajouter les couleurs à chaque ligne de tableau
ajouterCouleurs(couleursHTML1, couleursRow1);
ajouterCouleurs(couleursHTML2, couleursRow2);
ajouterCouleurs(couleursHTML3, couleursRow3);
ajouterCouleurs(couleursHTML4, couleursRow4);
ajouterCouleurs(couleursHTML5, couleursRow5);

//options 
// Tableau des options
var options = ["Opt1", "Opt2", "Opt3", "Opt4", "Opt5"];

// Récupérer la ligne des options
var optionsRow = document.getElementById("optionsRow");

// Boucle pour ajouter chaque option dans la ligne
for (var i = 0; i < options.length; i++) {
    var option = options[i];

    // Créer une cellule pour l'option
    var optionCell = document.createElement("td");
    optionCell.classList.add("option-cell");
    optionCell.innerHTML = option;

    // Ajouter la cellule d'option à la ligne
    optionsRow.appendChild(optionCell);
}


axios.get('https://buy-it-sigma.herokuapp.com/api/v1/products')
    .then(function (response) {
        var data = response.data;
        // var a = response.data;

        console.log(data)
    })
    .catch(function (error) {
        console.error('Error fetching categories:', error);
    });