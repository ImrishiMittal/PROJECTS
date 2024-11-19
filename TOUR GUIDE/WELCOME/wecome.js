document.addEventListener("DOMContentLoaded", function() {
    // Get the user's name from localStorage (or default to 'Guest' if not found)
    const userName = localStorage.getItem('username') || 'Guest';  // Default to 'Guest' if no name is found

    // Display the user's name on the page
    document.getElementById('user-name').textContent = userName;
});
