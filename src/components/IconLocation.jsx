import L from 'leaflet'
import Icon from "../assets/map-pin-solid.svg"

const IconLocation = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30,40],
    className: "leaflet-venue-icon",
})

export default IconLocation