
    var chart;
    var dataFlattened_;
    d3.csv('https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv').then((dataFlattened) => {
        dataFlattened.forEach((d) => {
            const val = Math.round(d.name.length / 2);
            d.progress = [...new Array(val)].map((d) => Math.random() * 25 + 5);
        });
        //
        // Make the new chart
        dataFlattened_ = dataFlattened;
        chart = new d3.OrgChart()
        .container('.chart-container')
        .svgHeight(window.innerHeight - 10)
        .data(dataFlattened)
        .nodeHeight((d) => 160)
        .nodeWidth((d) => {
        if (d.depth == 0) return 500;
        return 280;
        })
        .childrenMargin((d) => 90)
        .compactMarginBetween((d) => 65)
        .compactMarginPair((d) => 100)
        .neightbourMargin((a, b) => 50)
        .siblingsMargin((d) => 100)
        .buttonContent(({ node, state }) => {
        return `<div style="color:#2CAAE5;border-radius:5px;padding:3px;font-size:10px;margin:auto auto;background-color:#8cf100;border: 1px solid #2CAAE5"> <span style="font-size:9px">${
            node.children
            ? `<i class="fas fa-angle-up"></i>`
            : `<i class="fas fa-angle-down"></i>`
        }</span> ${node.data._directSubordinates} </div>`;
        })
        .linkUpdate(function (d, i, arr) {
        d3.select(this)
            .attr('stroke', (d) =>
                d.data._upToTheRootHighlighted ? 'white' : 'white'
            )
            .attr('stroke-width', (d) =>
                d.data._upToTheRootHighlighted ? 15 : 1
            );

        if (d.data._upToTheRootHighlighted) {
            d3.select(this).raise();
        }
        })
        .nodeContent(function (d, i, arr, state) {
            // const svgStr = `<svg width=150 height=75  style="background-color:none"> <path d="M 0,15 L15,0 L135,0 L150,15 L150,60 L135,75 L15,75 L0,60" fill="#2599DD" stroke="#2599DD"/> </svg>`;
            // <div style="width:${d.width}px; height:${d.height}px;" class="node-main-div">
            const imageSrc = 'http://127.0.0.1:5500/First-Project/dev.png'; // replace with your image source URL
            return `
                <div style="width:300px; height:170px;" class="node-main-div">
                    <img src="${imageSrc}" class="node-profile-image" alt="Profile Image">
                    <div class="pie-chart-wrapper"></div>
                    <div class="node-main-userInfo">

                        <div class="node-user-name"> ${
                            d.data.name
                        } </div>
                        <div class="node-user-positionName"> ${
                            d.data.positionName || '---'
                        } </div>
                        <div class="node-user-prodoscore"> Prodoscore: ${
                            d.data.id || '---'
                        } </div>

                        
                        ${
                            d.depth == 0
                                ? `                              
                            <br/>
                            <div style="max-width:200px;font-size:10px;">
                            Hello World! Prodoscore Org Hiraerchy Chart. 
                            </div>`
                                : ''
                        }
                    </div>
                </div>
            `;
        })
        
        // Render the chart
        .render();
    });
    //
    // For downloading the chart as a pdf
    function downloadPdf() {
        chart.exportImg({
          save: false,
          onLoad: (base64) => {
            var pdf = new jspdf.jsPDF();
            var img = new Image();
            img.src = base64;
            img.onload = function () {
              pdf.addImage(
                img,
                'JPEG',
                5,
                5,
                595 / 3,
                ((img.height / img.width) * 595) / 3
              );
              pdf.save('chart.pdf');
            };
          },
        });
    }
    //
    // For employee search functionality
    function searchEmployee() {
        /*
            This is how we need to call the search function
            //
            01. Search the Employee by name
                - Keep the Employees Name and the Related IDs in a Dictionary.
                - Search the Dictionary for the Employee Name.
            //
            02. When click on Employee Dom Element. 
                - Get the Employee ID from the Dictionary.
            //
            03. Then by using the Employee ID, Call the Mark() Function.
        */
        console.log("------------ calling on Search Employee --------------");
        const searchQuery = 'beate vileid';
        //
        // Filter the data based on the search query
        const filteredData = dataFlattened_.filter((d) => {
            console.log(d.name.toLowerCase());
            console.log(d.name.toLowerCase().includes(searchQuery));
            return d.name.toLowerCase().includes(searchQuery)            
        });
        //
        // Update the chart with filtered data
        chart.updateData(filteredData);
    }
