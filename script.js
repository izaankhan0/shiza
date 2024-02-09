// Add this to your script.js file or wherever your scripts are defined
document.addEventListener('mousemove', function (e) {
    var heart = document.querySelector('.custom-cursor');
    var x = e.clientX;
    var y = e.clientY;

    // Add a 0.1-second delay using setTimeout
    setTimeout(function () {
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
    }, 100);
});

// Add this to your script.js file or wherever your scripts are defined
document.addEventListener('scroll', function () {
    var header = document.querySelector('nav');
    var scrollPosition = window.scrollY;

    // Adjust this value based on when you want the color change to happen
    if (scrollPosition > 100) {
        header.style.backgroundColor = '#410000'; /* Set the new background color */
    } else {
        header.style.backgroundColor = 'transparent'; /* Set the initial background color */
    }
});
