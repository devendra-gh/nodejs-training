const fs = require('fs');

const checkEmployee = function(emp, employees) {
    employees.map(function (item) {
        if (emp.name && emp.name === item.name) {
            emp = null;
            console.log('Already Exits', item.name);
        }
    });
    return emp;
};

const writeAtEmployeeFile = function(employees) {
    fs.writeFileSync(
        'JSON/Employees.json',
        JSON.stringify(employees),
        {encoding: 'utf-8'},
        function (err) {
            if (err) throw err;
        }
    );
};

module.exports = {
    checkEmployee : checkEmployee,
    writeAtEmployeeFile : writeAtEmployeeFile
};