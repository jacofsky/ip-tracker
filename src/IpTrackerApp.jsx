import React, {useReducer} from 'react'
import Header from './components/Header'
import InformationPanel from './components/InformationPanel'
import { IpContext } from './context/ipContext'
import ipReducer from './context/ipReducer'

import './styles/styles.css'

const IpTrackerApp = () => {
   

    const [ipInfo, dispatch] = useReducer(ipReducer)
    
    return (
        
        <IpContext.Provider value={{ipInfo, dispatch}}>
            <div>
                <Header />
                <InformationPanel />
                <h1>Hola</h1>
            </div>
        </IpContext.Provider>
    )
}

export default IpTrackerApp