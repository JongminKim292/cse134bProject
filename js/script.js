function colorChange() {
    var color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
  
    var num = Math.floor(Math.random() * color.length);
    var bodyTag = document.getElementById("colorCont");
    bodyTag.style.backgroundColor = color[num];
  }