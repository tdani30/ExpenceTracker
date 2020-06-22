import React, { Component } from 'react';
import ApplicationContext from './AppContext';
export default class Transaction extends Component 
{
    constructor() {
        super();
        this.TransactionText=React.createRef();
        this.TransactionName=React.createRef();
        this.IsCheck=React.createRef();
        // this.state={
        //     Histroy:[]
        // };
      }
       
    onChangeText=(e) =>{
        debugger;
        if(e.target.value=="0" || this.TransactionName.current.value =="")
        {
            this.IsCheck.current.disabled=true;
        }
        else{
            this.IsCheck.current.disabled=false;
        }
      }

      componentDidMount=()=>
      {
        this.IsCheck.current.disabled=true;
        this.TransactionText.current.value=0;
        this.TransactionName.current.value="";
      }
     
      HandleFormSubmit=(context,e)=>{
        debugger;
        e.preventDefault();
      }  
      
    render() {
        return (
            <ApplicationContext.Consumer>
        {context => (
            <>
            <h3>Add new transaction</h3>
             <div>
                 {console.log(context)}
                <form onSubmit={(e)=>context.handleForUpdateState({ID:Math.random(),TransactionName:this.TransactionName.current.value, Amount:this.TransactionText.current.value},e)}>
                <div className="form-control">
                <label type="text">Text</label>
                <br></br>
                <input type="text" placeholder="Enter text...." defaultValue="" ref={this.TransactionName}/>
                <br></br>
                </div>
 <div className="form-control">
     <label>Amount</label>
     <br></br>
     (negative - expense , positive - income)
     <br></br>
      <input type="number" 
     placeholder="Enter the Amount"
     onChange={this.onChangeText} ref={this.TransactionText}/>
 </div>
     <button  ref={this.IsCheck} className="btn">Add Transaction</button>
 </form>
 </div>
            </>
   )}
    </ApplicationContext.Consumer>
           
            
        )
    }
}
