// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log("app.js is working")

var table = document.getElementById("ufo-table");

var search = document.getElementById("datetime").value
console.log(search)
for (var i = 0; i < data.length; i++){
  var row = table.insertRow(-1);
  var k = 0
  var col = data[i]
  console.log(i)
  for (var key in col){
    var cell = row.insertCell(k);
    k++;
    cell.innerHTML = col[key];
    // console.log(key + " : " + col[key])
  }
}

function searchbox() {
  var search = document.getElementById("datetime").value.toUpperCase();
  var table = document.getElementById("ufo-table");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(search) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}