import React from 'react'

export const TransactionList = () => {

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    <span>-$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>

    )
}