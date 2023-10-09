Array.prototype.myCustomFeature = "Cool feature!";

var arr = ["Warzone", "Modern Warfare", "Black Ops"];

for (var prop in arr) {
  console.log(prop + ": " + arr[prop]);
}
