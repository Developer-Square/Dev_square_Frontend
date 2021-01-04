import React from 'react'

import './Domino.css'

export default function Domino({loading}) {
    return (
        <>
        {loading ? (
            <div className="container-domino">
                <div className="loading-cover"></div>
                <div className="artboard">
                    <div className="domino">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        ): null}
        </>
    )
}
