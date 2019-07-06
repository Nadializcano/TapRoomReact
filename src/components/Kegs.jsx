import React from 'react'
import PropTypes from 'prop-types'

function Kegs(props){
  return (
    <div>
      <style jsx>{`
            
      `}</style>

      <h2>{props.name}</h2>
      <h2>{props.brand}</h2>
      <h2>{props.price}</h2>
    
  )
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default Kegs