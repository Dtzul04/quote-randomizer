// Array of five quotes
let quotes = [
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "We do not remember days, we remember moments. -Cesare Pavese",
    "Life is far too important a thing ever to talk seriously about. - Oscar Wilde",
    "To affect the quality of the day, that is the highest of arts. - Henry David Thoreau"
];

// Asking the number from the user
let userNumber = prompt("Enter a number:");
userNumber = parseInt(userNumber);

// Using modulus to pick a quote
let index = userNumber % quotes.length;

// Displaying the chosen quote
document.getElementById("quote-section").innerHTML = "<p>" + quotes[index] + "</p>";

// Array of favorite websites
let websites = [
    "https://www.bbc.com",
    "https://www.netflix.com", 
    "https://www.google.com"
];

// Display original website list
let websiteList = document.getElementById('website-list');
websites.forEach(function(site) {
    websiteList.innerHTML += "<li><a href='" + site + "' target='_blank'>" + site + "</a></li>";
});

// Ask user for favorite website
let newSite = prompt("What is your favorite website? Provide a link");
websites.push(newSite);  
websites.shift();        

// Clear old list and display updated list
websiteList.innerHTML = "";
websites.forEach(function(site) {
    websiteList.innerHTML += "<li><a href='" + site + "' target='_blank'>" + site + "</a></li>";
});
