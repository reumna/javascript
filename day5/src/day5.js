const body = document.querySelector("body")

let  windowSizeChecker = body.classList;



function changePageColor() {
  const windowInnerWidth = window.innerWidth;
  if (windowInnerWidth < 600 ) {
    windowSizeChecker.add("windowsize-small");
    windowSizeChecker.remove("windowsize-medium","windowsize-large");
  } else if ( windowInnerWidth >=600 && windowInnerWidth <=1200) {
    windowSizeChecker.add("windowsize-medium");
    windowSizeChecker.remove("windowsize-small","windowsize-large");
  } else {
    windowSizeChecker.add("windowsize-large");
    windowSizeChecker.remove("windowsize-small","windowsize-medium");
  }
}



window.addEventListener("resize",changePageColor);  
changePageColor()

