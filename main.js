// Write your JavaScript code here! 
    var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];
    
        // We are going to solve this by breaking the problem into three parts. 
        // Programmers like automating things, we'll populate the HTML drop down options using code, 
        // instead of having to type out all the values. 
        // Create a function that does the some math and gives us the new weight. 
        // Then create a function that responds when the user clicks on the button. 

        // 1. Populate the dropdown element with the data found in the document array. 
        // The value of each option should be the planet's name. 
        // Use the following built-in methods: 
        // `.forEach`  html.html.createElement`  html.html.getElementById` `.appendChild` 
    const planetSelect = document.getElementById("planets");

    planets.forEach(planet => {
    const option = document.createElement("option");
    option.value = planet.name;          // Set the value to the planet's name
    option.textContent = planet.name;    // Set the visible text
    planetSelect.appendChild(option);    // Add it to the dropdown
});

    function calculateWeight(weight, planetName) { 
        // 2. Write the code to return the correct weight
         const gravity = {
    Mercury: 0.377,
    Venus: 0.9032,
    Earth: 1.00,
    Moon: 0.1655,
    Mars: 0.3895,
    Jupiter: 2.640,
    Saturn: 1.139,
    Uranus: 0.917,
    Neptune: 1.148,
    Pluto: 0.06,
    Sun: 27.9
  };

    return weight * gravity[planetName];
}
   
    function handleClickEvent(e) {
    // 3. Declare a variable called userWeight and assign the value of the user's weight.
    const userWeight = parseFloat(document.getElementById("user-weight").value);

    // 4. Declare a variable called planetName and assign the name of the selected planet from the drop down.
    const planetName = document.getElementById("planets").value;

    // 5. Declare a variable called result and assign the value of the new calculated weight.
    const result = calculateWeight(userWeight, planetName);

    // 6. Write code to display the message shown in the screenshot.
    // Example message: "If you were on Mars, you would weigh 85.5 lbs!"
    const output = document.getElementById("output");
    output.innerText = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
}

        // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
    document.getElementById("calculate-button").onclick = handleClickEvent;
        // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
        // feel free to add classes and id's to the HTML elements as you need, 
        // import.a google font and use it for some or all of the text on your page. 


        // Bonus Challenges 
        // 8. Reverse the drop down order so that the sun is first.