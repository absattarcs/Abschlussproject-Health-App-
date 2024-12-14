document.getElementById('calculator-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Input values
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const age = parseInt(document.getElementById('age').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // BMR calculation (Mifflin-St Jeor Equation)
  let bmr;
  if (gender === 'female') {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  }

  // TDEE calculation
  const tdee = bmr * activity;

  // Convert kcal to kJ
  const bmrKJ = bmr * 4.184;
  const tdeeKJ = tdee * 4.184;

  // Update the results table
  document.getElementById('bmr-kcal').textContent = bmr.toFixed(2);
  document.getElementById('bmr-kj').textContent = bmrKJ.toFixed(2);
  document.getElementById('tdee-kcal').textContent = tdee.toFixed(2);
  document.getElementById('tdee-kj').textContent = tdeeKJ.toFixed(2);
});