var pone=document.querySelector("#Pone");
var ptwo=document.getElementById("Ptwo");
var reset=document.getElementById("Reset");
var maxScore=document.getElementById("MaxScore");
var numInput=document.querySelector("input[type='number']");
var p1Score=0;
var p2Score=0;
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");

numInput.addEventListener("change", function () {
	maxScore.innerText=numInput.value;
})



pone.addEventListener("click", function () {
	p1Score++;
	if(p1Score<maxScore.innerText && p2Score<maxScore.innerText){
	p1Display.textContent = p1Score;}
	if (p1Score==maxScore.innerText && p2Score<maxScore.innerText) {
		p1Display.classList.add("winner");
		p1Display.textContent = p1Score;
		console.log("Player one is a winner");
			}
})

ptwo.addEventListener("click", function () {
	p2Score++;
	if(p2Score<maxScore.innerText && p1Score<maxScore.innerText){
	p2Display.textContent = p2Score;}

	if (p2Score==maxScore.innerText && p1Score<maxScore.innerText) {
		p2Display.classList.add("winner")
		p2Display.textContent=p2Score;
		console.log("Player two is a winner");
		
	}
})

reset.addEventListener("click", function () {
	p1Display.textContent=0;
	p2Score=0;
	p2Display.textContent=0;
	p1Score=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
})

//add this for now
