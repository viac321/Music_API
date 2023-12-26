import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Playlist from './pages/Playlist'
import PlaylistDetail from './pages/PlaylistDetail'
import TrackDetail from './pages/TrackDetail'
import ArtistsDetail from './pages/ArtistsDetail'
import PlaylistPublic from './pages/PlaylistPublic'

function App() {

  return (
    <>
      {/* rutas */}
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Home />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/playlist/:id" element={<PlaylistDetail />} />
      <Route path="/tracks/:id" element={<TrackDetail />} />
      <Route path="/artists/:id" element={<ArtistsDetail />} />
      <Route path="/playlist/public/:id" element={<PlaylistPublic />} />
      

    </Routes>

    </>
  )
}

export default App
