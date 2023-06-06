{
  /* Remove men names from table (girls names end in "a" */
  const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
  console.log(names);

  for(let name of names){
    const letters = name.length;
    const lastLetter = name.charAt(letters-1);
    console.log(name);
    console.log(lastLetter);
    const indexOfName = names.indexOf(name);
    if(lastLetter !== 'a'){
      names.splice(indexOfName, 1);
    }

  }
  console.log(names);
}
