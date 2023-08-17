var images = document.querySelectorAll(".select-img");
var current_image = document.querySelector(".current-image");
var totalImages=Array.from(images);
totalImages.forEach(function(click){
    click.addEventListener("click",function(){
        removeActiveBorder()
        click.classList.add("active");
        let srcValue = click.getAttribute("src");
        let titleValue = click.getAttribute("title");
        document.getElementById("caption").innerText = titleValue;

        console.log(titleValue);
        current_image.setAttribute("src", `${srcValue}`);
    })
});





function removeActiveBorder()
{
   totalImages.forEach(function(img){
    img.classList.remove("active");


   })
}



var forward = document.querySelector(".nextBtn");
forward.addEventListener("click", function(click){
    let current_image_src= current_image.getAttribute("src")
    
    if(current_image_src==images[images.length-1].getAttribute("src"))
    {
        current_image_src=images[0].getAttribute("src");
        current_image.setAttribute("src", current_image_src);
        removeActiveBorder();
        images[0].classList.add("active");
        let titleValue = images[0].getAttribute("title");
        document.getElementById("caption").innerText = titleValue;


 
  return;
    }

        for(let i=0; i<images.length; i++){
            let matched_src = images[i].getAttribute("src");
            if(current_image_src == matched_src){
                
                let img_index = images[i+1];
                let srcvalue = img_index.getAttribute("src");
                current_image.setAttribute("src", `${srcvalue}`);
                removeActiveBorder()
                img_index.classList.add("active");
                let titleValue = img_index.getAttribute("title");
                document.getElementById("caption").innerText = titleValue;

                
            }
        }
})


var Previous = document.querySelector(".prevBtn");
Previous.addEventListener("click", function(){
    let current_image_src= current_image.getAttribute("src")
    console.log(current_image_src)

    if(current_image_src==images[0].getAttribute("src"))
    {
        current_image_src=images[images.length-1].getAttribute("src");
        current_image.setAttribute("src", current_image_src);
        removeActiveBorder();
        images[images.length-1].classList.add("active");

        let titleValue = images[images.length-1].getAttribute("title");
        document.getElementById("caption").innerText = titleValue;
 
  return;
    }

    for(let i=0; i<images.length; i++){
        let matched_src = images[i].getAttribute("src");
        if(current_image_src == matched_src){
            let img_index = images[i-1];
            let srcvalue = img_index.getAttribute("src");
            current_image.setAttribute("src", `${srcvalue}`);
            removeActiveBorder();
            img_index.classList.add("active");

            let titleValue = images[i-1].getAttribute("title");
            document.getElementById("caption").innerText = titleValue;

            
            

        }
        
        
    }


});