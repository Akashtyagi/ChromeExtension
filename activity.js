function scrapPage()
{
    console.log("hey");
    let all_details = [];
    let images = document.querySelectorAll('img');
    console.log(images);
    for (i=0;i<images.length; i++)
    {
        let curImage = images[i];
        var alt = curImage.getAttribute('alt');
        let src = curImage.getAttribute('src');
        all_details.push((src,alt));
        console.log("log hai");
        console.log(src);
        document.getElementById("demo").textContent = alt;
    }
    console.log("Result");
    console.log(all_details);
    document.getElementById("demo").textContent = all_details;
}
document.getElementById("scrap").onclick = scrapPage;