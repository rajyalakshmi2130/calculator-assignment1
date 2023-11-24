import React, { useState } from 'react'
import './App.css'
import RegistrationFeeCalculator from './components/RegistrationFeeCalculator'
import EmiPaymentPlan from './components/EmiPaymentPlan'
import IsaPaymentPlan from './components/IsaPaymentPlan'




const App = () => {
  const [programDetails, setProgramDetails] = useState('')

  const updateProgramDetails = (programDetails) => {
    setProgramDetails(programDetails)
  }

  return (
    <section className='rootContainer' >
      <div className='contentContainer'>
        <RegistrationFeeCalculator
          updateProgramDetails={updateProgramDetails}
        />
        {
          programDetails &&
          <div className='plansContainer'>
            <EmiPaymentPlan
              programDetails={programDetails}
            />
            <IsaPaymentPlan
              programDetails={programDetails}
            />
          </div>
        }
      </div>
    </section>
  )
}

export default App