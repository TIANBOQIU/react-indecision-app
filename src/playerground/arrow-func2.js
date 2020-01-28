// argument object is no longer bound with arrow func
function add(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

// this keyword is no longer bound

// const user = {
//   name: "Andrew",
//   cities: ["Philadelphia", "New York", "Bublin"],
//   printPlacesLived: function() {
//     // console.log(this.name);
//     // console.log(this.cities);
//     this.cities.forEach(city => {
//       console.log(this.name + " has lived in " + city);
//     });
//   }
// };
const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Bublin"],
  printPlacesLived() {
    // console.log(this.name);
    // console.log(this.cities);
    // this.cities.forEach(city => {
    //   console.log(this.name + " has lived in " + city);
    // });
    const msg = this.cities.map(city => city.toUpperCase());
    return msg;
  }
};

console.log(user.printPlacesLived());
