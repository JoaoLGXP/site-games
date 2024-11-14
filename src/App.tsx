import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import Home from './routes'
import GameNotice from './routes/GameNotice'

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="notice" element={<GameNotice />} />
      </Route>
    </Routes>

  )
}

