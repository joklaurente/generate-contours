
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkMzM1YTBiOC04MDZkLTQ4YzEtOTkwZi1mMTlmZjE3YjU2MWMiLCJpZCI6OTcxNTAsImlhdCI6MTY1NDkzOTE1NH0.Xeh8ozlg81qqlNyb1CzQbOSEg4L60SOfuUhU4Uvb5jQ';
const viewer = new Cesium.Viewer('cesiumContainer')

var promise = Cesium.GeoJsonDataSource.load('http://localhost:8000/contour.geojson', {
  stroke: Cesium.Color.ORANGE,
  strokeWidth: .5,
});
promise.then(function (dataSource) {
  viewer.dataSources.add(dataSource);
  var checkbox = document.getElementById('showCheckbox');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      if (!viewer.dataSources.contains(dataSource)) {
        viewer.dataSources.add(dataSource);
      }
    } else {
      if (viewer.dataSources.contains(dataSource)) {
        viewer.dataSources.remove(dataSource);
      }
    }
  }, false);
});

var west = 139.0704;
var south = 35.1061;
var east = 139.1055;
var north = 35.1252;
var rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);

viewer.camera.flyTo({
  destination: rectangle
});

document.getElementById('toolbar').innerHTML = '<label><input type="checkbox" id="showCheckbox" checked/> Show Contours</label>';

