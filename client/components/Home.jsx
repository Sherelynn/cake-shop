import React, { useState } from 'react'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const imageUrl =
    'https://github.com/sherelynn-baguioso/my-photos/blob/6794d8ab4d141c7fcc28a60bc38c759e44ffea7c/gary-scott-GD8EANdZu28-unsplash.jpg?raw=true'

  const handleImageLoad = () => {
    setLoading(false)
  }

  const handleImageError = () => {
    setLoading(false)
    setError(true)
  }

  return (
    <div className="home">
      <h1>We exquisitely create customised cakes for special occasions!</h1>
      {loading ? <div className="loader"></div> : null}
      {error ? <div>Error loading image.</div> : null}
      <img
        src={imageUrl}
        alt="Close Up Cake on a Plate"
        className="homepage-image"
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: loading || error ? 'none' : 'block' }}
      />
    </div>
  )
}

export default Home
