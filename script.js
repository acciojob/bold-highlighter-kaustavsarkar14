const texts = document.querySelectorAll('strong')
function highlight() {
  //Write your code here
  texts.forEach(el=>el.style.color="green")
}


function return_normal() {
  //Write your code here

  texts.forEach(el=>el.style.color="black")
  
}
