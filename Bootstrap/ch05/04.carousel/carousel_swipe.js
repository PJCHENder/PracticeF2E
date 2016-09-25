
$(document).ready(function() { 
   $("#你的幻燈片ID名稱 ").swiperight(function() {  
      $(this).carousel('prev');  
      });  
//add your other targets here
   $("#你的幻燈片ID名稱").swipeleft(function() {  
      $(this).carousel('next');  
 });  
});  
