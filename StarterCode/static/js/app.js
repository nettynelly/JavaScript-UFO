// from data.js
var tableData = data;

// YOUR CODE HERE!

//                    CREATE TABLE                       //
// grab the table body so that we can put in the data
var table_body = d3.select('tbody');

alert('Hey! Do you believe in Alien');

// build the table using the data from data.js
// forloop through each dictionary in data set, and create table row
for (var i = 0; i < tableData.length; i = i+1) {
  // tableData[i] is each dictionary
  // tableData[0] =
  // {
  //   datetime: "1/1/2010",
  //   city: "benton",
  //   state: "ar",
  //   country: "us",
  //   shape: "circle",
  //   durationMinutes: "5 mins.",
  //   comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  // }

  // build an empty row element and add it to the table body
  var row = table_body.append("tr"); // also keep track of the current row

  // add each data into a row using "td" kind of like an excel cell
  row.append('td').text(tableData[i]['datetime']);
  row.append('td').text(tableData[i]['city']);
  row.append('td').text(tableData[i]['state']);
  row.append('td').text(tableData[i]['country']);
  row.append('td').text(tableData[i]['shape']);
  row.append('td').text(tableData[i]['durationMinutes']);
  row.append('td').text(tableData[i]['comments']);
}
  //                    CREATE FILTER                       //



  