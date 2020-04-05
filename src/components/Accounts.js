import React from 'react';
import '../container/App.css';


const accounts = props => {

    return(
        props.details.map((account,index) => {
            return(
                <div key={index}>
                    <button className='Accounts' onClick={() => props.clicked(index)} >
                        <p ><b>Account Number : </b>{account.accountNumber}</p>
                        <p><b>Available Balance : </b>{account.balance}</p>
                    </button>
                </div>
         )
        }))
}

export default accounts;
