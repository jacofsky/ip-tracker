import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
const Map = () => {

  const {ip} = useSelector((state) => state.ipData)

  const [positon, setPositon] = useState([51.505, -0.09]) 


  useEffect(() => {
    if (ip != null) {
      setPositon([ip.data.location.lat, ip.data.location.lng])
    }

  }, [ip])

  console.log(positon)

  return (
    
        <MapContainer style={{ height: '60vh' }} center={positon} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positon}>
        
      </Marker>
    </MapContainer>

    
  )
}

export default Map