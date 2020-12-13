import React from 'react'

//Own Components
import './TaskLoader.scss'

export default function TaskLoader({loading}) {
    return (
        <>
        {loading ? (
            <>
                <div className="loading-cover"></div>
                <div className="wrap">
                    <div className="loading">
                        <div className="bounceball"></div>
                        <div className="text">NOW LOADING</div>
                    </div>
                </div>
            </>)
            :
            null
        }
        </>
    )
}
