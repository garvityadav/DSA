const GCD_brute_force = () => {
  let num1 = 4,
    num2 = 8;
  let ans;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      ans = i;
    }
  }

  return console.log("The GCD of the two numbers is " + ans);
};

GCD_brute_force(); // brute force

const GCD_Euclidean_Theorem = (num1, num2) => {
  if (num2 == 0) {
    return console.log("The GCD of the two numbers is " + num1);
  }
  GCD_Euclidean_Theorem(num2, Math.floor(num1 % num2));
};

GCD_Euclidean_Theorem(32, 4);
