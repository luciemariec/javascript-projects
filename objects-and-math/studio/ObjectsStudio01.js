let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedIDs = []
// Code your selectRandomEntry function here:
function selectRandomEntry(idNumbers){
  let index = Math.floor(Math.random()*idNumbers.length);
  return idNumbers[index];
}
for (i=0; i < 3; i++){
  let randomID = selectRandomEntry(idNumbers);
  while (selectedIDs.includes(randomID)) {
    randomID = selectRandomEntry(idNumbers);
  }
  selectedIDs.push(randomID);
}
console.log(selectedIDs);

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};
// Code your buildCrewArray function here:
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
function buildCrewArray(selectedIDs, candidates) {
  let crew = [];

  for (let id of selectedIDs) {
    for (let candidate of candidates) {
      if (candidate.astronautID === id) {
        crew.push(candidate.name);
        break;
      }
    }
  }

  return crew;
}
let crew = buildCrewArray(selectedIDs, animals);
// Code your template literal and console.log statements:
console.log(`${crew.join(', ')} are going to space!`);