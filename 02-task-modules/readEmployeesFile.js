const fs = require('fs');

var Employees = JSON.parse(fs.readFileSync(
    'JSON/Employees.json',
    {encoding: 'utf-8'},
    function (err) {
        if (err) throw err;
    }
));

module.exports = {
    Employees: Employees
};