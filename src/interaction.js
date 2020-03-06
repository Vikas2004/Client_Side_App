const inputElementRadius = document.getElementById("radius")
const inputElementResult = document.getElementById("result")
const btnElement = document.getElementById("calc");

btnElement.onclick = async function ()
{
  const textRad = inputElementRadius.value;
  const textResult = inputElementResult.value;
  const Radius = parseFloat(textRad);

  const Result =  (22 * (Radius * Radius ))/7;
  inputElementResult.innerHTML = "Result: " + Result;
}