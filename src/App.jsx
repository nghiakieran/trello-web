import { Navigate, Route, Routes } from 'react-router-dom'
import Board from '~/pages/Boards/_id'
import NotFound from './pages/404/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Navigate to='/boards/68b3cd8fcbf6838882060c3c' replace />
      } />
      <Route path='/boards/:boardId' element={<Board />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
