const argv = require('yargs').argv;
const importEmp = require('./readEmployeesFile');
const importAddEmp = require('./addEmployeeRecard');
const importDeleteEmp = require('./deleteEmployeeRecord');
const importViewEmp = require('./viewEmployee');
const importViewAllEmp = require('./viewAllEmployee');

const Employees = importEmp.Employees;

switch (argv.operation) {
    case "add":
        importAddEmp.addEmployeeRecard(argv, Employees);
        break;
    case "delete":
        importDeleteEmp.deleteEmployeeRecard(argv, Employees);
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
