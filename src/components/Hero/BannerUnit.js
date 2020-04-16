import React from 'react'

const BannerUnit = ({ children, title, subtitle }) => {
    return (
        <div className="banner">
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    )
}

export default BannerUnit

