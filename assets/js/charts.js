function createColumnChart() {
  var colors = ["rgba(54,158,173,.6)","rgba(134,180,2,.7)","rgba(127,96,132,.6)","rgba(127,96,255,.6)"];

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    axisY:{
          interval: 5,
        },
    data: [{
      type: "column",
      dataPoints: [
        { y: overAllRes[0], label: "R" },
        { y: overAllRes[1], label: "I" },
        { y: overAllRes[2], label: "A" },
        { y: overAllRes[3], label: "S" },
        { y: overAllRes[4], label: "E" },
        { y: overAllRes[5], label: "C" }
      ]
    }]
  });
  chart.render();

  var piechart = new CanvasJS.Chart("piechart",
  {
    animationEnabled: true,
    data: [
    {
      type: "pie",
      showInLegend: true,
      toolTipContent: "{y} - #percent %",
      legendText: "{indexLabel}",
      dataPoints: [
        {  y: 50, indexLabel: "Match" },
        {  y: 25, indexLabel: "Not match" },
        {  y: 25, indexLabel: "Undecided" }
      ]
    }
    ]
  });
  piechart.render();

  var splineArea = new CanvasJS.Chart("splineArea", {
    animationEnabled: true,
    axisY: {
      includeZero: false,
  },
    toolTip: {
      shared: true,
      content: "<span style='\"'color: {color};'\"'><strong>{name}</strong></span> <span style='\"'color: dimgrey;'\"'>{y}</span> "
    },
    legend: {
      fontSize: 13
    },
    data: [
    ]
  });
  splineArea.render();

  for(var i=0;i<4;i++){
    var newSeries = {
        type: "splineArea",
        showInLegend: true,
        color: colors[i],
        name: schools[i],
        dataPoints: [
          { y: riasecSchool[i][0], label: "R" },
          { y: riasecSchool[i][1], label: "I" },
          { y: riasecSchool[i][2], label: "A" },
          { y: riasecSchool[i][3], label: "S" },
          { y: riasecSchool[i][4], label: "E" },
          { y: riasecSchool[i][5], label: "C" }
        ]
        };
    splineArea.options.data.push(newSeries);
    splineArea.render();
  }
  var stackedArea = new CanvasJS.Chart("stackedArea", {
    animationEnabled: true,
    toolTip: {
      shared: true
    },
    axisX: {
      valueFormatString: "MMM",
      interval: 1,
      intervalType: "month"
    },
    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    data: []
});
  stackedArea.render();
  for(var i=0;i<4;i++){
    var newSeries = {
        type: "stackedArea",
        showInLegend: true,
        color: colors[i],
        name: places[i],
        dataPoints: [
          { y: riasecPlaces[i][0], label: "R" },
          { y: riasecPlaces[i][1], label: "I" },
          { y: riasecPlaces[i][2], label: "A" },
          { y: riasecPlaces[i][3], label: "S" },
          { y: riasecPlaces[i][4], label: "E" },
          { y: riasecPlaces[i][5], label: "C" }
        ]
        };
    stackedArea.options.data.push(newSeries);
    stackedArea.render();
  }
}
