const slider = document.getElementById("nValue");
const display = document.getElementById("displayValue");
const ctx = document.getElementById("myChart").getContext("2d");

let chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)"],
        datasets: [{
            label: "Time Complexity",
            data: [],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});

function updateChart() {
    let n = parseInt(slider.value);

    display.innerHTML = n;

    chart.data.datasets[0].data = [
        1,
        Math.log2(n),
        n,
        n * Math.log2(n),
        n * n
    ];

    chart.update();
}

slider.oninput = updateChart;

updateChart();