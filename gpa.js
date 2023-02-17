const gpa_calcultor = () => {
  let input1 = parseFloat(document.getElementById("credit_no1").value);
  let input2 = parseFloat(document.getElementById("credit_no2").value);
  let input3 = parseFloat(document.getElementById("credit_no3").value);
  let input4 = parseFloat(document.getElementById("credit_no4").value);
  let input5 = parseFloat(document.getElementById("credit_no5").value);
  let input6 = parseFloat(document.getElementById("credit_no6").value);
  let input7 = parseFloat(document.getElementById("credit_no7").value);
  let input8 = parseFloat(document.getElementById("credit_no8").value);
  let input9 = parseFloat(document.getElementById("credit_no9").value);
  let input10 = parseFloat(document.getElementById("credit_no10").value);

  console.log(input2);

  let grade1;
  let grade2;
  let grade3;
  let grade4;
  let grade5;
  let grade6;
  let grade7;
  let grade8;
  let grade9;
  let grade10;

  const grade_selected1 = document.querySelector("#grade_value1");
  const grade_option1 =
    grade_value1.options[grade_selected1.selectedIndex].value;

  const grade_selected2 = document.querySelector("#grade_value2");
  const grade_option2 =
    grade_value2.options[grade_selected2.selectedIndex].value;

  const grade_selected3 = document.querySelector("#grade_value3");
  const grade_option3 =
    grade_value3.options[grade_selected3.selectedIndex].value;

  const grade_selected4 = document.querySelector("#grade_value4");
  const grade_option4 =
    grade_value4.options[grade_selected4.selectedIndex].value;

  const grade_selected5 = document.querySelector("#grade_value5");
  const grade_option5 =
    grade_value5.options[grade_selected5.selectedIndex].value;

  const grade_selected6 = document.querySelector("#grade_value6");
  const grade_option6 =
    grade_value6.options[grade_selected6.selectedIndex].value;

  const grade_selected7 = document.querySelector("#grade_value7");
  const grade_option7 =
    grade_value7.options[grade_selected7.selectedIndex].value;

  const grade_selected8 = document.querySelector("#grade_value8");
  const grade_option8 =
    grade_value8.options[grade_selected8.selectedIndex].value;

  const grade_selected9 = document.querySelector("#grade_value9");
  const grade_option9 =
    grade_value9.options[grade_selected9.selectedIndex].value;

  const grade_selected10 = document.querySelector("#grade_value10");
  const grade_option10 =
    grade_value10.options[grade_selected10.selectedIndex].value;

  // Check if inputs are numbers
  input1 = isNaN(input1) ? 0 : input1;
  input2 = isNaN(input2) ? 0 : input2;
  input3 = isNaN(input3) ? 0 : input3;
  input4 = isNaN(input4) ? 0 : input4;
  input5 = isNaN(input5) ? 0 : input5;
  input6 = isNaN(input6) ? 0 : input6;
  input7 = isNaN(input7) ? 0 : input7;
  input8 = isNaN(input8) ? 0 : input8;
  input9 = isNaN(input9) ? 0 : input9;
  input10 = isNaN(input10) ? 0 : input10;

  switch (grade_option1) {
    case "S":
      grade1 = 10;
      break;
    case "A":
      grade1 = 9;
      break;
    case "B":
      grade1 = 8;
      break;
    case "C":
      grade1 = 7;
      break;
    case "D":
      grade1 = 6;
      break;
    case "E":
      grade1 = 5;
      break;
    case "F":
      grade1 = 0;
      break;
    case "N":
      grade1 = 0;
      break;

    default:
      grade1 = 0;
  }

  switch (grade_option2) {
    case "S":
      grade2 = 10;
      break;
    case "A":
      grade2 = 9;
      break;
    case "B":
      grade2 = 8;
      break;
    case "C":
      grade2 = 7;
      break;
    case "D":
      grade2 = 6;
      break;
    case "E":
      grade2 = 5;
      break;
    case "F":
      grade2 = 0;
      break;
    case "N":
      grade2 = 0;
      break;

    default:
      grade2 = 0;
  }

  switch (grade_option3) {
    case "S":
      grade3 = 10;
      break;
    case "A":
      grade3 = 9;
      break;
    case "B":
      grade3 = 8;
      break;
    case "C":
      grade3 = 7;
      break;
    case "D":
      grade3 = 6;
      break;
    case "E":
      grade3 = 5;
      break;
    case "F":
      grade3 = 0;
      break;
    case "N":
      grade3 = 0;
      break;

    default:
      grade3 = 0;
  }

  switch (grade_option4) {
    case "S":
      grade4 = 10;
      break;
    case "A":
      grade4 = 9;
      break;
    case "B":
      grade4 = 8;
      break;
    case "C":
      grade4 = 7;
      break;
    case "D":
      grade4 = 6;
      break;
    case "E":
      grade4 = 5;
      break;
    case "F":
      grade4 = 0;
      break;
    case "N":
      grade4 = 0;
      break;

    default:
      grade4 = 0;
  }

  switch (grade_option5) {
    case "S":
      grade5 = 10;
      break;
    case "A":
      grade5 = 9;
      break;
    case "B":
      grade5 = 8;
      break;
    case "C":
      grade5 = 7;
      break;
    case "D":
      grade5 = 6;
      break;
    case "E":
      grade5 = 5;
      break;
    case "F":
      grade5 = 0;
      break;
    case "N":
      grade5 = 0;
      break;

    default:
      grade5 = 0;
  }
  switch (grade_option6) {
    case "S":
      grade6 = 10;
      break;
    case "A":
      grade6 = 9;
      break;
    case "B":
      grade6 = 8;
      break;
    case "C":
      grade6 = 7;
      break;
    case "D":
      grade6 = 6;
      break;
    case "E":
      grade6 = 5;
      break;
    case "F":
      grade6 = 0;
      break;
    case "N":
      grade6 = 0;
      break;

    default:
      grade6 = 0;
  }

  switch (grade_option7) {
    case "S":
      grade7 = 10;
      break;
    case "A":
      grade7 = 9;
      break;
    case "B":
      grade7 = 8;
      break;
    case "C":
      grade7 = 7;
      break;
    case "D":
      grade7 = 6;
      break;
    case "E":
      grade7 = 5;
      break;
    case "F":
      grade7 = 0;
      break;
    case "N":
      grade7 = 0;
      break;

    default:
      grade7 = 0;
  }

  switch (grade_option8) {
    case "S":
      grade8 = 10;
      break;
    case "A":
      grade8 = 9;
      break;
    case "B":
      grade8 = 8;
      break;
    case "C":
      grade8 = 7;
      break;
    case "D":
      grade8 = 6;
      break;
    case "E":
      grade8 = 5;
      break;
    case "F":
      grade8 = 0;
      break;
    case "N":
      grade8 = 0;
      break;

    default:
      grade8 = 0;
  }

  switch (grade_option9) {
    case "S":
      grade9 = 10;
      break;
    case "A":
      grade9 = 9;
      break;
    case "B":
      grade9 = 8;
      break;
    case "C":
      grade9 = 7;
      break;
    case "D":
      grade9 = 6;
      break;
    case "E":
      grade9 = 5;
      break;
    case "F":
      grade9 = 0;
      break;
    case "N":
      grade9 = 0;
      break;

    default:
      grade9 = 0;
  }

  switch (grade_option10) {
    case "S":
      grade10 = 10;
      break;
    case "A":
      grade10 = 9;
      break;
    case "B":
      grade10 = 8;
      break;
    case "C":
      grade10 = 7;
      break;
    case "D":
      grade10 = 6;
      break;
    case "E":
      grade10 = 5;
      break;
    case "F":
      grade10 = 0;
      break;
    case "N":
      grade10 = 0;
      break;

    default:
      grade10 = 0;
  }

  let gpa1 = parseFloat(input1 * grade1);
  let gpa2 = parseFloat(input2 * grade2);
  let gpa3 = parseFloat(input3 * grade3);
  let gpa4 = parseFloat(input4 * grade4);
  let gpa5 = parseFloat(input5 * grade5);
  let gpa6 = parseFloat(input6 * grade6);
  let gpa7 = parseFloat(input7 * grade7);
  let gpa8 = parseFloat(input8 * grade8);
  let gpa9 = parseFloat(input9 * grade9);
  let gpa10 = parseFloat(input10 * grade10);

  let Result_Gpa =
    (gpa1 + gpa2 + gpa3 + gpa4 + gpa5 + gpa6 + gpa7 + gpa8 + gpa9 + gpa10) /
    (input1 +
      input2 +
      input3 +
      input4 +
      input5 +
      input6 +
      input7 +
      input8 +
      input9 +
      input10);

  // console.log(Result_Gpa);
  let resultd = document.getElementById("result");
  resultd.innerHTML = `${Result_Gpa.toFixed(2)}`;
};

// let button = document.getElementById("calcu");
// button.addEventListener("submit", gpa_calcultor);
