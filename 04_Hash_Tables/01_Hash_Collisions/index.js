let user = {
    age: 24,
    name: "Mike",
    swim: true,
    job: function() {
        console.log("Engineer");
    }
}

console.log(user.age); // O(1)
user.hobby = "playing games"; // O(1)
console.log(user); // O(1)
user.job(); // O(1)
