

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