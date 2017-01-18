function changeTrack(){
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
        {  y: 25, indexLabel: "Match" },
        {  y: 35, indexLabel: "Not match" },
        {  y: 50, indexLabel: "Undecided" }
      ]
    }
    ]
  });
  piechart.render();
}
function changeSchool(){
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
    var newSeries = {
        type: "splineArea",
        showInLegend: true,
        color: "rgba(54,158,173,.6)",
        name: "TRIP",
        dataPoints: [
          { y: 25, label: "R" },
          { y: 35, label: "I" },
          { y: 43, label: "A" },
          { y: 12, label: "S" },
          { y: 6, label: "E" },
          { y: 51, label: "C" }
        ]
        };
    splineArea.options.data.push(newSeries);
    splineArea.render();
}
