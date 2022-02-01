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
}