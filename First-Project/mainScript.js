// Add the Test data
const test_data = [
    //
    {
        "name": "Organization",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Main Organization,tag1,manager,ct",
        "isLoggedUser": "false",
        "positionName": "organization",
        "id": "O-6065",
        "parentId": "",
        "size": ""
    },
    {
        "name": "BackEnd Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "backend developer,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "backend developer",
        "id": "O-6066",
        "parentId": "O-6065",
        "size": ""
    },
    {
        "name": "FrontEnd Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "frontend developer",
        "id": "O-6067",
        "parentId": "O-6065",
        "size": ""
    },
    {
        "name": "DevOps Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "devops developer",
        "id": "O-6068",
        "parentId": "O-6065",
        "size": ""
    },
    {
        "name": "BA Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "ba developer",
        "id": "O-6069",
        "parentId": "O-6065",
        "size": ""
    },
    {
        "name": "QA Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "qa developer",
        "id": "O-6070",
        "parentId": "O-6065",
        "size": ""
    },
    {
        "name": "UI/UX Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "ui/ux developer",
        "id": "O-6071",
        "parentId": "O-6065",
        "size": ""
    },
    //
    // Averages Groups
    {
        "name": "Above Average Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "above average developer",
        "id": "O-6072",
        "parentId": "O-6066",
        "size": ""
    },
    {
        "name": "Middle Average Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "middle average developer",
        "id": "O-6073",
        "parentId": "O-6066",
        "size": ""
    },
    {
        "name": "Below Average Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "below average developer",
        "id": "O-6074",
        "parentId": "O-6066",
        "size": ""
    },
    //
    // Employees Groups will be added here
    {
        "name": "Admin - Backedn Developer",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "admin backend developer",
        "id": "O-6075",
        "parentId": "O-6072",
        "size": ""
    },
    {
        "name": "Python - Backedn Developer",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "python backend developer",
        "id": "O-6076",
        "parentId": "O-6072",
        "size": ""
    },
    {
        "name": "Manager - Backedn Developer",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "manager backend developer",
        "id": "O-6077",
        "parentId": "O-6072",
        "size": ""
    },
    {
        "name": "GO - Backedn Developer",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "go backend developer",
        "id": "O-6078",
        "parentId": "O-6072",
        "size": ""
    },
    {
        "name": "Ruby - Backedn Developer",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "ruby backend developer",
        "id": "O-6079",
        "parentId": "O-6072",
        "size": ""
    },
    {
        "name": "Nodejs - Backedn Developer",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "nodjes backend developer",
        "id": "O-6080",
        "parentId": "O-6072",
        "size": ""
    },
    //
    // Averages Groups
    {
        "name": "Above Average Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "above average developer",
        "id": "O-6081",
        "parentId": "O-6076",
        "size": ""
    },
    {
        "name": "Middle Average Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "middle average developer",
        "id": "O-6082",
        "parentId": "O-6076",
        "size": ""
    },
    {
        "name": "Below Average Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "below average developer",
        "id": "O-6083",
        "parentId": "O-6076",
        "size": ""
    },
    //
    // Employees Groups will be added here
    {
        "name": "Intern - Backedn Developer",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "intern backend developer",
        "id": "O-6084",
        "parentId": "O-6083",
        "size": ""
    },
    {
        "name": "Intern - Backedn Developer",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "Ceo,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "intern backend developer",
        "id": "O-6085",
        "parentId": "O-6083",
        "size": ""
    }
]
//
//
var chart;
var dataFlattened_;
d3.csv('https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv').then((dataFlattened) => {
    dataFlattened = test_data;
    // 
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
    //
    if (d.data._upToTheRootHighlighted) {
        d3.select(this).raise();
    }
    })
    .nodeContent(function (d, i, arr, state) {
        //
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
