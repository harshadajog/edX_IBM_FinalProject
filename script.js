var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var form = document.querySelector("form");
var result = document.getElementById('result');
var button = document.querySelector('button');
var footer = document.querySelector('footer');



output.innerHTML = slider.value + ' %';
result.innerHTML = '';
result.style.display = "none";


// Update the current slider value (each time you drag the slider handle)
slider.onchange = function() {
    console.log(slider.value);
	output.innerHTML = slider.value + ' %';

}

button.addEventListener('click', (e) => {
	e.preventDefault();
	compute();
});

function compute()
{
    result.innerHTML = '';
    result.style.display = "none";
    document.getElementById("principal").focus();
    
	// Get the values from UI
    
    let principal = document.getElementById("principal").value;

    if(principal === '' || Number(principal) < 0){
        result.innerHTML = '';
        result.style.display = "none";
    	alert("Enter amount greater than 0");
    	document.getElementById("principal").focus();
    	document.getElementById("principal").click();
    	return;
    }

    let years = Number(document.getElementById("years").value);
    let rate = Number(document.getElementById("myRange").value);

   // Calculate total amount
    let interest = principal*years*rate/100;
    
    // Date calculations
	var curDate = new Date();
	var curYear = Number(curDate.getFullYear());
	years += curYear;

	 result.innerHTML = `If you deposit <mark>${principal}</mark>, <br> at an interest rate of <mark>${rate}%</mark>.<br>You will receive an amount of <mark>${interest}</mark>,<br>in the year <mark>${years}</mark>`;
	result.style.display = "block";	
}


      