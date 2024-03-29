import React from 'react'

import './NeverEndingBox.scss'

export default function NeverEndingBox({loading}) {
    return (
        <>
        {loading ? (
            <div className="box-containers">
                <div className="loading-cover"></div>
                <div id="loader">
                    <div id="box"></div>
                    <div id="hill"></div>
                </div>
            </div>)
            :
            null}
        </>
    )
}
