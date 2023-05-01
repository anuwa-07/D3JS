// Add the Test data
const test_data = [
    {
        "area": "Department: ",
        "click_enable": "no",
        "depth": 0,
        "enable_mgr_view": "no",
        "id": "main-00000",
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Main Org Root",
        "office": "prodmite",
        "parentId": "",
        "positionName": "Department Root",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "America/Los_Angeles",
        "type": "root"
    },
    {
        "area": "Above 75",
        "click_enable": "no",
        "enable_mgr_view": "no",
        "id": "Grp-Above-266049",
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Above Average.",
        "office": "prodmite",
        "parentId": 266049,
        "positionName": "Prodoscore above 75",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "America/Los_Angeles",
        "type": "average"
    },
    {
        "area": "Prodoscore: 88",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266050,
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "David Ricardo",
        "office": "Domain: prodmite",
        "parentId": "Grp-Above-266049",
        "positionName": "Manager",
        "profileUrl": "#employee/266050",
        "score": 88,
        "size": "",
        "tags": "America/Los_Angeles, Visible User",
        "type": "employee"
    },
    {
        "area": "Prodoscore: 92",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266052,
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "Vijay Labaen",
        "office": "Domain: prodmite",
        "parentId": "Grp-Above-266049",
        "positionName": "IT",
        "profileUrl": "#employee/266052",
        "score": 92,
        "size": "",
        "tags": "America/Los_Angeles, Visible User",
        "type": "employee"
    },
    {
        "area": "Below 40",
        "click_enable": "no",
        "enable_mgr_view": "no",
        "id": "Grp-Below-266049",
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Below Average.",
        "office": "prodmite",
        "parentId": 266049,
        "positionName": "Prodoscore below 40",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "America/New_York",
        "type": "average"
    },
    {
        "area": "Prodoscore: 24",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266274,
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "John Martinez",
        "office": "Domain: prodmite",
        "parentId": "Grp-Below-266049",
        "positionName": "IT",
        "profileUrl": "#employee/266274",
        "score": 24,
        "size": "",
        "tags": "America/New_York, Visible User",
        "type": "employee"
    },
    {
        "area": "Prodoscore: 87",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266275,
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Byron Blodgett",
        "office": "Domain: prodmite",
        "parentId": "Grp-Above-266049",
        "positionName": "IT",
        "profileUrl": "#employee/266275",
        "score": 87,
        "size": "",
        "tags": "America/New_York, Visible User",
        "type": "employee"
    },
    {
        "area": "Prodoscore: 86",
        "click_enable": "yes",
        "enable_mgr_view": "yes",
        "id": 266049,
        "imageUrl": " ",
        "isLoggedUser": true,
        "name": "Dason Test",
        "office": "Domain: prodmite",
        "parentId": "main-0001-13",
        "positionName": "Administrator",
        "profileUrl": "#employee/266049",
        "score": 86,
        "size": "",
        "tags": "America/Los_Angeles, Visible User",
        "type": "employee"
    },
    {
        "area": "Below 40",
        "click_enable": "no",
        "enable_mgr_view": "no",
        "id": "Grp-Below-266051",
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Below Average.",
        "office": "prodmite",
        "parentId": 266051,
        "positionName": "Prodoscore below 40",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "America/Los_Angeles",
        "type": "average"
    },
    {
        "area": "Prodoscore: 22",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266054,
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "vijay",
        "office": "Domain: prodmite",
        "parentId": "Grp-Below-266051",
        "positionName": "Administrator",
        "profileUrl": "#employee/266054",
        "score": 22,
        "size": "",
        "tags": "America/Los_Angeles, Visible User",
        "type": "employee"
    },
    {
        "area": "Prodoscore: 26",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266069,
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "test user",
        "office": "Domain: prodmite",
        "parentId": "Grp-Below-266051",
        "positionName": "IT",
        "profileUrl": "#employee/266069",
        "score": 26,
        "size": "",
        "tags": "UTC, Visible User",
        "type": "employee"
    },
    {
        "area": "Prodoscore: 25",
        "click_enable": "yes",
        "enable_mgr_view": "yes",
        "id": "266051",
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "Ruksha De Silva",
        "office": "Domain: prodmite",
        "parentId": "main-0003-15",
        "positionName": "Manager",
        "profileUrl": "#employee/266051",
        "score": 25,
        "size": "",
        "tags": "America/Los_Angeles, Visible User",
        "type": "employee"
    },
    {
        "area": "Below 40",
        "click_enable": "no",
        "enable_mgr_view": "no",
        "id": "Grp-Below-266053",
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Below Average.",
        "office": "prodmite",
        "parentId": 266053,
        "positionName": "Prodoscore below 40",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "UTC",
        "type": "average"
    },
    {
        "area": "Prodoscore: 23",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266070,
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "TestQA QA",
        "office": "Domain: prodmite",
        "parentId": "Grp-Below-266053",
        "positionName": "Manager",
        "profileUrl": "#employee/266070",
        "score": 23,
        "size": "",
        "tags": "UTC, Visible User",
        "type": "employee"
    },
    {
        "area": "Prodoscore: 25",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266072,
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "App user ",
        "office": "Domain: prodmite",
        "parentId": "Grp-Below-266053",
        "positionName": "Administrator",
        "profileUrl": "#employee/266072",
        "score": 25,
        "size": "",
        "tags": "America/Los_Angeles, Visible User",
        "type": "employee"
    },
    {
        "area": "Prodoscore: 24",
        "click_enable": "yes",
        "enable_mgr_view": "no",
        "id": 266123,
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "Manager (App user)",
        "office": "Domain: prodmite",
        "parentId": "Grp-Below-266053",
        "positionName": "IT",
        "profileUrl": "#employee/266123",
        "score": 24,
        "size": "",
        "tags": "America/Los_Angeles, Visible User",
        "type": "employee"
    },
    {
        "area": "Prodoscore: 22",
        "click_enable": "yes",
        "enable_mgr_view": "yes",
        "id": 266053,
        "imageUrl": "",
        "isLoggedUser": false,
        "name": "Vindula Senanayake",
        "office": "Domain: prodmite",
        "parentId": "main-0003-15",
        "positionName": "Administrator",
        "profileUrl": "#employee/266053",
        "score": 22,
        "size": "",
        "tags": "America/Los_Angeles, Visible User",
        "type": "employee"
    },
    {
        "area": "Below 40",
        "click_enable": "no",
        "enable_mgr_view": "no",
        "id": "main-0001-13",
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Above Average.",
        "office": "prodmite",
        "parentId": 13,
        "positionName": "Prodoscore below 40",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "America/Los_Angeles",
        "type": "average"
    },
    {
        "area": "Below 40",
        "click_enable": "no",
        "enable_mgr_view": "no",
        "id": "main-0003-15",
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Below Average.",
        "office": "prodmite",
        "parentId": 15,
        "positionName": "Prodoscore below 40",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "America/Los_Angeles",
        "type": "average"
    },
    {
        "area": "Organization Department.",
        "click_enable": "no",
        "enable_mgr_view": "no",
        "id": 13,
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "Audit",
        "office": "prodmite",
        "parentId": "main-00000",
        "positionName": "Oranization: prodmite",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "America/Los_Angeles",
        "type": "department"
    },
    {
        "area": "Organization Department.",
        "click_enable": "no",
        "enable_mgr_view": "no",
        "id": 15,
        "imageUrl": null,
        "isLoggedUser": false,
        "name": "External Relations",
        "office": "prodmite",
        "parentId": "main-00000",
        "positionName": "Oranization: prodmite",
        "profileUrl": null,
        "score": -1,
        "size": "",
        "tags": "America/Los_Angeles",
        "type": "department"
    }
]
//
//
var chart;
var dataFlattened_;
const aboveAvgColor = '#7c7cfa;';
const belowAvgColor = '#ff0000';
const withinAvgColor = '#808080';


