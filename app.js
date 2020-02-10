//Instantiate GitHub
const github = new GitHub;

// Instantiate UI
const ui = new UI;

//Get search input
const searchInput = document.getElementById('search-user');

//Add event listener for search input
searchInput.addEventListener('keyup', (e) => {
    const userInput = searchInput.value;
    if (userInput !== '') {
        github.getUser(userInput)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Clear profile
                    ui.clearProfile();
                    //Show alert
                    ui.showAlert('User not found!', 'alert alert-danger');
                } else {
                    //Clear alert if present
                    ui.clearAlert();
                    // Show profile
                    ui.showProfile(data.profile);
                    // Show repos
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
})