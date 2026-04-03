import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Board from '~/pages/Boards/_id'
import NotFound from './pages/404/NotFound'
import Auth from './pages/Auth/Auth'
import AccountVerification from './pages/Auth/AccountVerification'
import { selectCurrentUser } from '~/redux/slice/userSlice'
import Settings from './pages/Settings/Settings'

const ProtectedRoute = ({ user }) => {
  if (!user) return <Navigate to='/login' replace />
  return <Outlet />
}

function App() {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <Routes>
      <Route path='/' element={
        <Navigate to='/boards/68b3cd8fcbf6838882060c3c' replace />
      } />

      <Route element={<ProtectedRoute user={currentUser} /> }>
        <Route path='/boards/:boardId' element={<Board />} />
        <Route path='/settings/account' element={<Settings />} />
        <Route path='/settings/security' element={<Settings />} />
      </Route>

      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      <Route path='/account/verification' element={<AccountVerification />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
