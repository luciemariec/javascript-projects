//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
      }
      average() {
        let total = 0;
        this.scores.forEach((score) => (total += score));
        let average = total / this.scores.length;
        return Math.round(average * 10)/10;
      }
      status() {
        let averageScore = this.average();
        if (averageScore >= 90) {
            return 'Accepted';
        }  else if (averageScore >= 80 && averageScore < 90) {
            return 'Reserve';
        } else if (averageScore >= 70 && averageScore < 80) {
            return 'Probationary';
        }  else {
            return 'Rejected';
        }
      }
 }

 let animal1 = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
 let animal2 = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
 let animal3 = new CrewCandidate('Glad Gator', 225, [75,78,62]);
 
 //console.log(animal1);
 //console.log(animal2);
 //console.log(animal3);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
animal1.addScore(83);
//console.log(animal1.scores);

console.log(`${animal1.name} earned an average test score of ${animal1.average()}% and has a status of ${animal1.status()}.`);
console.log(`${animal2.name} earned an average test score of ${animal2.average()}% and has a status of ${animal2.status()}.`);
console.log(`${animal3.name} earned an average test score of ${animal3.average()}% and has a status of ${animal3.status()}.`);

//console.log(animal2.average());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.