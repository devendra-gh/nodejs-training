const fs = require('fs');
const argv = require('yargs').argv;

var Employees = JSON.parse(fs.readFileSync(
    'JSON/Employees.json',
    {encoding: 'utf-8'},
    function (err) {
        if (err) throw err;
    }
));

switch (argv.operation) {
    case "add":
        addEmployeeRecard(argv);
        break;
    case "delete":
        deleteEmployeeRecard(argv);
        break;
    case "view":
        viewRecord(argv);
        break;
    case "viewAll":
        viewAllRecard();
        break;
    default:
        console.log('Invalid parameters :)');
}

function addEmployeeRecard(emp) {
    emp = checkEmployee(emp);

    if(emp != null){
        Employees.push({
            name: emp.name,
            age: emp.age,
            company: emp.company
        });

        writeAtEmployeeFile(Employees);

        console.log('Added employee Record successfully');
    }
}

function checkEmployee(emp) {
    Employees.map(function (item) {
        if (emp.name && emp.name === item.name) {
            emp = null;
            console.log('Already Exits', item.name);
        }
    });
    return emp;
}

function writeAtEmployeeFile(employees) {
    fs.writeFileSync(
        'JSON/Employees.json',
        JSON.stringify(employees),
        {encoding: 'utf-8'},
        function (err) {
            if (err) throw err;
        }
    );
}

function deleteEmployeeRecard(emp) {
    var dataFound = false;
    Employees.map(function (item, index) {
        if (emp.name && emp.name === item.name) {
            Employees.splice(index, 1);
            writeAtEmployeeFile(Employees);

            dataFound = true;
            console.log('Deleted Employee Record', item.name);
        }
    });
    if(!dataFound){
        console.log('Employee does not found');
    }
}

function viewRecord(emp) {
    var dataFound = false;
    Employees.map(function (item) {
        if (emp.name && emp.name === item.name) {
            dataFound = true;
            console.log('Employee record found :)', item);
        }
    });
    if(!dataFound){
        console.log('Employee does not found :(');
    }
}

function viewAllRecard() {
    console.log('Following Employee record found');
    Employees.map(function (item) {
        console.log('\nName: ', item.name);
        console.log('Age: ', item.age);
        console.log('Company: ', item.company);
    });
}