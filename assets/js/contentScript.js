var alreadyUpdated = false;
document.onreadystatechange = () => {
  if (!alreadyUpdated) {
    let splashContainer = document.getElementsByClassName('spring20-blaze_container')[0];
    if (splashContainer) {
      splashContainer.innerHTML = "";
      splashContainer.style = "overflow: visible";
      let img = document.createElement('img');
      img.src = "https://raw.githubusercontent.com/Maximetinu/coffin-dance/master/coffin-dance.gif";
      splashContainer.appendChild(img);
      alreadyUpdated = true;
    }
  }
}