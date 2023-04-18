const test_data = [
    {
        "name": "BackEnd Department",
        "area": "Corporate",
        "profileUrl": "http://example.com/employee/profile",
        "office": "CTO office",
        "tags": "backend developer,tag1,manager,cto",
        "isLoggedUser": "false",
        "positionName": "backend developer",
        "id": "O-6066",
        "parentId": "",
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
        "parentId": "",
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
        "parentId": "",
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
        "parentId": "",
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
        "parentId": "",
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
        "parentId": "",
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
        "parentId": "O-6076",
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
        "parentId": "O-6076",
        "size": ""
    }
]
