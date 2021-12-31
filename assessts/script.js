if(window.innerWidth >=768){
  
    window.addEventListener("scroll",function(){
      
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("bar").style.backgroundColor ="#04AA6D";
      let array =  this.document.getElementById("menu").querySelectorAll("a");

      array[0].style.color = !(scrolled<=40)?"#FFFFFF":"#000000";
      array[1].style.color = !(scrolled<=50)?"#FFFFFF":"#000000";
      array[2].style.color = !(scrolled<=55)?"#FFFFFF":"#000000";
      array[3].style.color = !(scrolled<=60)?"#FFFFFF":"#000000";
      array[4].style.color = !(scrolled<=65)?"#FFFFFF":"#000000";

      document.getElementById("menu").style.color ="#FFF";
      document.getElementById("bar").style.width = scrolled + "%";

    });
}