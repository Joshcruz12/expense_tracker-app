import React from 'react'
import { useState, useEffect } from 'react';

export const AddTrannsaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const addItem = (e) => {
        return(
        <li className="minus">
            <span>{setText} {setAmount}</span><button className="delete-btn">x</button>
        </li>
        )
    }
console.log(addItem)
    
    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>

                    <input onChange={e => setText(e.target.value)} value={text} type="text" placeholder="Enter text..." />

                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" placeholder="Enter amount..." />
                </div>
                <button onClick={addItem} className="btn">Add transaction</button>
            </form>
        </>
    )
}
