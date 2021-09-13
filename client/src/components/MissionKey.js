import React from 'react'

export default function MissionKey() {
    return (
        <div className="my-3">
            <p>
                <span className="px-3 bg-success" style={{ marginRight: 10 }} /> = Succes
            </p>
            <p>
                <span className="px-3 bg-danger" style={{ marginRight: 10 }} /> = Fail
            </p>
        </div>
    )
}
