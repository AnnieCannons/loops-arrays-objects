
/********************** Exercise 1 ***********************/

// Given the following code, write a for loop that pushes the names of all the magazine editors into the array, magazineEditors.

let magazineEditors = [ ];
const magazines = [
    {
        name: "Variety",
        editor: "Judy White",
        publicationCity: "New York",
        numberOfReaders: 2348120
    },
    {
        name: "Newsweek",
        editor: "William Randle",
        publicationCity: "Washington DC",
        numberOfReaders: 890761
    },
    {
        name: "Entertainment Weekly",
        editor: "Franklin Post",
        publicationCity: "Los Angeles",
        numberOfReaders: 1457854
    },
    {
        name: "People",
        editor: "Abigail Smithers",
        publicationCity: "New York",
        numberOfReaders: 3345765
    }
];



/********************** Exercise 2 ***********************/

const movieTheater = [
	{ 
        theater: "Theater1", 
        movieName: "Titanic", 
        duration: 190, 
        genre: "Drama"
    },
    { 
        theater: "Theater2", 
        movieName: "Ace Ventura", 
        duration: 90, 
        genre: "Comedy"
    },
    { 
        theater: "Theater3", 
        movieName: "Inconvenient Truth", 
        duration: 100, 
        genre: "“Documentary”"
    },
    { 
        theater: "Theater4", 
        movieName: "The Notebook", 
        duration: 120, 
        genre: "Drama"
    },
    { 
        theater: "Theater5", 
        movieName: "Office Space", 
        duration: 120, 
        genre: "Comedy"
    },
    { 
        theater: "Theater6", 
        movieName: "Star Wars", 
        duration: 140, 
        genre: "Action"
    }
];

// Loop through this collection to print all of the theaters that are playing a comedy.










/********************** Exercise 3 ***********************/

const arrayNumbers = [ 0, 7, 10, 12, 13, 20, 23, 27, 30, 60, 67, 88 ];

// Loop through each of the elements in the array and only console log the numbers that are divisible by 10.









/********************** Exercise 4 ***********************/

const arrayWords = [ "To", "be", "or", "not", "to", "be,","that", "is", "the", "question." ];

// Use a loop to log this to the console as one string.









/********************** Exercise 5 ***********************/

// Create an array of objects, where each object describes a book and has 3 properties: title (a string), author (a string), alreadyRead (a boolean to note if you've read it yet).

// Iterate through the array of books. For each book, log the book title and its author like so: "The Hobbit by J.R.R. Tolkien".







// Now use an if/else statement to change the output depending on whether you've read it yet or not. If you've read it, log a string: 'You already read "The Hobbit" by J.R.R. Tolkien'; if not, log a string: 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'





/********************** Exercise 6 ***********************/


// Review the following code
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Event schedule for each day
const eventSchedule = {
    'Monday': 'Yoga class at 8:00 AM',
    'Tuesday': 'Running club meetup at 6:30 PM',
    'Wednesday': 'Cooking workshop at 5:00 PM',
    'Thursday': 'Guitar lessons at 4:00 PM',
    'Friday': 'Movie night at 7:00 PM',
    'Saturday': 'Outdoor hike at 9:00 AM',
    'Sunday': 'Rest and relaxation day'
};

console.log("Weekly Event Schedule\n");

// Log the schedule for each day of the week. 












/********************** Exercise 7 ***********************/

// Loop through the array to calculate the average score

const scores = [85, 92, 78, 90, 88, 95];
let totalScore = 0;

// Your for loop here

const averageScore = totalScore / scores.length;

