import { useEffect, useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { verifyAccountAPI } from '~/apis'
import Loading from '~/components/Loading/Loading'

const AccountVerification = () => {
  const [searchParams] = useSearchParams()
  const { token, email } = Object.fromEntries(searchParams)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    if (token && email) {
      verifyAccountAPI(email, token).then(() => setVerified(true))
    }
  }, [token, email])

  if (!token || !email) return <Navigate to='/404' />

  if (!verified) {
    return <Loading caption='Verifying account...' />
  }

  return <Navigate to={`/login?verifiedEmail=${email}`} />
}

export default AccountVerification
