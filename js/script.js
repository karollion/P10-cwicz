{
  /* Remove men names from table (girls names end in "a" */
  const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];

  for(let name of names){
    const letters = name.length;
    const lastLetter = name.charAt(letters-1);
    const indexOfName = names.indexOf(name);
    if(lastLetter !== 'a'){
      names.splice(indexOfName, 1);
    }
  }
  //console.log(names);

  // const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
  // const filteredNames = [];

  // for(const name of names) {
  //   if(name.slice(-1) === 'a') {
  //     filteredNames.push(name);
  //   }
  // }
}

{
  /* Create 2 tables: employeesNames and employeesSalaries */
  const employees = {
    john: {
      name: 'John Doe',
      salary: 3000
    },
    amanda: {
      name: 'Amanda Doe',
      salary: 4000
    },
  }
  let employeesNames = [];
  let employeesSalaries = [];

  for(let employe in employees){
    const employer = employees[employe];

    // split name at ' ' and get first element
    // (John Doe -> ['John', 'Doe'] -> 'John')
    const name = employer.name.split(' ')[0];

    employeesNames.push(name);
    employeesSalaries.push(employer.salary);

    //console.log(employeesNames, employeesSalaries);
  }
}

{
  /* table: sum, max, min */
  const salaries = [2000, 3000, 1500, 6000, 3000];

  let sum = 0,
      max = 0,
      min = 99999999999;

  for(let element of salaries){
    sum += element;

    if(element > max){ max = element;}
    if(element < min){min = element;}
  }
  // console.log('sum: ', sum);
  // console.log('max: ', max);
  // console.log('min: ', min);
}

{
  /* create new function, it return new array that meets the condition ( min < salary < max ) */
  const employees = [
    { name: 'Amanda Doe', salary: 3000 },
    { name: 'John Doe', salary: 4000 },
    { name: 'Claire Downson', salary: 2000 },
    { name: 'Freddie Clarkson', salary: 6000 },
    { name: 'Thomas Delaney', salary: 8200 }
  ];

  const salaryMin = 2000;
  const salaryMax = 8000;

  const filterEmployees = function(employees, salaryMin, salaryMax){
    const employeesNew = [];

    for(const employerId in employees){
      const employer = employees[employerId];
      if(employer.salary > salaryMin && employer.salary < salaryMax){
        employeesNew.push(employer);
      }
    }
    return employeesNew;
  };

  const filteredEmployees = filterEmployees(employees, salaryMin, salaryMax);
  //console.log(filteredEmployees);
  }

{
  /* create function to show obiect */
  const obj = {
    firstName: 'John',
    lastName: 'Doe'
  }

  const show = function(obj){
    for(const paramId in obj){
      const param = obj[paramId];
      console.log(paramId +': ' + param);
    }
  }
  const showObiectParams = show(obj);
}
