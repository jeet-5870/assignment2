let startTime = Date.now();
document.getElementById("click").onclick = function(){
  let endTime = Date.now();
  let timeTaken = (endTime - startTime) / 1000; // Convert to seconds
  document.getElementById("click").style.animation = "none";
  document.getElementById("container").style.display = "none";
  document.getElementById("body").style.backgroundColor = "lightblue";
  document.getElementById("result").innerHTML = `You clicked the button in ${timeTaken.toFixed(2)} seconds.`;
  document.getElementById("click").disabled = true;
}
