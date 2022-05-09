function mOver(obj) {
  obj.innerHTML="Click Me";
}
function mOut(obj) {
  obj.innerHTML="Register Now  <i class='fa-solid fa-right-to-bracket'></i>";
}
function box(){
  alert("wellcome in films area.");
}
box();

var img_content = document.getElementById('box');
var image = [ 'java/postergot.jpg','java/dont2.jpg','java/spong3','java/conji.jpg'];
var i=0,j=0;
function nextimg() {
  document.slideshow.src=image[i];
  if (i<image.length-1) {
    i++;
  }else {
i=0;
  }

}
function prewimge(){
  document.slideshow.src=image[j];
 if (j<image.length+1 && ( j>1 || j === 1 ) ){
       j=j-1;
   }else{
j= image.length;
   }
}
setInterval( nextimg , 5000);
