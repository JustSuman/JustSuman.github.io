function menuBar() {
    let x = document.getElementById("#links");
    if (document.getElementById("#links").style.display == "block") {
        x.style.display == "none";
    } else {
        x.style.display = " flex";
        x.style.position = " absolute";
        x.style.top = 0;
        x.style.right = 0;
        x.style.flexDirection = "column";
    }
  }