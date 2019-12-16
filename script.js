$(document).ready(onReady);
let employeeArray = [];
let totalAnnualSalary = 0;

function onReady(){
    $('#submit').on('click', handleSubmit);
    $('#tableBody').on('click', '#delete', deleteEmployee);
}

function handleSubmit(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let empId = $('#empId').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    let employee = new Employee(firstName, lastName, empId, title, annualSalary)
    employeeArray.push(employee);
    displayEmployees();
}

class Employee{
    constructor(firstNameParam, lastNameParam, idParam, titleParam, salaryParam){
        this.firstName = firstNameParam;
        this.lastName = lastNameParam;
        this.empId = idParam;
        this.title = titleParam;
        this.annualSalary = salaryParam;
    }
}

function displayEmployees(){
    $('#tableBody').empty();
    totalAnnualSalary = 0;
    for(let i = 0; i < employeeArray.length; i++ ){
        totalAnnualSalary += Number(employeeArray[i].annualSalary);
        console.log('totalAnnualSalary', totalAnnualSalary);

        $('#tableBody').append(
            `
            <tr>
                <td>${employeeArray[i].firstName}</td>
                <td>${employeeArray[i].lastName}</td>
                <td>${employeeArray[i].empId}</td>
                <td>${employeeArray[i].title}</td>
                <td>${employeeArray[i].annualSalary}</td>
                <td><button id="delete" class="${i}">Delete</button></td>
            </tr>
            `
        )
    }
    displayMonthlySalary();
}

function displayMonthlySalary(){
    let monthlySalary = totalAnnualSalary / 12;
    $('#monthlySalary').text(monthlySalary);
    if(monthlySalary >= 10){
        $('#monthlySalary').addClass('red');
    }
}


function deleteEmployee(){
    let employeeId = Number($(this).attr('class'));
    employeeArray.splice(employeeId, 1);
    displayEmployees();
}