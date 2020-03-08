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


//ajax js

const getImage = async () => {
  try {
      const response = await fetch('https://ironman.fandom.com/wiki/Mark_L?file=Iron_man_avengers_infinity_war_png_by_gasa979-dc5nh19.png');
      const obj = await response.json();
      console.log(`FETCHED. Response JSON ${obj}`);
      const imag = obj.message || 'No Image for you.';
      return imag;
  } catch (error) 
  { 
    console.error(error);
   }
}
const updateWithImage = async (event) => {
  try {
      // document.querySelector('#imgarea').src = '';
      const answer = await getImage();
      document.querySelector('#imgarea').src = answer;
  } catch (error) { 
    console.error(error);
   }
}
document.addEventListener('click', event => {
  if (event.target && event.target.id === 'Fetch image') { 
    updateWithImage(event);
   }
})