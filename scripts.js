/********************** Exercise 1 ***********************/

// Given the following code, write a for loop that pushes the names of all the magazine editors into the array, magazineEditors.

// Log the magazineEditors array when you're done to make sure you got it!

let magazineEditors = [];
let magazines = [
  {
    name: "Variety",
    editor: "Judy White",
    publicationCity: "New York",
    numberOfReaders: 2348120,
  },
  {
    name: "Newsweek",
    editor: "William Randle",
    publicationCity: "Washington DC",
    numberOfReaders: 890761,
  },
  {
    name: "Entertainment Weekly",
    editor: "Franklin Post",
    publicationCity: "Los Angeles",
    numberOfReaders: 1457854,
  },
  {
    name: "People",
    editor: "Abigail Smithers",
    publicationCity: "New York",
    numberOfReaders: 3345765,
  },
];


for (let i = 0; i < magazines.length; i += 1) {
  magazineEditors[i] = magazines[i].editor //the .split and .join were not needed for this exercise 

}

console.log(magazineEditors)

/********************** Exercise 2 ***********************/

let movieTheater = [
  {
    theater: "Theater1",
    movieName: "Titanic",
    duration: 190,
    genre: "Drama",
  },
  {
    theater: "Theater2",
    movieName: "Ace Ventura",
    duration: 90,
    genre: "Comedy",
  },
  {
    theater: "Theater3",
    movieName: "Inconvenient Truth",
    duration: 100,
    genre: "“Documentary”",
  },
  {
    theater: "Theater4",
    movieName: "The Notebook",
    duration: 120,
    genre: "Drama",
  },
  {
    theater: "Theater5",
    movieName: "Office Space",
    duration: 120,
    genre: "Comedy",
  },
  {
    theater: "Theater6",
    movieName: "Star Wars",
    duration: 140,
    genre: "Action",
  },  {
    theater: "Theater7",
    movieName: "Identity Theft",
    duration: 140,
    genre: "Comedy",
  },
];

// Loop through this collection to log to the console all of the theaters that are playing a comedy.
let collection = [];
let theaterComedy = [];
for (let i = 0; i < movieTheater.length; i++) {
  collection[i] = movieTheater[i].theater + ' ' +  movieTheater[i].genre.includes('Comedy');
      if(collection[i].includes('true')) {
        theaterComedy +=movieTheater[i].theater
        theaterComedy += ' ' 
      }
}

console.log(theaterComedy)
/********************** Exercise 3 ***********************/

let arrayNumbers = [0, 7, 10, 12, 13, 20, 23, 27, 30, 60, 67, 88];

// Loop through each of the elements in the array and only console log the numbers that are divisible by 10.

//console.log(arrayNumbers)

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 10 === 0) {
    console.log(arrayNumbers[i])}
}

/********************** Exercise 4 ***********************/

let arrayWords = [
  "To",
  "be",
  "or",
  "not",
  "to",
  "be,",
  "that",
  "is",
  "the",
  "question.",
];

//Use a loop to log this to the console as one string.

let sentence = []

for (let i = 0; i < arrayWords.length; i++) {
  sentence += arrayWords[i]
  if (i < arrayWords.length - 1) {
    sentence += ' '
  }

}
console.log(sentence)

/********************** BONUS EXERCISES ***********************/

/********************** Exercise 5 ***********************/

// Create an array of objects, where each object describes a book and has 3 properties: title (a string), author (a string), alreadyRead (a boolean to note if you've read it yet).

// Iterate through the array of books. For each book, log the book title and its author like so: "The Hobbit by J.R.R. Tolkien".

// Now use an if/else statement to change the output depending on whether you've read it yet or not. If you've read it, log a string: 'You already read "The Hobbit" by J.R.R. Tolkien'; if not, log a string: 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


let bookArray = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    alreadyRead: true
  },
  {
    title: 'Touching Spirit Bear',
    author: 'Ben Mikaelsen',
    alreadyRead: true
  },
  {
    title: 'The Wisdom of Wolves',
    author: 'Jim & Jamie Dutcher',
    alreadyRead: false
  },
  {
    title: 'A Long Walk Down a Winding Road',
    author: 'Sam Farmer',
    alreadyRead: false
  }
]

let bookIntro="";
for (let i = 0; i < bookArray.length; i++) {
bookIntro += (`${bookArray[i].title} by ${bookArray[i].author}\n`)

}

console.log(bookIntro)

/********************** Exercise 6 ***********************/

// Review the following code
let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Event schedule for each day
let eventSchedule = {
  Monday: "Yoga class at 8:00 AM",
  Tuesday: "Running club meetup at 6:30 PM",
  Wednesday: "Cooking workshop at 5:00 PM",
  Thursday: "Guitar lessons at 4:00 PM",
  Friday: "Movie night at 7:00 PM",
  Saturday: "Outdoor hike at 9:00 AM",
  Sunday: "Rest and relaxation day",
};

//console.log("Weekly Event Schedule\n");

// Log the schedule for each day of the week.






/********************** Exercise 7 ***********************/

// Loop through the array to calculate the average score

let scores = [85, 92, 78, 90, 88, 95];
let totalScore = 0;

// Your for loop here






let averageScore = totalScore / scores.length;
