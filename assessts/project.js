    let project_data = [
        {
            image:"./image/react-front-blog.jpg",
            title:"React Front-end Blog", 
            content:"While developing this project, We work on multiple HTML tags, and various CSS properties. Most importantly you will get introduced with the functions required for DOM manipulation. Also how to add dynamic HTML using JS and Date function of JS.",
            link:"react-blog-front.netlify.app/"
        },
        {
            image:"./image/digital-clock.jpg",
            title:"Digital Clock", 
            content:"While developing this project, We work on multiple HTML tags, and various CSS properties. Most importantly you will get introduced with the functions required for DOM manipulation. Also how to add dynamic HTML using JS and Date function of JS.",
            link:"usmanin.github.io/Elevation-Academy/project/Digital%20Clock/"
        },
        {
            image:"./image/car-price-model.png",
            title:"Car Price Prediction", 
            content:"While developing this project, We work on multiple HTML tags, and various CSS properties. Most importantly you will get introduced with the functions required for DOM manipulation. Also how to add dynamic HTML using JS and Date function of JS.",
            link:""
        },
        {
            image:"./image/house-price-model.png",
            title:"House Price Predication", 
            content:"",
            link:""
        }        
    ];


    function load_content(length){

        for (let index = 0; index < length; index++) {

            content = "<div class='row project-list'>";
            if(index%2==0){
                content += `<div class="col-lg-4 project-image">
                            <img src="`+project_data[index].image+`" class="img-thumbnail">    
                        </div>`;        
            }
            content += `<div class="col-lg-8 project-content">
                            <h3>`+project_data[index].title+`</h3>
                            <p>`+project_data[index].content+`</p>`;

            if(project_data[index].link!=""){
                content += `<p>Link: <a href="https://`+project_data[index].link+`/" target="_blank">`+project_data[index].link+`</a></p>`;
            }        
            content += `</div>`;
    
            if(index%2==1){
                content += `<div class="col-lg-4 project-image">
                            <img src="`+project_data[index].image+`" class="img-thumbnail">    
                        </div>`;        
            }
    
            content +=  "</div>";            
    
            $("div#project-list-content").append(content);    
        }
    
    }
    
    
    load_content(project_data.length);