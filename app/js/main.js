// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartId = document.getElementById("chart-container");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartId.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartId, {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 2,
        }, 
        title: {
            text: null
        },
        series: [{
            data: [
                ['Nasdaq', 279.96],
                ['S&P 500', 181.23],
                ['S&P 400 Midcap', 177.47],
                ['Dow Jones', 167.64],
                ['Russell 2000', 160.96],
            ]
        }],
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ['Nasdaq', 'S&P 500', 'S&P 400 Midcap', 'Dow Jones', 'Russell 2000'],
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 300,
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Return: <b>{point.y:.0f}%</b>'
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 15
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                yAxis: {
                    tickAmount: 4
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}


if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}