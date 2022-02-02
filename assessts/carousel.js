                      
    let carousel_data = [
        {
            image:"./image/Super-store.png",
            title:"Super Store Dashboard", 
            content:""
        },
        {
            image:"./image/covid.png",
            title:"Timeline Analysis : Covid-19", 
            content:"A storyboard showing spread of Covid-19 cases in your country or any region"
        },
        {
            image:"./image/brixton-web.png",
            title:"Consultancy Website: Freelancer", 
            content:""
        },
        {
            image:"./image/getsarkari-dashboard.png",
            title:"Getsarkari.com", 
            content:""
        }        
    ];

    
    for (let index = 0; index < carousel_data.length; index++) {
        $("ul#carousel-indicators-content").append((index==0)?"<li data-target='#demo' data-slide-to='0' class='active'></li>":"<li data-target='#demo' data-slide-to='"+index+"'></li>");
        $("div#carousel-inner-content").append((index==0)?"<div class='carousel-item active'><img src='"+carousel_data[index].image+"' class='img-thumbnail carousel-image' /><div class='carousel-caption'><h3>"+carousel_data[index].title+"</h3><p>"+carousel_data[index].content+"</p></div></div>":"<div class='carousel-item'><img src='"+carousel_data[index].image+"' class='img-thumbnail carousel-image' /><div class='carousel-caption'><h3>"+carousel_data[index].title+"</h3><p>"+carousel_data[index].content+"</p></div></div>");  
        
    }
