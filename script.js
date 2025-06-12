    let startTime = Date.now();
    document.getElementById("box").onclick = function(){
      document.getElementById("restart").innerHTML="";
      document.getElementById("box").style.display = "none";
      let endTime = Date.now();
      let timeTaken = (endTime - startTime) / 1000;
      document.getElementById("result").innerHTML = `You clicked the button in ${timeTaken.toFixed(2)} seconds.`;
      this.style.display = "none";
      setTimeout(()=>{
        document.getElementById("result").innerHTML="";
      },3000);
      setTimeout(restart, 4000);
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

        let maxWidth = window.innerWidth - box.offsetWidth-40;
          let maxHeight = window.innerHeight - box.offsetHeight-40;
          let randomX = Math.floor(Math.random() * (maxWidth-10))+10;
          let randomY = Math.floor(Math.random() * (maxHeight-10))+10;

          box.style.left = `${randomX}px`;
          box.style.top = `${randomY}px`;
          box.style.display = "block";
          
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
