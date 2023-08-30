import React from 'react'
import cakeImages from '../src/cakeImagesData'

const Cakes = () => {
  return (
    <main>
      <h1>Featured Cakes</h1>
      <section id="cake-images">
        <div className="cake-image-tile">
          {cakeImages.map((cake) => (
            <img
              src={cake.src}
              key={cake.id}
              alt={cake.alt}
              className="cake-image"
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Cakes
