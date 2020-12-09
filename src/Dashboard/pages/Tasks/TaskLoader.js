import React from 'react'

//Own Components
import './TaskLoader.scss'

export default function TaskLoader({loading}) {
    return (
        <>
        {loading ? (
            <>
                <div className="loading-cover"></div>
                <div class="wrap">
                    <div class="loading">
                        <div class="bounceball"></div>
                        <div class="text">NOW LOADING</div>
                    </div>
                </div>
            </>)
            :
            null
        }
        </>
    )
}
