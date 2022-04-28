import React from 'react'
import { Provider } from 'react-redux'

import Header from './components/Header'
import InformationPanel from './components/InformationPanel'
import Map from './components/Map'
import { store } from './store/ipContext'
import './styles/styles.css'


const IpTrackerApp = () => {
       
    return (
        
        <Provider store={store}>
            <div>
                <Header />
                <InformationPanel />
                <Map />
            </div>
        </Provider>
    )
}

export default IpTrackerApp