d3.csv('https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv').then((dataFlattened) => {
    //
    dataFlattened = test_data;
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
    .nodeHeight((d) => {
        if (d.data.type == "employee" || d.data.type == "root") return 140;
        return 110;
    })
    .nodeWidth((d) => {
        return 240;
    })
    .childrenMargin((d) => 90)
    .compactMarginBetween((d) => 65)
    .compactMarginPair((d) => 100)
    .neightbourMargin((a, b) => 50)
    .siblingsMargin((d) => 100)
    .buttonContent(({ node, state, d }) => {
        let background_color = '#000;' // black 
        if (node.data.type == "average"){
            background_color = belowAvgColor // red
            if (node.data.name.includes("Above"))
                // set background color to blue
                background_color = aboveAvgColor // blue
            if (node.data.name.includes("Within"))
                background_color = withinAvgColor // grey
        }
        return `<div class="top-below-arrowbuttons" style="color:#eef0f1;border-radius:5px;padding:4px;font-size:16px;margin:auto auto;background-color:${background_color}"> <span style="font-size:16px">${
            node.children
            ? `<i class="fas fa-angle-up"></i>`
            : `<i class="fas fa-angle-down"></i>`
        }</span> ${node.data._directSubordinates} </div>`;
    })
    .linkUpdate(function (d, i, arr) {
    d3.select(this)
        .attr('stroke', (d) =>
            d.data._upToTheRootHighlighted ? 'black' : 'black'
        )
        .attr('stroke-width', (d) =>
            d.data._upToTheRootHighlighted ? 10 : 1
        );
    //
    if (d.data._upToTheRootHighlighted) {
        d3.select(this).raise();
    }
    })
    .nodeContent(function (d, i, arr, state) {
        console.log(d);
        //
        let imageName = "dev.png";
        if (d.data.type == "root")
            imageName = "root.png";
        //
        let imageSrc = 'http://127.0.0.1:5500/First-Project/'+imageName; // replace with your image source URL

        // Here we can process the data as we need to show in below.

        // Process the name
        let nodeName = d.data.name;
        
        // process the position name
        let positionName = d.data.office;

        // process the prodoscore or small description
        let scoreOrDescription = "Prodoscore: " + d.data.score;
        if (d.data.type == "average" || d.data.type == "root")
            scoreOrDescription = d.data.positionName;
        else if (d.data.type == "department")
            scoreOrDescription = d.data.area;
        
        // For the Popup
        let tags = d.data.tags;
        let imageUrl = d.data.imageUrl;
        let subStyles = 'width:240px; height:100%;';
        //
        // Set the border color for the average nodes
        if (d.data.type == "average"){
            let borderColor = belowAvgColor;
            if (d.data.name.includes("Above"))
                borderColor = aboveAvgColor;
            if (d.data.name.includes("Within"))
                borderColor = withinAvgColor;
            // set border color
            subStyles += 'border: 2px solid' + borderColor + ';';
        }
        return `
            <div style="${subStyles}" class="node-main-div ${d.data.type}" onclick="nodeClicked('${imageUrl}', '${nodeName}', '${d.data.positionName}', '${scoreOrDescription}', '${d.data.office}', '${tags}', '${d.data.type}')">
                ${
                    // add image if only d.data.type == employee
                    d.data.type == "employee" || d.data.type == "root"
                        ? `<img src="${imageSrc}" class="node-profile-image" alt="Profile Image">`
                        : ''
                }
                <div class="pie-chart-wrapper"></div>
                <div class="node-main-userInfo">

                    <div class="node-user-name ${d.data.type}"> ${
                        nodeName || "No Content"
                    } </div>
                    <div class="node-user-positionName"> ${
                        positionName || "No Content"
                    } </div>
                    <div class="node-user-prodoscore"> ${
                        scoreOrDescription || "No Content"
                    } </div>
                </div>
            </div>
        `;
    })
    // Render the chart
    .render();


    const hierarchyChartPopup = document.querySelector('.hierarchy-chart-popup');
    const popupCloseButton = document.querySelector('.hierarchy-chart-popup .popup-close-btn');
    //
    // Define function to close the popup when clicked outside of it
    /* TODO: For now we donot need this functionality
    window.onclick = function(event) {
        if (event.target != hierarchyChartPopup && event.target.className != "pie-chart-wrapper") {
            hierarchyChartPopup.style.display = "none";
        }
    }
    */
    // Define function to close the popup when clicked close button
    popupCloseButton.addEventListener('click', function() {
        hierarchyChartPopup.style.display = "none";
    });

});
// 
// ========================================= Search Option process Func will Go here! =======================================================
// Search functionality
function displaySearchResults(results) {
    // Get a reference to the container element
    const container = document.getElementById("search-results");
  
    // Set max-height and overflow-y properties for container
    // container.style.maxHeight = "100px";
    // container.style.overflowY = "auto";
  
    // Clear any previous search results from the container
    container.innerHTML = "";
  
    // Loop through the search results and create HTML elements for each one
    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("search-result");
    
        const resultLinkWarpper = document.createElement("div");
        const resultLink = document.createElement("a");
        //
        resultLinkWarpper.classList.add("search-result-link-wrapper");
        resultLink.textContent = result.name;
        resultLink.href = result.profileUrl;
        resultLinkWarpper.appendChild(resultLink);
        resultDiv.appendChild(resultLinkWarpper);
    
        const button = document.createElement("button");
        const buttonIcon = document.createElement("i");
        buttonIcon.classList.add("fas");
        buttonIcon.classList.add("fa-route");
        //
        button.classList.add("search-content-locatebtn");
        button.appendChild(buttonIcon);
        button.addEventListener("click", () => {
            //
            let nodeid = result.id;
            chart.setHighlighted(nodeid).render();   
        });
        resultDiv.appendChild(button);
    
        container.appendChild(resultDiv);
    }
}
//
// Clear the search results
function clearSearch() {
    // Get a reference to the search results container element
    const container = document.getElementById("search-results");
    
    // Remove all child elements from the container
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    // Reset the search input value
    const searchInput = document.getElementById("search-input");
    searchInput.value = "";
}

