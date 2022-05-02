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
                
                <div className='col-12 col-sm-2 justify-content-center justify-content-sm-start panelText'>
                        <p className='panel-tittle text-center'>IP ADRESS</p>
                        <p className='panel-textIp text-center'> {ip && ip.data.ip}</p>
                </div>
    
                <div className='col-sm-1 d-sm-inline-block d-none'>
                    <div className='boxDivider'></div>
                </div>
                
                <div className='col-12 col-sm-2 justify-content-center justify-content-sm-start panelText'>
                        <p className='panel-tittle text-center'>LOCATION</p>
                        <p className='locationIspOverflow panel-textIp text-center'>{ip && ip.data.location.city + ','} {ip && ip.data.location.region}</p>
    
                </div>
                
                <div className='col-sm-1 d-sm-inline-block d-none'>
                    <div className='boxDivider'></div>
                </div>
                
                <div className='col-12 col-sm-2 justify-content-center justify-content-sm-start panelText'>
                
                        <p className='panel-tittle text-center'>TIMEZONE</p>
                        <p className='panel-textIp text-center'>{ip && ip.data.location.timezone}</p>
    
                </div>
                
                <div className='col-sm-1 d-sm-inline-block d-none'>
                    <div className='boxDivider'></div>
                </div>
                
                <div className='col-12 col-sm-2 justify-content-center justify-content-sm-start panelText'>
                        <p className='panel-tittle text-center'>ISP</p>
                        <p className='locationIspOverflow panel-textIp text-center'>{ip && ip.data.isp}</p>
                </div>
    
                
            </div>
        )
    }




}

export default InformationPanel