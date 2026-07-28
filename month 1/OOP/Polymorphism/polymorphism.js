class Employee{
    calculatePay(){
        return 0
    }
}

class FullTimeEmployee extends Employee{
    calculatePay(){
        console.log("Full Time Employee: ")
        return 50000
    }
}

class PartTimeEmployee extends Employee{
    calculatePay(){
        console.log("Part Time Employee: ")
        return 40000
    }
}
class FreelanceEmployee extends Employee{
    calculatePay(){
        console.log("Freelancer Salary: ")
        return 25000
    }
}

const employees=[
    new FullTimeEmployee(),
    new PartTimeEmployee(),
    new FreelanceEmployee(),
]

for (const employee of employees){
    console.log(employee.calculatePay())
}