function bmiCalculator() {
  let height = parseFloat(document.querySelector("#height").value) / 100;
  let weight = parseFloat(document.querySelector("#weight").value);
  let bmi = weight / (height * height);
  let result = document.querySelector("#result");
  let category = "";

  if (isNaN(bmi)) {
    result.innerHTML = "Please input the field correctly!";
  } else {
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "OverWeight";
    } else {
      category = "Obesity";
    }

    result.innerHTML = `Your BMI is ${bmi.toFixed(1)} and your are in ${category}`;
  }
}
