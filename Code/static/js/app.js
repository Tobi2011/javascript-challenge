// from data.js
var tableData = data;


console.log("app.js is working")

var table = document.getElementById("tb");

for (var i = 0; i < tableData.length; i++){
  var row = table.insertRow(-1);
  var k = 0
  var col = tableData[i]
  for (var key in col){
    var cell = row.insertCell(k);
    k++;
    cell.innerHTML = col[key];
    // console.log(key + " : " + col[key])
  }
}
function searchbox() {

  tbody = document.getElementById("tb");
  tbody.innerHTML = "";

  var searchItems = {
    datetime: document.getElementById("datetime").value,
    city: document.getElementById("cityname").value,
    state: document.getElementById("state").value,
    country: document.getElementById("country").value,
    shape: document.getElementById("shape").value
  };

  for (key in searchItems){
    if (!searchItems[key]) {
      delete searchItems[key];
    };
  };

  console.log(searchItems)

  searchedTable = tableData.filter(function(item) {
    for (var key in searchItems) {
      if (item[key] === undefined || item[key].toUpperCase() != searchItems[key].toUpperCase()) {
        return false; 
      }
      console.log(item[key])
    }
      return true;
  });
  
  console.log(searchedTable)

  var table = document.getElementById("tb");

  for (var i = 0; i < searchedTable.length; i++){
    var row = table.insertRow(-1);
    var k = 0
    var col = searchedTable[i]
    for (var key in col){
      var cell = row.insertCell(k);
      k++;
      cell.innerHTML = col[key];
      // console.log(key + " : " + col[key])
    }
  }

}