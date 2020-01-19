const rory = {
    name: "Aurora Borealis",
    species: "East Nashville Black Dog",
    nicknames: ["Rory", "Ror Bor", "Puppy", "Bunny"],
    age: 10,
    bark: function () {     // Method
        window.alert("ARF!")
    },
    whine: function () {     // Method
        window.alert("**high pitched dog whine**")
    },
    pant: function () {     // Method
        window.alert("**tongue sticking out, heavy breathing**")
    },
    favoriteToys: [],
    toyPreference: function (toy, fav) {
        if (fav === true) {
            this.favoriteToys.push(toy);
        }
    }
};

rory.bark();
rory.whine();
rory.pant();

rory.toyPreference("donut", true);
rory.toyPreference("yarn", false);
rory.toyPreference("gator", true);

console.log(rory);

/* 

1. Give your pet a new key named favoriteToys whose
value is an empty array.

2. Now define another new key named play whose value
is a function with a single parameter named toy.

3. The function should determine if your pet liked the
toy, and if s/he does, then it should be added to the
favoriteToys array using the this keyword (see example above).

Here's an example. If your pet is a cat, then he likely only
likes furry toys, so you could put an if..then condition in
the play() method that checks if the word "fuzzy" is in the
argument value. If it is, it gets added to the array.

*/