
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

// Add a Click eventListener to all of the project thumbnails
const thumbnails = document.querySelectorAll('ul.thumbnails li');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        console.log(thumbnail);
    })
})





// Call tickTock on page load, so time appears immediately
tickTock();

// Call tickTock every 1000ms, so time updates every second
setInterval(tickTock, 1000)


