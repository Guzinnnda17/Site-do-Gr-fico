const ctx = document.getElementById('barChart').getContext('2d');

const data = {
    labels: ['League of Legends', 'Fortnite', 'Freefire', 'Overwatch', 'Minecraft'],
    datasets: [{
        label: 'Porcentagem de Jogadores',
        data: [35, 25, 20, 10, 10], // Exemplo de porcentagem para cada jogo
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
            ticks: {
                callback: function(value) {
                    return value + "%";
                }
            }
        }
    }
};

new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});