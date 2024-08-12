            Chart.defaults.color = '#f8fafc';
            new Chart(document.getElementById("pie-chart"), {
                
                type: 'pie',
                data: {
                  labels: ["KOL round", "AirDrop initial ", "IDO ", "Partnership ", "Community ", "Team", "Marketing "],
                  datasets: [{
                    label: "%",
                    backgroundColor: ["#ef4444", "#f97316","#fde047","#22c55e","#0ea5e9","#a855f7","#f472b6"],
                    data: [9,1,0.25,5,77.5,5,2.25]
                  }]
                },
                options: {
                  responsive: true,
                  legend: {
                    position: "bottom",
                    labels: {
                      fontColor: "white",
                      fontSize: 14,
                      padding: 20,
                    },
                  },
                  }
                
            });