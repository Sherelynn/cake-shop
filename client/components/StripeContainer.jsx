import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51NjWbhDRbI1KwKQt5tE7ufFc8qQIWyAeCIjYEYLe2kNbIlwQHO05ZJKtID8JBUeDuIpuJT3EUcGj2eI14gNdRSMd00Y8YTGe7e"

const stripePromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({ totalAmount, numberOfItems }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm totalAmount={totalAmount} numberOfItems={numberOfItems} />
    </Elements>
  )
}

export default StripeContainer
