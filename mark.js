
// Add current time to page Footer
const clock = document.querySelector('.clock');

const tickTock = () => {

    // Store unformatted Date
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

// Display a random MarkFax
var asidePar = document.querySelector('.aside > p:nth-child(2)');
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
    "Mark has a collection of over 150 board games.",
    "Mark has lived in  windmill."
];

var numFacts = factsList.length;
var rand = Math.floor(Math.random()*numFacts);

asidePar.innerHTML = factsList[rand];



// Add a Click eventListener to all of the project thumbnails
const thumbnails = document.querySelectorAll('ul.thumbnails li');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        //console.log(thumbnail);
    })
})





// Call tickTock on page load, so time appears immediately
tickTock();

// Call tickTock every 1000ms, so time updates every second
setInterval(tickTock, 1000)


