function result() {
  var input1 = document.querySelector("#in1");
  var input2 = document.querySelector("#in2");
  var exp = document.querySelector("#exp");
  var result = document.getElementById("result");
  var output;

  switch (exp.value) {
    case "+":
      output = parseInt(input1.value) + parseInt(input2.value);
      console.log(output);
      break;
    case "-":
      output = parseInt(input1.value) - parseInt(input2.value) + "";
      console.log(output);
      break;
    case "/":
      output = parseInt(input1.value) / parseInt(input2.value) + "";
      console.log(output);
      break;
    case "*":
      output = parseInt(input1.value) * parseInt(input2.value) + "";
      console.log(output);
      break;
    default:
      result.innerText = "Enter valid numbers";
      break;
  }

  if (input1.value === "" || input2.value == "") {
    result.innerText = "Enter valid numbers";
  } else {
    result.innerText = output;
  }
}
