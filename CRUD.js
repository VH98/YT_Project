var script_url = "https://script.google.com/macros/s/AKfycbzW3SVLURWx8cuOgF0Fa6UPDVGcLfMLwxpn0ZjvRCB-bA6pI-M/exec";

// Make an AJAX call to Google Script
var result = null;

function waiting() {
  setTimeout(function() { console.log("Waiting to insert " + channelTitle); }, 4000);
}

function insert_value() {

  var url = script_url + "?callback=ctrlq&id=" + channelID + "&name=" + channelTitle + "&action=insert";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

function ctrlq(e) {
  console.log(e.result);
  this.result = e.result;
  //read_value();
}
function read_value() {
$("#re").css("visibility","hidden");
 document.getElementById("loader").style.visibility = "visible";
 var url = script_url+"?action=read";

$.getJSON(url, function (json) {
    // Set the variables from the results array
         // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    var header = table.createTHead();
    var row = header.insertRow(0);     
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "<b>ID</b>";
    cell2.innerHTML = "<b>Name</b>";
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {

            tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].ID;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].NAME;
            }
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    document.getElementById("loader").style.visibility = "hidden";
    $("#re").css("visibility","visible");
    });
  }