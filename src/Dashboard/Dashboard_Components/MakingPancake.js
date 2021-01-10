import React from 'react'

import './MakingPancake.scss'

export default function MakingPancake({loading}) {
    return (
        <>
        {loading ? 
            (<div>
                <div className="loading-cover"></div>
                <div className="wrap">
                    <h1 className="loading-text">Loading in progress..</h1>
                    <div id="cooking">
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div id="area">
                            <div id="sides">
                                <div id="pan"></div>
                                <div id="handle"></div>
                            </div>
                            <div id="pancake">
                                <div id="pastry"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        :
        null
        }
        </>
    )
}
