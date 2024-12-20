function showYoutube(){
    var url = document.getElementById('youtubeURL_input').value;
    if(url.substr(0,17) == "https://youtu.be/"){
        url = url.substr(17,11);
    }
    else if(url.substr(0,30) == "https://www.youtube.com/embed/"){
        url = url.substr(30,11);
    }
    else{
        url = url.substr(url.indexOf("=") + 1,11);
    }
    document.getElementById('youtubeURL_output').src = "https://www.youtube.com/embed/" + url;
    document.getElementById('youtubeURL_output_mobile').src = "https://www.youtube.com/embed/" + url;
    console.log(url);
}