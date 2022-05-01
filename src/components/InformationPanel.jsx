import React from 'react'
import { useSelector } from 'react-redux'


const InformationPanel = () => {


    const {ip, loading} = useSelector((state) => state.ipData)
    console.log(ip)

    if (loading) {
        return (
            <div className='infoPanel row p-3 justify-content-center align-items-center'>
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else {

        return (
            <div className='infoPanel row p-3 justify-content-center' >
                
                <div className='col-12 col-md-2 panelText'>
                    <div>
                        <p>IP ADRESS</p>
                        <p> {ip && ip.data.ip}</p>
                    </div>
                </div>
    
                <div className='col-md-1'>
                    <div className='boxDivider'></div>
                </div>
                
                <div className='col-12 col-md-2 panelText'>
                    <div>
                        <p>LOCATION</p>
                        <p className='locationIspOverflow'>{ip && ip.data.location.city + ','} {ip && ip.data.location.region}</p>
                    </div>
    
                </div>
                
                <div className='col-md-1'>
                    <div className='boxDivider'></div>
                </div>
                
                <div className='col-12 col-md-2 panelText'>
                    <div>
                        <p>TIMEZONE</p>
                        <p>{ip && ip.data.location.timezone}</p>
                    </div>
    
                </div>
                
                <div className='col-md-1'>
                    <div className='boxDivider'></div>
                </div>
                
                <div className='col-12 col-md-2'>
    
                    <div>
                        <p>ISP</p>
                        <p className='locationIspOverflow'>{ip && ip.data.isp}</p>
                    </div>
                    
                </div>
    
                
            </div>
        )
    }




}

export default InformationPanel