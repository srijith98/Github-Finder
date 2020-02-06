class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class = "card card-body mb-3">
                <div class = "row">
                    <div class = "col-md-3">
                        <img class = "img-fluid mb-2" src = "${user.avatar_url}">
                        <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class = "col-md-9">
                        <span class = "badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class = "badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class = "badge badge-success">Followers: ${user.followers}</span>
                        <span class = "badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class = "list-group">
                            <li class = "list-group-item">Company: ${user.company}</li>
                            <li class = "list-group-item">Website/Blog: ${user.blog}</li>
                            <li class = "list-group-item">Location: ${user.location}</li>
                            <li class = "list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class = "page-heading mb-3">Latest Repos</h3>
            <div id = "repos"></div>
        `;
    }

    //Show alert
    showAlert(message, classes) {
        //Check if alert is already present
        const alertElement = document.querySelector('.alert');
        if(!alertElement) {
            const alertDiv = document.createElement('div');
            alertDiv.className = classes;
            alertDiv.appendChild(document.createTextNode(message));
            const searchContainer = document.querySelector('.search-container');
            const search = document.querySelector('.search');
            searchContainer.insertBefore(alertDiv, search);
            
        }
        
    }

    //Clear alert
    clearAlert() {
        const alertELement = document.querySelector('.alert');
        if(alertELement)
            alertELement.remove();
    }

    //Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}