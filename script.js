const monthlyData = [58,48,77,72,45,40];
const months = ['January','February','March','April','May','June'];

//create chart 
const ctx = document.getElementById("myChart").getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'Monthly Sales Data',
            data: monthlyData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75,54,99,0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderWidth:1,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ]
        }]
    },
    options: {
        scales: {
            y:{
                beginAtZero: true
            }
        },
        animation:{
            duration:1000,
            easing:'easeInOutQuad',
        },
        hover:{
            mode: 'index',
            intersect: false,
        },
        plugin:{
            title:{
                display:true,
                text:'Monthly Sales Data',
            },
            
        }
    }
})