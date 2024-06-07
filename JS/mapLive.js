function initMap(){

    //map options

    const options= {
        center: {lat:6.5244,lng:3.3792}, 
        zoom: 8
    }

    //new map

    map = new google.maps.Map (document.getElementById ("map"), options)

    
    //marker positioned at Lagos 

    const marker= new google.maps.Marker({

        position:{lat:6.6018 , lng:3.3515 },
        map:map

    });

    //infoWindow

    const detailWindow = new google.maps.InfoWindow({
        content: `<h2>Lagos Ikeja</h2>`
    });

    marker.addListener("mouseover", () => {
        detailWindow.open(map,marker)
    });

}