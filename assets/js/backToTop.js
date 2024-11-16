// Show the button when the user scrolls down
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  // You can change the scroll threshold here
        $('#btn-back-to-top').fadeIn(); // Show the button
    } else {
        $('#btn-back-to-top').fadeOut(); // Hide the button
    }
});

// Scroll to top when the button is clicked
$('#btn-back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');  // Scroll to the top
    return false;  // Prevent default action (useful for anchor links)
});
