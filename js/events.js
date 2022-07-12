export default function Events({backgroundImage}) {

  function changeBackgroundImage(image) {
    let alreadyBackgroundImage = backgroundImage.getAttribute("src") == image;
    if(!alreadyBackgroundImage) {
      backgroundImage.removeAttribute("src")
      backgroundImage.setAttribute("src", image);
    }  
  }

  function hrefButton() {
    
  }

  return {
    changeBackgroundImage,
    hrefButton
  }
}