// Write your solution in this file!
/*To start, assign an `employee` variable to an `Object` containing
`name` and `streetAddress` keys; you can use whatever values you like. Use
literal syntax to create your `Object`. Various updates will be applied to this
variable (destructively and non-destructively) in this lab.*/
let employee = {
    name: 'Anissa',
    streetAdress: 'Las Olas',
    DateofBirth: '1993',
    Wage: '100,000',
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(obj, key){ 
    
    let newEmployee = {...obj};
    delete newEmployee[key]
    return newEmployee
};
function  destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key]
    return employee
}



