const fs = require('fs');
const importHelper = require('./helper');

const addEmployee = function (emp, employees) {
    emp = importHelper.checkEmployee(emp, employees);

    if(emp != null){
        employees.push({
            name: emp.name,
            age: emp.age,
            company: emp.company
        });

        importHelper.writeAtEmployeeFile(employees);

        console.log('Added employee Record successfully');
    }
};

module.exports = {
    addEmployee: addEmployee
};