import React from 'react'
import { Gallery } from '../../components'
import ContactDetails from '../../components/contact/contactDetails/ContactDetails'

const PortraitsPage = () => {
  return (
    <div>
        <Gallery name="portraits"/>
        <ContactDetails/>
    </div>
  )
}

export default PortraitsPage