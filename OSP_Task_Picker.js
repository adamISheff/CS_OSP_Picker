/*
  Enjoy this tool if you want.

  Steps:
  1. Add your team as an array of string names
  2. Add your own slides arrays
  3. Edit the function invokations at the end of the file with your desired inputs
  4. Run the file using node to get the randomized outputs!
*/


// This is the O'G team Kr8s, add your team to be represented
// Then make a pull request so you and your crew can live on forever!
const TeamKr8s = ['jmoney', 'Reland', 'Duke', 'Adam'];
const TeamMontyPython = ['King Arthur', 'Sir Gallahad', 'Black Knight', 'The Rabbit Monster', 'Knights Who Say Ni!']

// Decide which slides/subjects you are assigning here
const Kr8sMVPSlides  = ['Intro, Problem, Solution', 'MVP and Stretch Features', 'Why it will impress Senior Engineers', 'Technical Challenges'];

// Utility Function for retrieving a random integer between 0 and num - 1
const pickRandomIndex = (num) => {
  return Math.floor(Math.random() * num);
}

// Scrum master picker
const scrumPicker = (members = TeamKr8s, weeks = 4) => {
  // Make a copy of the input array to avoid mutation
  ourMembers = members.slice();
  
  let week = 1;
  while(week <= weeks) {
    const randomIndex = Math.floor(Math.random() * ourMembers.length);
    console.log(`Week ${week} scrum master will be... ${ourMembers[randomIndex]}`);

    week++;
    ourMembers.splice(randomIndex,1);

    // If there are more weeks than members refill our array with the original team
    if(!ourMembers.length) ourMembers = members.slice();
  }
}

// Deciding who will present each Section
// This is implemented recursively to make Reland happy...
const slidePicker = (members = TeamKr8s, slides, originalMembers = []) => {
    if(!slides.length) return;
    
    // Store original team in case there are more slides than team members
    // We will need to refill our members array in that situation
    if(originalMembers.length === 0) originalMembers = members.slice();
    if(members.length === 0) members = originalMembers.slice();

    // Make a copy of the input array to avoid mutation
    members = members.slice();

    const memberIndex = pickRandomIndex(members.length);
    console.log(members.splice(memberIndex,1)[0], ' will be presenting ', slides.shift());

    return slidePicker(members, slides, originalMembers);
}

// Update the function calls to pass in your team, number of weeks and slides
scrumPicker(TeamKr8s, 4);
slidePicker(TeamKr8s, Kr8sMVPSlides);