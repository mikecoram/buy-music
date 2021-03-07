import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { LocalStorageSpotifyAuth } from './lib/local-storage-spotify-auth'

const spotifyAuth = new LocalStorageSpotifyAuth()
const hashFragment = window.location.toString().split('#')[1]
const isSpotifyAuthCallback = hashFragment !== undefined

if (isSpotifyAuthCallback) {
    spotifyAuth.setSessionFromCallbackHashFragment(hashFragment)
    window.location.replace(`${window.location.pathname}`)
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App spotifySession={spotifyAuth.getSession()} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}