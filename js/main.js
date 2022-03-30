// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table. 
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Champiñones', 1.5],
    ['Cebollas', 0.5],
    ['Aceitunas', 0.1],
    ['Queso', 5],
    ['Pepperoni', 3],
    ['Jamón', 1],
    ['Piña', 3]
  ]);

  // Set chart options
  var options = {'title':'¿Cuánta pizza comiste anoche?',
                 'width':450,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('grafica'));
  chart.draw(data, options);
}