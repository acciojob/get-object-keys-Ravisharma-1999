// Create a student object with a name property
const student = {
    name: "John Doe",
    age: 20,
    city: "New York"
};

// Add getKeys() method to the Object prototype
Object.prototype.getKeys = function () {
    return Object.keys(this);
};

// Example usage (this will be called and logged to the console)
console.log(student.getKeys()); // Logs: ["name", "age", "city"]
