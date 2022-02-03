
function load_content(length){

    content = '<div class="row">'; 
    
    for (let index = 0; index < length; index++) {

        content += `<div class="col-lg-4 col-md-6 col-sm-12 my-3">
        <div class="card bg-dark text-white" style="border-radius:10px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding:15px">
        <img class="card-img-top" src="`+project_data[index].image+`" alt="Card image">
        <div class="card-body">
          <h4 class="card-title" style="color:var(--blue); font-weight:700;">`+project_data[index].title+`</h4>
          <p class="card-text text-justify">`+project_data[index].content+`</p>`;

        if(typeof(project_data[index].tech)!=='undefined' && project_data[index].tech!=""){
          content += `<p style='font-size:28px;'>`+project_data[index].tech+`</p>`;
        }

        content +='<div class="d-flex justify-content-start">';

        if(typeof(project_data[index].link)!=='undefined' && project_data[index].link!=""){            
            content += `<a href="`+project_data[index].link+`/" target="_blank" class="link primary-button" target="_blank">Live Demo</a>`;
        } 
        if(typeof(project_data[index].repo)!=='undefined' &&  project_data[index].repo!=""){
            content += `<a href="`+project_data[index].repo+`/" target="_blank" class="link secondary-button" target="_blank">Source Code</a>`;
        }
              
        content += `</div></div></div></div>`;
    }

    content +="</div>";
    $("div#project-list-content").append(content);
}


load_content(project_data.length);