// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const survivedSpecimenNum = [];
const survivedSpecimen = [];
const percentageSimilarity = [];
const relatedSpecimenNum = [];
const relatedSpecimen = [];

const pAequorFactory = (_specimenNum, dna) => {
  return {
    _specimenNum,
    get specimenNum() {
      return this._specimenNum;
    },
    dna,
    mutate() {
      const random = Math.floor(Math.random() * 15);
      const randomDna = this.dna[Math.floor(Math.random() * 15)];
      const newDna = returnRandBase();

      if (randomDna !== newDna) {
        this.dna[random] = newDna;

        return this.dna;
      } else {
        this.mutate();
      };
    },
    compareDna(otherSpecimen) {
      const thisDna = this.dna;
      const otherDna = otherSpecimen.dna;
      let similarity = 0;

      thisDna.forEach(function(element, index) {
        if (element === otherDna[index]) {
          similarity++;
        };
      });

      const percentage = Math.floor(similarity / thisDna.length * 100);
      return `${this.specimenNum} and ${otherSpecimen.specimenNum} have ${percentage}% DNA in common.`;
    },
    willLikelySurvive() {
      const thisDna = this.dna;
      let survivability = 0;

      thisDna.forEach(element => {
        if (element === "C" || element === "G") {
          survivability++;
        };
      });

      const percentage = Math.floor(survivability / thisDna.length * 100);

      if (percentage >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      const thisDna = this.dna;
      const complementDna = [];

      thisDna.forEach(element => {
        switch (true) {
          case element === "A":
            complementDna.push("T");
            break;
          case element === "T":
            complementDna.push("A");
            break;
          case element === "C":
            complementDna.push("G");
            break;
          case element === "G":
            complementDna.push("C");
            break;
        
          default:
            console.log("Something has gone wrong.");
            break;
        };
      });

      return complementDna;
    },
  };
};

const createSpicemen = () => {
  for (let index = 0; survivedSpecimen.length < 30; index++) {
    const specimen = pAequorFactory(`specimen №${index}`, mockUpStrand());
    if (specimen.willLikelySurvive() === true) {
      survivedSpecimenNum.push(specimen.specimenNum);
      survivedSpecimen.push(specimen);
    };
  };
};

createSpicemen();
console.log(survivedSpecimenNum);
console.log(survivedSpecimen);

// console.log(survivedSpecimen[0].dna);
// console.log(survivedSpecimen[0].complementStrand());
// console.log(survivedSpecimen[0].compareDna(survivedSpecimen[1]));

// survivedSpecimen[0].mutate();

// console.log(survivedSpecimen[0].dna);
// console.log(survivedSpecimen[0].complementStrand());
// console.log(survivedSpecimen[0].compareDna(survivedSpecimen[1]));

// console.log(survivedSpecimen[0].willLikelySurvive());