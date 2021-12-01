function Jsonfile() {
    // the json data. 
    var employee = [
        {
            "id" : 1,
            "text": "Learn about Web Technology",
            "created_at": "Mon Apr 26 06:01:55 +0000 2020",
            "Tags": "Web Development,Web Components",
            "is_complete" : true
          },
          {
            "id" : 2,
            "text" : "Watch Pluralsight course on Docker",
            "created_at" : "Tue Mar 02 07:01:55 +0000 2020",
            "Tags": "Devops,Docker",
            "is_complete" : true
          },
          {
            "id" : 3,
            "text" : "Complete presentation prep for Aurelia presentation",
            "created_at" : "Wed Mar 05 10:01:55 +0000 2020",
            "Tags": 
              "Presentation,Aureia",
              "is_complete" : false
              
          },
          {
            "id" : 4,
            "text": "Instrument creation of development environment with Puppet",
            "created_at" : "Fri June 30 13:00:00 +0000 2020",
            "Tags": [
              "Devops",
              "Puppet"
            ],
            "is_complete" : false
          },
          {
            "id" : 5,
            "text": "Transition code base to ES6",
            "created_at" : "Mon Aug 01 10:00:00 +0000 2020",
            "Tags":"ES6, Web Development",
            "is_complete" : false
          }
        ]
    // Extract value from header. 
        
        var col = [];
        for (var i = 0; i < employee.length; i++) {
            for (var key in employee[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");

        // Create table header row  extracted from json file.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < employee.length; i++) {

            tr = table.insertRow(-1);//// Insert a row at the end of the table

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);// If index is -1 or equal to the number of cells, the cell is appended as the last cell in the row. If index is omitted it defaults to -1.
                tabCell.innerHTML = employee[i][col[j]];
            }
        }

        // Now, add the newly created table with json data from the json file, to a container.
        var divShowData = document.getElementById('showData');
        //divShowData.innerHTML = "";
        divShowData.appendChild(table);// call the jsonfile function to create a new data and use the appendChild() method to append the new data
    }