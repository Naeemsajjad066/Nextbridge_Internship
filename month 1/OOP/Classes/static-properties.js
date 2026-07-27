class User{
    static totalUsers=0;
    constructor(name){
        this.name=name;
        User.totalUsers++;
    }

}

new User("Naeem")
new User("Waseem")
new User("Usama")

console.log(`Total Users: ${User.totalUsers}`)