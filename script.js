//API key	0920de014dfbd71690d7f0a435b8b5b0
//Shared secret	67d2dc6a9fed482cb2b445aff09aad5c

$(document).ready(function () {
    let artist="svdden death";
    //submit
    
   

    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=0920de014dfbd71690d7f0a435b8b5b0&artist=slowthai&track=gorgeous&format=json", function(data){
        //console.log(data);
    });

    
    $('#artist').append(artist);
    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+artist+"&api_key=0920de014dfbd71690d7f0a435b8b5b0&format=json", function(data){
        let html = "";

        //get track names
        $.each(data.toptracks.track, function(i, item){
            html+="<p>"+item.name+"</p>";
            //console.log(item.name);
        });

        //get album
        //I DONT THINK THIS WILL WORK :(
        /*
        $.each(data.toptracks.track, function (i, item) {
            $.getJSON("https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=0920de014dfbd71690d7f0a435b8b5b0&artist="+artist+"&track="+item.name+"&format=json", function(song){
                //console.log(song.track.album.image[1]['#text']);
                html+="<img src='"+song.track.album.image[1]['#text']+"'></img>";
            });
            //html+="<img src="+song.track.album.image[1]['#text']+"</img>";
        });
        */

    
        $('#result').append(html);

    });

});