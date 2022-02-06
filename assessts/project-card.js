
function load_content(length){

    content = '<div class="row">'; 
    
    for (let index = 0; index < length; index++) {

        content += `<div class="col-lg-4 col-md-6 col-sm-12 my-3">
        <div class="card" style="border-radius:10px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding:5px 10px; height:100%; background:#1e2025;">
        <img class="card-img-top" src="`+project_data[index].image+`" alt="`+project_data[index].title+`">
        <div class="card-body">
          <p class="card-title text-left" style="font-size: 22px; color:#4dd0e1; font-weight:700;">`+project_data[index].title+`</p>
          <p class="card-text text-justify " style="line-height:1.2; color:#fff;">`+project_data[index].content+`</p>`;

        if(typeof(project_data[index].tech)!=='undefined' && project_data[index].tech!=""){
          content += `<p style='font-size:28px; color:#fff;'>`+project_data[index].tech+`</p>`;
        }

        content +='<div class="d-flex justify-content-between">';

        if(typeof(project_data[index].link)!=='undefined' && project_data[index].link!=""){            
            content += `<a href="`+project_data[index].link+`/" target="_blank" class="link primary-button" target="_blank">Live Demo</a>`;
        } 
        if(typeof(project_data[index].repo)!=='undefined' &&  project_data[index].repo!=""){
            content += `<a href="`+project_data[index].repo+`/" target="_blank" class="link secondary-button" style="background:transparent;" target="_blank">Source Code</a>`;
        }
              
        content += `</div></div></div></div>`;
    }

    content +="</div>";
    $("div#project-list-content").append(content);
}


load_content(project_data.length);