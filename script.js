document.getElementById("my-button").addEventListener("click", function() {
    var button = document.getElementById("my-button");
    button.style.animation = "none";
    button.offsetHeight; /* trigger reflow */
    button.style.animation = null;
  });
  