const argv = require('yargs').argv;
const importEmp = require('./readEmployeesFile');
const importAddEmp = require('./addEmployee');
const importDeleteEmp = require('./deleteEmployee');
const importViewEmp = require('./viewEmployee');
const importViewAllEmp = require('./viewAllEmployee');

const Employees = importEmp.Employees;

switch (argv.operation) {
    case "add":
        importAddEmp.addEmployee(argv, Employees);
        break;
    case "delete":
        importDeleteEmp.deleteEmployee(argv, Employees);
        break;
    case "view":
        importViewEmp.viewEmployee(argv, Employees);
        break;
    case "viewAll":
        importViewAllEmp.viewAllEmployee(Employees);
        break;
    default:
        console.log('Invalid parameters :)');
}
