import React from 'react'

const InformationPanel = () => {
  return (
    <div className='infoPanel row p-3 justify-content-center' >
        
        <div className='col-12 col-md-2 panelText'>
            <div>
                <p>IP ADRESS</p>
                <p>-------</p>
            </div>
        </div>

        <div className='col-md-1'>
            <div className='boxDivider'></div>
        </div>
        
        <div className='col-12 col-md-2 panelText'>
            <div>
                <p>LOCATION</p>
                <p>-------</p>
            </div>

        </div>
        
        <div className='col-md-1'>
            <div className='boxDivider'></div>
        </div>
        
        <div className='col-12 col-md-2 panelText'>
            <div>
                <p>TIMEZONE</p>
                <p>-------</p>
            </div>

        </div>
        
        <div className='col-md-1'>
            <div className='boxDivider'></div>
        </div>
        
        <div className='col-12 col-md-2'>

            <div>
                <p>ISP</p>
                <p>-------</p>
            </div>
            
        </div>

        
    </div>
  )
}

export default InformationPanel