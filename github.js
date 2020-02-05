class GitHub {
    constructor() {
        this.client_id = '65fbf690c7e0f19b81b0';
        this.client_secret = '6aeda62185e899131012a8215af81801145ed947';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            //Similar to profile : profile
            profile
        }
    }
}