import React, { Component } from 'react'
import ApplicationContext from './AppContext';
export default class Balance extends Component
{
    render() {
        return (
            <ApplicationContext.Consumer>
            {context => (
            <>
            { 
            ////
            console.log(context)}
            <div>
                {/* {const sum =  arr.reduce((result,number)=> {result+number }) } */}
            <h4>Your Balance</h4><h1>${context.data.TotalSum}</h1>
            <div className="inc-exp-container"><div>
            <h4>Income</h4>
            <p className="money plus">+${context.data.PlusAmount}</p>
            </div>
            <div><h4>Expense</h4>
            <p className="money minus">-${context.data.MinusAmount}</p>
            </div>
            </div>
            </div>
            </>
         )}
         </ApplicationContext.Consumer>
        )
    }
}