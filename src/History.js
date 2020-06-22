import React, { Component } from 'react'
import ApplicationContext from './AppContext';

export default class History extends Component 
{
    constructor() {
        super();
        // this.state={
        //     Histroy:[]
        // };
      }
    //   handleContextForUpdateState=(data,ev)=>
    //   {
    //     debugger;
    //   }
    render() {
        // const contextData={
        //     data:this.state,
        //     handleForUpdateState:handleContextForUpdateState
        // };
        return (
            <ApplicationContext.Consumer>
        {context => (
            
            <React.Fragment>
                <h3>History</h3>
                {console.log(context)}
                <ul className="list">
                    {context.data.Histroy.map((data,index)=>
                    {
                        return <li key={index} className={Math.sign(data.Amount)==1? "plus":"minus"}>{data.TransactionName}<span>{data.Amount}</span><button className="delete-btn">x</button></li>
                    })}
                </ul>
            </React.Fragment>
        )}
    </ApplicationContext.Consumer>
        )
    }
}

