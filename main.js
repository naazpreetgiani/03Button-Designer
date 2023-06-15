// Button Designer Demo

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let bgHexColor = document.getElementById("color-in").value;
  let btnText = document.getElementById("text-in").value;

  // Convert Hex Color to RGB
  let r = parseInt(bgHexColor.substring(1, 3), 16);
  let g = parseInt(bgHexColor.substring(3, 5), 16);
  let b = parseInt(bgHexColor.substring(5, 7), 16);

  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);

  if (brightness > 180) {
    document.getElementById("demo-btn").style.color = "black";
  } else {
    document.getElementById("demo-btn").style.color = "white";
  }
  //Set text of button element
  document.getElementById("demo-btn").innerHTML = btnText;

  //Set background color of html element
  document.getElementById("demo-btn").style.backgroundColor = bgHexColor;

  //Set text color of html element
  document.getElementById("demo-btn").style.color = brightness;

  // Verify Inputs & Conversions in Console
  console.log(`bgHexColor: ${bgHexColor}`);
  console.log(`btnText: ${btnText}`);
  console.log(`red: ${red}`);
  console.log(`green: ${green}`);
  console.log(`blue: ${blue}`);
}
