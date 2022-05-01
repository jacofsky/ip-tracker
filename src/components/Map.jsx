import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import IconLocation from './IconLocation';

const Map = () => {

  const {ip} = useSelector((state) => state.ipData)

  const [positon, setPositon] = useState({
    curretLocationCenter: {lat: '51.505', lng: '-0.09'},
    currentLocationPostion: [51.505, -0.09]
  }) 


  useEffect(() => {
    if (ip != null) {
      setPositon({
        curretLocationCenter: {lat: ip.data.location.lat.toString(), lng: ip.data.location.lng.toString()},
        currentLocationPostion: [ip.data.location.lat, ip.data.location.lng]
      })
    }

  }, [ip])

  const UpdateMapCenter = ({mapCenter}) => {
    const map = useMap()
    map.panTo(mapCenter)
    return null
  }

  console.log(positon)

  return (
    
        <MapContainer style={{ height: '60vh' }} center={positon.curretLocationCenter} zoom={13} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positon.currentLocationPostion} icon={IconLocation} />

      <UpdateMapCenter mapCenter={positon.curretLocationCenter} />
    </MapContainer>

    
  )
}

export default Map