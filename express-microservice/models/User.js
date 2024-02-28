class User {
    constructor(name, surname, username, password, email, userType) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.userType = userType;
        this.createdAt = new Date();
        this.deletedAt = null;
    }
}

module.exports = User;
