const viewAllEmployee = function(Employees) {
    console.log('Following Employee record found');
    Employees.map(function (item) {
        console.log(
            '\n\tName: ', item.name,
            '\n\tAge: ', item.age,
            '\n\tCompany: ', item.company
        );
    });
};

module.exports = {
    viewAllEmployee: viewAllEmployee
};