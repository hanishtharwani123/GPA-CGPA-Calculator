const cgpa_calcultor = () => {
  let sem1c = parseFloat(document.getElementById("credit_no1").value);
  let sem2c = parseFloat(document.getElementById("credit_no2").value);
  let sem3c = parseFloat(document.getElementById("credit_no3").value);
  let sem4c = parseFloat(document.getElementById("credit_no4").value);
  let sem5c = parseFloat(document.getElementById("credit_no5").value);
  let sem6c = parseFloat(document.getElementById("credit_no6").value);
  let sem7c = parseFloat(document.getElementById("credit_no7").value);
  let sem8c = parseFloat(document.getElementById("credit_no8").value);
  let sem9c = parseFloat(document.getElementById("credit_no9").value);
  let sem10c = parseFloat(document.getElementById("credit_no10").value);

  let sem1g = document.getElementById("gpa_no1").value;
  let sem2g = document.getElementById("gpa_no2").value;
  let sem3g = document.getElementById("gpa_no3").value;
  let sem4g = document.getElementById("gpa_no4").value;
  let sem5g = document.getElementById("gpa_no5").value;
  let sem6g = document.getElementById("gpa_no6").value;
  let sem7g = document.getElementById("gpa_no7").value;
  let sem8g = document.getElementById("gpa_no8").value;
  let sem9g = document.getElementById("gpa_no9").value;
  let sem10g = document.getElementById("gpa_no10").value;

  // Check if inputs are numbers
  sem1c = isNaN(sem1c) ? 0 : sem1c;
  sem2c = isNaN(sem2c) ? 0 : sem2c;
  sem3c = isNaN(sem3c) ? 0 : sem3c;
  sem4c = isNaN(sem4c) ? 0 : sem4c;
  sem5c = isNaN(sem5c) ? 0 : sem5c;
  sem6c = isNaN(sem6c) ? 0 : sem6c;
  sem7c = isNaN(sem7c) ? 0 : sem7c;
  sem8c = isNaN(sem8c) ? 0 : sem8c;
  sem9c = isNaN(sem9c) ? 0 : sem9c;
  sem10c = isNaN(sem10c) ? 0 : sem10c;

  sem1g = isNaN(sem1g) ? 0 : sem1g;
  sem2g = isNaN(sem2g) ? 0 : sem2g;
  sem3g = isNaN(sem3g) ? 0 : sem3g;
  sem4g = isNaN(sem4g) ? 0 : sem4g;
  sem5g = isNaN(sem5g) ? 0 : sem5g;
  sem6g = isNaN(sem6g) ? 0 : sem6g;
  sem7g = isNaN(sem7g) ? 0 : sem7g;
  sem8g = isNaN(sem8g) ? 0 : sem8g;
  sem9g = isNaN(sem9g) ? 0 : sem9g;
  sem10g = isNaN(sem10g) ? 0 : sem10g;

  let finalCgpa =
    (sem1c * sem1g +
      sem2c * sem2g +
      sem3c * sem3g +
      sem4c * sem4g +
      sem5c * sem5g +
      sem6c * sem6g +
      sem7c * sem7g +
      sem8c * sem8g +
      sem9c * sem9g +
      sem10c * sem10g) /
    (sem1c +
      sem2c +
      sem3c +
      sem4c +
      sem5c +
      sem6c +
      sem7c +
      sem8c +
      sem9c +
      sem10c);

  let resultCgpa = document.getElementById("result");
  resultCgpa.innerHTML = `${finalCgpa.toFixed(2)}`;
};
