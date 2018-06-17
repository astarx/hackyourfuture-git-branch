for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("HackYourFuture");
  } else if (i % 3 == 0) {
    console.log("Hack");
  } else if (i % 5 == 0) {
    console.log("Future");
  }
}