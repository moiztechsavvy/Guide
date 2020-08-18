import React, { useState, useRef, useEffect } from 'react';
import PinkMarker from '../images/google-map-marker-icon-10.jpg'
import '../styles/Map.css';

export default function Map() {
    const googleMapRef = useRef();
    const moreRef = useRef();
    const [mapMounted, setMapMounted] = useState();
    const [googleMap, setMap] = useState();
    const [service, setService] = useState();
    const [location, setLocation] = useState();
    const [infoWindow, setInfoWindow] = useState();
    const [places, setPlaces] = useState([]);
    const [placesLoaded, setPlacesLoaded] = useState(false);
    const [infoReceived, setInfoReceived] = useState(false);
    const [doctorData, setDoctorData] = useState();

    const createGoogleMap = (center) => {
        return new window.google.maps.Map(googleMapRef.current, {
            zoom: 12,
            center: center,
            disableDefaultUI: true,
        })

    }

    const createMarker = (pos, title, indb) => {
        let icon;
        if (indb) {
            icon = {
                url: PinkMarker,
                size: new window.google.maps.Size(100, 100),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 34),
                scaledSize: new window.google.maps.Size(40, 40)
            };
        }
        else {
            icon = null
        }
        return new window.google.maps.Marker({
            position: pos,
            title: title,
            map: googleMap,
            icon: icon
        })
    }

    //mounting the map and basic functionality
    useEffect(() => {
        if (!mapMounted) {
            const mapScript = window.document.createElement("script");
            mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
            window.document.body.appendChild(mapScript)
            mapScript.addEventListener('load', () => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((p) => {
                        const position = { lat: p.coords.latitude, lng: p.coords.longitude };
                        const googleMap = createGoogleMap(position);
                        setMap(googleMap);
                        setService(new window.google.maps.places.PlacesService(googleMap));
                        setInfoWindow(new window.google.maps.InfoWindow());
                        setLocation(position);
                        setMapMounted(true);
                    })
                }
            })
        }

    }, [])

    //used to retrive data from the API
    useEffect(() => {
        if (mapMounted) {
            //insert fetch here to receive info from backend and store the place_id in a state
            //dummy Values
            const myPlaces = [
                { name: "place1", address: { address: "193 Thompson Court", city: "Hightstown", state: "NJ", zip: "08520" }, place_id: "ChIJyw5jaoe5xokRZ0mgsFQ2b88" },
                { name: "place2", address: { address: "230 S Easton Rd", city: "Glenside", state: "PA", zip: "19038" }, place_id: "ChIJF8gBbr66xokRFx7CcoxpVIA" },
                { name: "palce3", address: { address: "165 Young St.", city: "Beaver Falls", state: "PA", zip: "15010" }, place_id: "ChIJbay85OuwxokRJxokuah2oR0" },
                { name: "place4", address: { address: "28 Longfellow St.", city: "Perkasie", state: "PA", zip: "18944" }, place_id: "ChIJD6pIswS7xokR9v9-JjhV_lQ" }
            ];
            let place_ids = new Set();
            myPlaces.map(place => {
                place_ids.add(place.place_id)
            })
            setDoctorData(place_ids);
            setInfoReceived(true);
        }
    }, [mapMounted])

    //used to retrive data from Google places API and place markers
    useEffect(() => {
        if (infoReceived) {
            const request = {
                location: location,
                radius: 100,
                query: 'Dermatologist'
            }
            let counter = 0
            service.textSearch(request, (results, status, pagination) => {
                if (status !== 'OK') return;
                counter += 1;
                results.map((place, index) => {
                    const m = createMarker(place.geometry.location, place.name, doctorData.has(place.place_id))
                    setPlaces(prev => prev.concat({ id: place.place_id, name: place.name }));
                    m.addListener('click', () => {
                        document.getElementById(`${place.place_id}`).focus();
                        infoWindow.setContent(`<h1>${place.name}</h1>`);
                        infoWindow.open(googleMap, m);
                    })
                })
                setPlacesLoaded(true);
                if (pagination.hasNextPage) {
                    moreRef.current.addEventListener("click", () => {
                        if (counter === 1) {
                            moreRef.current.disabled = true;
                        }
                        pagination.nextPage()
                    })
                }
            })
        }
    }, [infoReceived])

    //the description of the map markers
    const PlaceLi = (props) => {
        return (
            <li onClick={}><h5 tabIndex="0" id={props.id}>{props.name}</h5></li>
        );
    }

    return (
        <div className="mapDiv">
            <div ref={googleMapRef} style={{ "width": "100%", "height": "100vh" }}></div>
            <div className="elements">
                <ul>
                    {
                        placesLoaded ?
                            places.map((place, index) => {

                                return (<PlaceLi id={place.id} key={place.id} name={place.name} />);
                            })
                            : "Loading..."

                    }
                </ul>
                <button ref={moreRef}>More views</button>
            </div>
        </div>



    );

}
