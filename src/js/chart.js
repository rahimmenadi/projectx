var data = {
    jour: [20, 30, 40, 50,78],
    semaine: [200, 250, 180, 300,200,183,152],
    mois: [120, 150, 80, 200, 100],
    annee: [1500, 2000, 1800, 2200, 1900, 199 , 271,1281,192,192,1627,1721],
};

var labels = {
    jour: ['1PM', '2PM', '3PM', '4PM', '5PM'],
    semaine: ['samedi','dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
    mois: ['Première semaine', 'Deuxième semaine', 'Troisième semaine', 'Quatrième semaine'],
    annee: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai' , 'juin' , 'juillet', 'aout' , 'septembre' , 'octobre' , 'novembre' , 'decemebre'],
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels.mois,
        datasets: [{
            label: 'Ventes',
            data: data.mois,
            backgroundColor: 'rgba(0, 123, 255, 0.6)'
        }]
    },
    options: options
});

function updateChart() {
    var selectedVariable = document.getElementById('selectVariable').value;
    myChart.data.labels = labels[selectedVariable];
    myChart.data.datasets[0].data = data[selectedVariable];
    myChart.update();
}

//variables

let userN = document.getElementById('userN');
let totalS = document.getElementById('totalS');
let totalP = document.getElementById('totalP');
let totalR = document.getElementById('totalR');
let totalV = document.getElementById('totalV');

