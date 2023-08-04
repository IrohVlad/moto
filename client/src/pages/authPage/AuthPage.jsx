import React from 'react'
import Transition from '../func/Transition'
import Auth from '../../widgets/auth/Auth'
import './style.scss'

function AuthPage() {
  return (
    <main>
      <Auth/>
    </main>
  )
}

export default Transition(AuthPage)