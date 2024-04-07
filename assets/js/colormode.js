// based on https://ryanfeigenbaum.com/dark-mode/.

function toggleColorMode(e) {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light--hidden") && e.currentTarget.classList.contains("dark--hidden")) {
    	// Sets the custom HTML attribute
    	document.documentElement.setAttribute("color-mode", "light");

		//Sets the user's preference in local storage
		localStorage.setItem("color-mode", "light")
		return;
	} else if (e.currentTarget.classList.contains("dark--hidden") && e.currentTarget.classList.contains("user--hidden")) {
        /* Switch to Dark Mode
        Sets the custom HTML attribute */
        document.documentElement.setAttribute("color-mode", "dark");

        // Sets the user's preference in local storage
        localStorage.setItem("color-mode", "dark");
    } else {
        /* Switch to User Mode
        Sets the custom HTML attribute */
        document.documentElement.setAttribute("color-mode", "user");

        // Sets the user's preference in local storage
        localStorage.setItem("color-mode", "user");
    }
};

// Get the buttons in the DOM
const toggleColorButtons = document.querySelectorAll(".color-mode__btn");

// Set up event listeners
toggleColorButtons.forEach(btn => {
    btn.addEventListener("click", toggleColorMode);
});

if ("color-mode" in localStorage) {
    document.documentElement.setAttribute('color-mode', localStorage.getItem('color-mode'));
}
