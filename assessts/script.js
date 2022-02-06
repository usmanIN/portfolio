if(window.innerWidth >=768){
  
    window.addEventListener("scroll",function(){
      
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      document.getElementById("bar").style.backgroundColor ="#222222";

      let array =  this.document.getElementById("menu").querySelectorAll("a");

      for (let index = 0; index < array.length; index++) {
        
        position = ((array[index].getBoundingClientRect().right / window.innerWidth) * 100) - 2;
        array[index].style.color = !(scrolled<=position)?"#FFFFFF":"#000000";  

      }
      
      document.getElementById("menu").style.color ="#FFF";
      document.getElementById("bar").style.width = scrolled + "%";

    });

    
    document.querySelectorAll("section").forEach(function(e){
      e.style.height = window.innerHeight  + "px";
      e.style.width = "100%";

    });
}




let counting = document.querySelectorAll("section");
for (let index = 0; index < counting.length; index++) {
  if(index%2==1){
    counting[index].style.backgroundColor = "#4dd0e1";
  }
}
