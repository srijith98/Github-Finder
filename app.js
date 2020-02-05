//Instantiate GitHub
const github = new GitHub(); 

//Get search input
const searchInput = document.getElementById('search-user');

//Add event listener for search input
searchInput.addEventListener('keyup', (e) => {
    const userInput = searchInput.value;
    if (userInput !== '') {
        github.getUser(userInput)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    //Show alert
                    alert('Profile not found')
                } else {
                    // Show profile
                }
            })
    } else {
        // Clear profile
    }
})