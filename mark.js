///////////////////////////////////////
// Add current time to page Footer

// Store a pointer to the .clock element
const clock = document.querySelector('.clock');

// Write the date and time to the page
const tickTock = () => {

    // Get unformatted Date
    const currentTime = new Date();

    // Get Date
    const date = currentTime.toDateString();

    // Get current hours,minutes,seconds
    const h = currentTime.getHours()
    const m = currentTime.getMinutes();
    const s = currentTime.getSeconds();

    // Build time string including leading zeroes
    var writeTime = `${date} - `;
    if (h<10) {writeTime += "0";}
        writeTime += h + ":";
    if (m<10) {writeTime += "0";}
        writeTime += m + ":";
    if (s<10) {writeTime += "0";}
        writeTime += s;

    // Inject time string into .clock element
    clock.innerHTML = writeTime;

}

// Call tickTock on page load, so time appears immediately
tickTock();

// Then call tickTock every 1000ms, so time updates every second
setInterval(tickTock, 1000)




/////////////////////////////
// Display a random MarkFax

// Store the 2nd paragraph of the .aside element in a variable
var asidePar = document.querySelector('.aside > p:nth-child(2)');

// Populate an array with some random facts
var factsList = [
    "Mark spent a summer working as a Bingo Caller on Worthing's sea front.",
    "Mark once danced with Vic Reeves & Bob Mortimer at Manchester's infamous Ha&#xe7ienda nightclub.",
    "Mark follows a strict vegan diet, but will not eat cucumbers.",
    "Mark assisted when barely-famous writer Will Self had a blocked toilet.",
    "Mark is very colourblind and relies on checking RGB values whenever possible.",
    "Mark's favourite coffee is an 'Oatmilk Flat White with an Extra Shot of Espresso'.",
    "Mark once crossed a busy road to avoid acknowledging members of 70's pop combo 'Genesis'.",
    "Mark produced radio jingles for legendary techno-pioneers '808 State'.",
    "Mark's favourite animal is the Whippet.",
    "Mark's favourite vegetable is Brocolli.",
    "Mark used to be terrified of Moths but now experiences only moderate anxiety unless the moth is particularly large.",
    "Mark enjoys the heady scent of a hot greenhouse full of tomato plants.",
    "Mark was once charged by an elephant. Luckily the elephant turned out to be bluffing.",
    "Mark has a collection of over 150 board games. None of them are Monopoly.",
    "Mark has lived in a windmill."
];

function writeRandomFax(){
    // Select a random fact
    var numFacts = factsList.length;
    var rand = Math.floor(Math.random()*numFacts);

    // Inject into the .aside element
    asidePar.innerHTML = factsList[rand];
}

// Call RandomFax on pageload
writeRandomFax();


// Write a new random fact if the user clicks in the .aside element
const aside = document.querySelector('.aside');

aside.addEventListener('click',() =>{
    writeRandomFax();
})



//////////////////////////////////////////////////////////////////
// Add a Click eventListener to all of the project thumbnails
// and display relevant info in the section below the thumbnails

// Create Nodelist of all the li tags within the ul.thumbnail element
const thumbnails = document.querySelectorAll('ul.thumbnails li');

// Loop through the Nodelist and add a Click EventListener
thumbnails.forEach(function(thumbnail,current) {
    thumbnail.addEventListener('click', () => {
        
        // When the thumbnail li is clicked...

        // Hide all elements with a visible class
        var visibles = document.getElementsByClassName("visible");
        for(var i=0; i < visibles.length; i++){
            visibles[i].classList.replace("visible","hidden");
        }
              
        // Make the relevant info block visible
        var clickedId = "info_" + (current + 1);
        var clickedElement = document.getElementById(clickedId);
        clickedElement.classList.replace("hidden","visible");
        
        
        //console.log(thumbnail,clickedId);
        
    })
})





