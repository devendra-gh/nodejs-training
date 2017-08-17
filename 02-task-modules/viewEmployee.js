const viewEmployee = function (emp, Employees) {
    var dataFound = false;
    Employees.map(function (item) {
        if (emp.name && emp.name === item.name) {
            dataFound = true;
            console.log(
                'Employee record found',
                '\n\tName: ', item.name,
                '\n\tAge: ', item.age,
                '\n\tCompany: ', item.company
            );
        }
    });
    if (!dataFound) {
        console.log('Employee does not found :(');
    }
};

module.exports = {
    viewEmployee: viewEmployee
};