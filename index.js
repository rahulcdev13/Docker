// Create the HTML structure dynamically
document.body.innerHTML = `
  <div style='text-align: center; margin-top: 50px;'>
    <h1 id='mainHeading'>Welcome to My Page</h1>
    <button onclick='changeHeading()'>Change Heading</button>
  </div>
`;

// JavaScript functionality to change the heading
function changeHeading() {
    document.getElementById("mainHeading").innerText = "Heading Changed!";
}
~