// For the search onchange functionality
var searchTimeout;
function searchOnChange() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(function() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    //
    if (searchTerm.length === 0) {
      clearSearch();
      return;
    }
    //
    var filteredData = dataFlattened_.filter(function(d) {
      return d.name.toLowerCase().includes(searchTerm);
    });
    displaySearchResults(filteredData);
    //chart.data(filteredData).render();
  }, 200);
}

// ======================================== Search END here =======================================================




// ======================================== Node Click POPUP functionlaty =======================================================
// For the Node Clicked functionality
function nodeClicked(imageUrl, name, positionName, score, domain, tags, type) {
    if (type != "employee") 
        return;
    //
    let nodePopUp = document.querySelector('.hierarchy-chart-popup');
    //
    // Populate top section
    // hierarchyChart.querySelector('.image').src = imageUrl;
    nodePopUp.style.display = "block";
    nodePopUp.querySelector('.name').textContent = name;
    nodePopUp.querySelector('.job').textContent = positionName;
    nodePopUp.querySelector('.score').textContent = score;
    nodePopUp.querySelector('.domain').textContent = domain;
    //
    // Populate tags
    let tagsContainer = nodePopUp.querySelector('.tags');
    tagsContainer.innerHTML = ''; // clear existing tags
    tags = tags.split(", ");
    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        
        const iconElement = document.createElement('i');
        iconElement.classList.add('fas', 'fa-tag');
        
        const tagTextElement = document.createElement('span');
        tagTextElement.classList.add('tag-text');
        tagTextElement.textContent = tag;
        
        tagElement.appendChild(iconElement);
        tagElement.appendChild(tagTextElement);
        
        tagsContainer.appendChild(tagElement);
    });
}


// ======================================= POPUP Will End Here =========================================================



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
