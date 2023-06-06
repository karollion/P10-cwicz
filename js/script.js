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
