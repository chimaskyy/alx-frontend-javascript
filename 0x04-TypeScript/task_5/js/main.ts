interface MajorCredits {
    credits: number;
    brand: 'major'
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}

// tests
const majorSubject1: MajorCredits = { credits: 10, brand: "major" };
const majorSubject2: MajorCredits = { credits: 20, brand: "major" };
const minorSubject1: MinorCredits = { credits: 21, brand: "minor" };
const minorSubject2: MinorCredits = { credits: 34, brand: "minor" };
console.log(majorSubject1);
console.log(minorSubject1);

