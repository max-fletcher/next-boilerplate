import { TAuthForm } from '@/constants/enums'
import AuthForm from '@/components/AuthForm'
import React from 'react'

const signIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={TAuthForm.SIGN_IN} />
    </section>
  )
}

export default signIn