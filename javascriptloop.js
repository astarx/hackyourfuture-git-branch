for (var s = 1; s <= 100; s++) {
  console.log(s);
  if (s % 3 == 0 && s % 5 == 0) {
    console.log("HackYourFuture");
  } else if (s % 3 == 0) {
    console.log("Hack");
  } else if (s % 5 == 0) {
    console.log("Future");
  }
}