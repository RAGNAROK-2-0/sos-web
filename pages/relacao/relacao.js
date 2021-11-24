
      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Dia');
        data.addColumn('number', 'Tickets Fechados');
        data.addColumn('number', 'Tickets Abertos');

        data.addRows([
          [new Date(2021, 10, 11), 9, 5],  [new Date(2021, 10, 12), 5, 7],  [new Date(2021, 10, 13), 2, 3],
          [new Date(2021, 10, 14), 2, 1],  [new Date(2021, 10, 15), 0, 3],  [new Date(2021, 10, 16), 4, 4],
          [new Date(2021, 10, 17), 5, 3],  [new Date(2021, 10, 18), 1, 4],  [new Date(2021, 10, 19), 3, 2],
        ]);


        var options = {
          title: 'Quantidade de Tickets Abertos e Fechados',
          width: 800,
          height: 400,
          backgroundColor: '#818CA0',
          hAxis: {
            format: 'dd/MM/yy',
            gridlines: {count: 15}
          },
          vAxis: {
            gridlines: {color: 'none'},
            minValue: 0
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('grafico'));

        chart.draw(data, options);
      }
  