(() => {


        if (window.loadProjections) {
            window.location.reload();
            return;
        }

        window.loadProjections = () => {

            const pieData = {
                labels: ['Electricity', 'Maintenance & Spare Parts', 'Insurance', 'Fixed Costs'],
                datasets: [{
                    data: [
                        41.2538173649318,
                        17.3931438547003,
                        21.33589353029007,
                        20.017145250077835
                    ],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#CBAACB'],
                    hoverOffset: 10
                }]
            };


            const ctx_pie = document.getElementById('opexPieChart').getContext('2d');

            if (window.opexChart) {
                window.opexChart.destroy();  // destroy existing chart if any
            }

            window.opexChart = new Chart(ctx_pie, {
                type: 'pie',
                data: pieData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 10 // or whatever smaller value fits
                                },
                                boxWidth: 10, // reduce size of color box
                                padding: 8     // space around legend items
                            }
                        },
                        title: {
                            display: false,
                            text: 'Average OPEX Distribution',
                            font: {
                                size: 18
                            },
                            padding: {
                                top: 20,
                                bottom: 30
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.label + ': ' + context.parsed.toFixed(1) + '%';
                                }
                            }
                        }
                    }
                }
            });



            if (window.sankeyChartInstance) {
                window.sankeyChartInstance = null;
            }

            google.charts.load('current', { packages: ['sankey'] });
            google.charts.setOnLoadCallback(drawChart);

            const options = {
                tooltip: { isHtml: true },
                width: '100%',
                sankey: {
                    node: {
                        colors: [
                            "#a6cee3",
                            "#b2df8a",
                            "#fb9a99",
                            "#fdbf6f",
                            "#cab2d6",
                            "#ffff99",
                            "#1f78b4",
                            "#33a02c",
                            "#ff7f00",
                            "#6a3d9a",
                            "#e31a1c",
                            "#b15928",
                            "#a6cee3",
                            "#b2df8a",
                            "#fb9a99",
                            "#fdbf6f"
                        ],
                        label: {
                            fontSize: 14,
                            color: '#333'
                        },
                        nodePadding: 25
                    },
                    link: {
                        colorMode: 'gradient'
                    }
                }
            };

            function drawChart() {
                const data = new google.visualization.DataTable();
                data.addColumn('string', 'From');
                data.addColumn('string', 'To');
                data.addColumn('number', 'Cost');
                data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
                data.addRows([
                    [
                        "Total Capex",
                        "Fixed Capex",
                        179026,
                        "<b>Total Capex → Fixed Capex</b><br>Cost: 179,026"
                    ],
                    [
                        "Total Capex",
                        "Variable Capex",
                        520445,
                        "<b>Total Capex → Variable Capex</b><br>Cost: 520,445"
                    ],
                    [
                        "Fixed Capex",
                        "Site Construction",
                        39318,
                        "<b>Fixed Capex → Site Construction</b><br>Cost: 39,318"
                    ],
                    [
                        "Fixed Capex",
                        "Office & Lab Equipments",
                        1928,
                        "<b>Fixed Capex → Office & Lab Equipments</b><br>Cost: 1,928"
                    ],
                    [
                        "Fixed Capex",
                        "HVAC System",
                        11824,
                        "<b>Fixed Capex → HVAC System</b><br>Cost: 11,824"
                    ],
                    [
                        "Fixed Capex",
                        "Liquid Cooling System",
                        5273,
                        "<b>Fixed Capex → Liquid Cooling System</b><br>Cost: 5,273"
                    ],
                    [
                        "Fixed Capex",
                        "Cooling Container",
                        84000,
                        "<b>Fixed Capex → Cooling Container</b><br>Cost: 84,000"
                    ],
                    [
                        "Fixed Capex",
                        "Import Duties",
                        29183,
                        "<b>Fixed Capex → Import Duties</b><br>Cost: 29,183"
                    ],
                    [
                        "Fixed Capex",
                        "Labor",
                        7500,
                        "<b>Fixed Capex → Labor</b><br>Cost: 7,500"
                    ],
                    [
                        "Variable Capex",
                        "Miners",
                        305100,
                        "<b>Variable Capex → Miners</b><br>Cost: 305,100"
                    ],
                    [
                        "Variable Capex",
                        "Solar Panels",
                        36195,
                        "<b>Variable Capex → Solar Panels</b><br>Cost: 36,195"
                    ],
                    [
                        "Variable Capex",
                        "Inverter",
                        29200,
                        "<b>Variable Capex → Inverter</b><br>Cost: 29,200"
                    ],
                    [
                        "Variable Capex",
                        "Transformer",
                        4950,
                        "<b>Variable Capex → Transformer</b><br>Cost: 4,950"
                    ],
                    [
                        "Variable Capex",
                        "Batteries",
                        132000,
                        "<b>Variable Capex → Batteries</b><br>Cost: 132,000"
                    ],
                    [
                        "Variable Capex",
                        "Generator",
                        13000,
                        "<b>Variable Capex → Generator</b><br>Cost: 13,000"
                    ]
                ]);

                const chart = new google.visualization.Sankey(document.getElementById('sankey_chart'));
                chart.draw(data, options);
                window.sankeyChartInstance = chart;
            }

            const ctx = document.getElementById('profitChart').getContext('2d');
            if (window.profitChartInstance) {
                window.profitChartInstance.destroy();
            }

            window.profitChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36
                    ],
                    datasets: [
                        {
                            "label": "Revenue",
                            "data": [
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16",
                                "22972.16"
                            ],
                            "borderColor": "pink",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Electricity",
                            "data": [
                                "7552.26",
                                "6985.84",
                                "6230.61",
                                "6230.61",
                                "5286.58",
                                "5286.58",
                                "4531.36",
                                "3776.13",
                                "3776.13",
                                "3020.90",
                                "2076.87",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65",
                                "1321.65"
                            ],
                            "borderColor": "#FF6384",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Maintenance & Spearparts",
                            "data": [
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21",
                                "1028.21"
                            ],
                            "borderColor": "#36A2EB",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Insurance",
                            "data": [
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1104.65",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21",
                                "1330.21"
                            ],
                            "borderColor": "#FFCE56",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Fixed Costs",
                            "data": [
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33",
                                "1183.33"
                            ],
                            "borderColor": "#CBAACB",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Gross Profit",
                            "data": [
                                "12103.72",
                                "12670.14",
                                "13425.36",
                                "13425.36",
                                "14369.39",
                                "14369.39",
                                "15124.62",
                                "15879.84",
                                "15879.84",
                                "16635.07",
                                "17579.10",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77"
                            ],
                            "borderColor": "#7E57C2",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Left-over funds",
                            "data": [
                                "8521.00",
                                "396.00",
                                "11807.00",
                                "3697.00",
                                "15910.00",
                                "9172.00",
                                "3133.00",
                                "16630.00",
                                "11233.00",
                                "5851.00",
                                "1899.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00"
                            ],
                            "borderColor": "teal",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "reinvestment",
                            "data": [
                                "1767.00",
                                "18894.00",
                                "0.00",
                                "19521.00",
                                "0.00",
                                "18951.00",
                                "18894.00",
                                "0.00",
                                "18894.00",
                                "19521.00",
                                "18894.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00",
                                "0.00"
                            ],
                            "borderColor": "yellow",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Net Profit",
                            "data": [
                                "1815.72",
                                "1901.14",
                                "2014.36",
                                "2014.36",
                                "2156.39",
                                "2156.39",
                                "2269.62",
                                "2382.84",
                                "2382.84",
                                "2496.07",
                                "2637.10",
                                "20007.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77",
                                "18108.77"
                            ],
                            "borderColor": "green",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Cumulative Profit (USD)",
                            "data": [
                                "1815.72",
                                "3716.85",
                                "5731.21",
                                "7745.57",
                                "9901.97",
                                "12058.36",
                                "14327.98",
                                "16710.82",
                                "19093.67",
                                "21589.74",
                                "24226.84",
                                "44234.61",
                                "62343.38",
                                "80452.15",
                                "98560.92",
                                "116669.69",
                                "134778.46",
                                "152887.23",
                                "170995.99",
                                "189104.76",
                                "207213.53",
                                "225322.30",
                                "243431.07",
                                "261539.84",
                                "279648.61",
                                "297757.38",
                                "315866.15",
                                "333974.92",
                                "352083.68",
                                "370192.45",
                                "388301.22",
                                "406409.99",
                                "424518.76",
                                "442627.53",
                                "460736.30",
                                "478845.07"
                            ],
                            "borderColor": "purple",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1,
                            "hidden": true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'USD ($)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 10 // or whatever smaller value fits
                                },
                                boxWidth: 10, // reduce size of color box
                                padding: 8     // space around legend items
                            }
                        },
                        title: {
                            display: false,
                            text: `Financial Position `,
                            font: {
                                size: 18
                            },
                            padding: {
                                top: 20,
                                bottom: 30
                            }
                        }
                    }
                }
            });

            const hashRate = document.getElementById('hashRate').getContext('2d');

            const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradient.addColorStop(0, 'rgba(255, 238, 192, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 238, 192, 0.005)');

            if (window.hashRateChartInstance) {
                window.hashRateChartInstance.destroy();
            }

            window.hashRateChartInstance = new Chart(hashRate, {
                type: 'line',
                data: {
                    labels: [
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Nov 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Dec 2024",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Jan 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Feb 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Mar 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "Apr 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025",
                        "May 2025"
                    ],
                    datasets: [
                        {
                            "label": "Revenue",
                            "data": [
                                28.683954729078476,
                                26.997781287461972,
                                27.116020716684243,
                                27.615567393698196,
                                28.157822318216496,
                                29.57405744957252,
                                29.625524233061086,
                                29.807176678042698,
                                29.2362933829344,
                                28.879843256561205,
                                27.823522735561326,
                                28.154279731440432,
                                28.336395416054238,
                                29.01114037054346,
                                28.85840437581912,
                                28.68329414882479,
                                29.333602742211855,
                                28.2894140988483,
                                28.30611438497698,
                                29.66162237632903,
                                29.131982195598937,
                                29.679070889908047,
                                29.560873940001898,
                                29.22122061921679,
                                28.48841652152614,
                                29.00510172065297,
                                30.090359124998766,
                                29.556176345994263,
                                29.675722820760534,
                                29.94669300200699,
                                29.55766365977597,
                                29.933798378672712,
                                29.497412933369628,
                                28.663039042952608,
                                27.53873440913671,
                                27.544952251839074,
                                27.035471464091952,
                                26.44632744012342,
                                26.714467638567154,
                                27.45842188463245,
                                27.051152112202104,
                                26.66805266743478,
                                26.315316927097914,
                                26.2179882101574,
                                25.667539617018083,
                                25.67357678819822,
                                25.710074855408656,
                                26.1605446137572,
                                26.54322504577525,
                                26.876884615694443,
                                26.87472300998097,
                                27.401887560685413,
                                27.493568948272404,
                                26.60899821772292,
                                25.774369720264602,
                                25.86404328801728,
                                25.926495948601488,
                                25.901780783378996,
                                25.357879113214874,
                                26.00303843378805,
                                26.5894198234898,
                                27.02129237915367,
                                28.071201884105676,
                                28.28385441669138,
                                28.451495543148273,
                                28.563989241562844,
                                28.681617291258753,
                                28.744198196361054,
                                28.161541409239867,
                                28.649340807743325,
                                28.598919472489786,
                                28.53597588006068,
                                27.78543008085262,
                                28.439006086457578,
                                28.42186245607222,
                                29.13314284881577,
                                29.00489591105429,
                                28.536201181750947,
                                27.66642709936357,
                                26.919164171617986,
                                27.63368777950057,
                                27.297754625164572,
                                27.12838260099823,
                                27.080399255870216,
                                26.90224503635379,
                                26.126583475839343,
                                25.55256800329835,
                                25.623129105014613,
                                25.393339125741026,
                                25.394721585514343,
                                25.537530459773038,
                                25.6529100631284,
                                25.573679282478242,
                                25.364275879872725,
                                25.217807869574735,
                                25.240727073831728,
                                25.6761621116477,
                                25.8031860215005,
                                25.511226487465823,
                                25.54124565237841,
                                26.456403910337748,
                                25.12188967553431,
                                24.268794462927122,
                                23.703094826830885,
                                22.437754663411177,
                                23.001865196141424,
                                23.848792934365026,
                                24.76965780452121,
                                23.129610447800836,
                                23.916285735350613,
                                24.635678578773447,
                                24.168266160222466,
                                23.70609173710767,
                                23.129190628482405,
                                21.77888595008649,
                                21.794986955228424,
                                22.244003813419035,
                                22.135868681051598,
                                22.293913514882057,
                                22.68584892628605,
                                22.489726493706932,
                                22.464659933128278,
                                22.19810598763387,
                                22.462844617570617,
                                22.93795585298519,
                                22.65867238042909,
                                22.666058673184757,
                                22.72091492971171,
                                23.096591113964053,
                                23.188835218062856,
                                23.578932458041706,
                                23.39287574141974,
                                22.76841285455192,
                                22.16111403115802,
                                21.981678441886373,
                                21.803677470535945,
                                22.164294333891906,
                                22.517478392329345,
                                21.95736118418329,
                                22.110474653338294,
                                21.776235428952106,
                                20.71271936883435,
                                19.402318227644948,
                                19.718905396020453,
                                19.70148058680597,
                                20.04242347746738,
                                20.377247168851085,
                                20.94618622867165,
                                20.972945106061683,
                                21.024627646837065,
                                21.156613705426572,
                                20.941012086638295,
                                21.044877510009137,
                                21.083928906754217,
                                21.066051029453288,
                                20.868949152892924,
                                21.28831074335129,
                                21.79712194415483,
                                22.919398593904262,
                                23.17039623738836,
                                23.167147376264342,
                                23.15675338660422,
                                23.05620780245494,
                                23.103769807043797,
                                23.275267438876668,
                                23.206952377588262,
                                23.414229260244866,
                                23.741331152931608,
                                23.627737159569136,
                                24.08882298299126,
                                23.796806182536564,
                                23.831794083168468,
                                24.28081000036127,
                                25.07184141095098,
                                26.053299933892585,
                                26.113433035609905,
                                26.230257204574432,
                                26.187426761821342,
                                26.47844422291846,
                                26.370779051594305,
                                26.010885680896582,
                                26.31021967800368,
                                26.291082208319153,
                                25.767093658645894,
                                25.78469246297038,
                                26.109346821128643,
                                26.530365911490254,
                                27.522344114474095,
                                27.36950684153153,
                                26.78568903823744
                            ],
                            "borderColor": "rgba(255, 238, 192,1)",
                            "backgroundColor": gradient,
                            "fill": true,
                            "borderWidth": 3,
                            "tension": 0.1,
                            "pointRadius": 0,
                            "pointHoverRadius": 0
                        },
                        {
                            "label": "Average",
                            "data": [
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734,
                                25.5252265853734
                            ],
                            "borderColor": "rgba(0, 0, 0, 0.4)",
                            "borderWidth": 2,
                            "borderDash": [
                                5,
                                5
                            ],
                            "fill": false,
                            "pointRadius": 0,
                            "pointHoverRadius": 0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                // Show fewer ticks, e.g., every 30th label
                                callback: function (val, index) {
                                    return index % 30 === 0 ? this.getLabelForValue(val) : '';
                                },
                                maxRotation: 0,
                                maxTicksLimit: 24,
                                autoSkip: false,
                                font: {
                                    size: 10
                                }
                            },
                            grid: {
                                display: true
                            }
                        },
                        y: {
                            beginAtZero: false,
                            min: 16,
                            title: {
                                display: true,
                                text: 'USD ($)'
                            },
                            ticks: {
                                stepSize: 1   // adjust this value for grid density
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: false,
                            text: `Bitmain Antminer S21 XP Hydro Miner Revenue with a hashrate of 473 TH/S`,
                            font: {
                                size: 18
                            },
                            padding: {
                                top: 20,
                                bottom: 30
                            }
                        }
                    }
                }
            });



            // Initialize the chart
            const ctx2 = document.getElementById('powerChart').getContext('2d');

            const solarPanelData = [
                635,
                666,
                708,
                708,
                761,
                761,
                804,
                846,
                846,
                888,
                941,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983,
                983
            ]
            const solarPanlePower = [
                387.34999999999997,
                406.26,
                431.88,
                431.88,
                464.21,
                464.21,
                490.44,
                516.06,
                516.06,
                541.68,
                574.01,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63,
                599.63
            ]

            // Destroy the previous chart instance if it exists
            if (window.powerChartInstance) {
                window.powerChartInstance.destroy();
            }

            window.powerChartInstance = new Chart(ctx2, {
                type: 'line',
                data: {
                    labels: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36
                    ],  // Months as x-axis labels
                    datasets: [
                        {
                            "label": "Inverter",
                            "data": [
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200,
                                200
                            ],
                            "borderColor": "blue",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Panels",
                            "data": [
                                387.34999999999997,
                                406.26,
                                431.88,
                                431.88,
                                464.21,
                                464.21,
                                490.44,
                                516.06,
                                516.06,
                                541.68,
                                574.01,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63,
                                599.63
                            ],
                            "borderColor": "pink",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        },
                        {
                            "label": "Miners",
                            "data": [
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28,
                                170.28
                            ],
                            "borderColor": "green",
                            "fill": false,
                            "borderWidth": 1,
                            "tension": 0.1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Total Power (kW)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 10 // or whatever smaller value fits
                                },
                                boxWidth: 10, // reduce size of color box
                                padding: 8     // space around legend items
                            }
                        },
                        title: {
                            display: false,
                            text: `Power Requirements `,
                            font: {
                                size: 18
                            },
                            padding: {
                                top: 20,
                                bottom: 30
                            }
                        },
                        tooltip: {
                            callbacks: {
                                // Customize the tooltip to show the power breakdown when hovering
                                title: function (tooltipItem) {
                                    return `Month ${tooltipItem[0].label}`;
                                },

                                label: function (tooltipItem) {
                                    const datasetIndex = tooltipItem.datasetIndex;
                                    const monthIndex = tooltipItem.dataIndex;

                                    // If hovering over Inverter (kW)
                                    if (datasetIndex === 0) {
                                        return [`Total Inverter Power: 200.00 kW`, `50Kw: 1 units (50 Kw) 150Kw: 1 units (150 Kw)`];
                                    }

                                    // If hovering over Panels (kW)
                                    if (datasetIndex === 1) {
                                        const solarPanelNumber = solarPanelData[monthIndex];
                                        const solarPower = solarPanlePower[monthIndex].toFixed(2);
                                        return `Number of Panels: ${solarPanelNumber}, Total Power: ${solarPower} Kw`;
                                    }

                                    // If hovering over Inverters (kW)
                                    if (datasetIndex === 2) {
                                        return `Number of Miners: 30, Total Power: 170.28 Kw`;
                                    }


                                    return ''; // Fallback
                                }
                            }
                        }
                    }
                }
            });



            // Initialize the chart
            const ctx3 = document.getElementById('energyChart').getContext('2d');

            const batteryData = [
                8,
                8,
                9,
                9,
                10,
                10,
                11,
                12,
                12,
                13,
                14,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15,
                15
            ]

            const batteryCapacityTotal = batteryData.map(x => (x * 215));

            // Destroy the previous chart instance if it exists
            if (window.energyChartInstance) {
                window.energyChartInstance.destroy();
            }


            window.energyChartInstance = new Chart(ctx3, {
                type: 'line',
                data: {
                    labels: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36
                    ],  // Months as x-axis labels
                    datasets: [
                        {
                            label: 'Batteries',
                            data: batteryCapacityTotal,  // Total power per month
                            borderColor: 'teal',
                            fill: false,
                            borderWidth: 1,
                            tension: 0.1
                        },
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Total Energy (kwh)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 10 // or whatever smaller value fits
                                },
                                boxWidth: 10, // reduce size of color box
                                padding: 8     // space around legend items
                            }
                        },
                        title: {
                            display: false,
                            text: `Stored Energy`,
                            font: {
                                size: 18
                            },
                            padding: {
                                top: 20,
                                bottom: 30
                            }
                        },
                        tooltip: {
                            callbacks: {
                                // Customize the tooltip to show the power breakdown when hovering
                                title: function (tooltipItem) {
                                    return `Month ${tooltipItem[0].label}`;
                                },

                                label: function (tooltipItem) {
                                    const monthIndex = tooltipItem.dataIndex;

                                    const batteryNumber = batteryData[monthIndex];
                                    const batteryEnergy = batteryCapacityTotal[monthIndex].toLocaleString();
                                    return `Number of Batteries: ${batteryNumber}, Battery Rating : 215 kwh, Total Energy: ${batteryEnergy} Kwh`;

                                }
                            }
                        }
                    }
                }
            });


        }

        window.loadProjections?.();



})();
