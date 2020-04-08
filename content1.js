chrome.runtime.onMessage.addListener(
    function(request,sender, sendResponse){
        if (request.message == "Oye")
        {
            console.log("hey");
            let all_details = [];
            document.bgcolor = "yellow";
            let images = document.body.querySelectorAll('img');
            
            for (i=0;i<images.length; i++)
            {
                let curImage = images[i];
                let alt = curImage.getAttribute('alt');
                let src = curImage.getAttribute('src');
                all_details.push([src,alt]);
                console.log("log hai");
            }
            console.log("First image details: ",all_details[0]);

        }
    }
)
