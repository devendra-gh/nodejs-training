const importHelper = require('./helper');

const deleteEmployeeRecard = function(emp, Employees) {
    var dataFound = false;
    Employees.map(function (item, index) {
        if (emp.name && emp.name === item.name) {
            Employees.splice(index, 1);
            importHelper.writeAtEmployeeFile(Employees);

            dataFound = true;
            console.log('Deleted Employee Record', item.name);
        }
    });
    if(!dataFound){
        console.log('Employee does not found');
    }
};

module.exports = {
    deleteEmployeeRecard: deleteEmployeeRecard
};