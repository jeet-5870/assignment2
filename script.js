  let startTime = Date.now();
  document.getElementById("box").onclick = function(){
    let endTime = Date.now();
    let timeTaken = (endTime - startTime) / 1000;
    document.getElementById("body").style.backgroundColor = randomColor();
    document.getElementById("result").innerHTML = `You clicked the button in ${timeTaken.toFixed(2)} seconds.`;
    this.style.display = "none";
    setTimeout(()=>{
      document.getElementById("result").innerHTML="";
      setTimeout(restart, 1000);
    },3000)
  }

  function restart(){
    startTime= Date.now();
    document.getElementById("result").innerHTML="";
    showBoxAfterRandomDelay();
  }

  function showBoxAfterRandomDelay(){
    let delay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(function() {
      startTime = Date.now();
      let maxWidth=window.innerWidth - box.offsetWidth-10;
      let maxHeight = window.innerHeight - box.offsetHeight-10;
      let randomX = Math.floor(10,Math.random()*maxWidth);
      let randomY = Math.floor(10,Math.random()*maxHeight);

      box.style.left=`${randomX}px`;
      box.style.top=`${randomY}px`;
      box.style.display="block";

      document.getElementById("box").style.display = "block";
    }, delay);
  }

  function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  restart();
