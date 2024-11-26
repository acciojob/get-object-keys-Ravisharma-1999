// Create an object called student
const student = {
    name: "Alice"
};

// Add a method to Object prototype
Object.prototype.getKeys = function () {
    return Object.keys(this);
};

// Test the getKeys method
console.log("Keys in the student object:", student.getKeys()); // Output: ["name"]

// Log additional output after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const result = student.getKeys();
    console.log("getKeys() Output after DOM load:", result); // Output: ["name"]
});
