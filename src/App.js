import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Balance from './Balance';
import Histroy from './History';
import Transaction from './Transaction';
import './CustomCss.css';
import ApplicationContext from './AppContext';

export default class App extends Component
{
  //{firstName:"John", lastName:"Doe", age:46}
  constructor(props){
    super(props);
    this.state={
      Histroy:[],
      TotalSum:0,
      PlusAmount:0,
      MinusAmount:""
  };
  }
  handleContextForUpdateState=(data,e)=>
  {
    debugger;
    this.setState(
            {
                Histroy:[...this.state.Histroy,data]
            });

            let Totalsum=0;
            let Plus=0;
            let Minus=0;
            const sjum =  this.state.Histroy.map((info,index)=>  
            {
              if(Math.sign(info.Amount)==1)
              {
              Plus+=parseInt(info.Amount,10);
              }
              else{
                Minus+=parseInt(info.Amount,10);
              }
              Totalsum+=parseInt(info.Amount,10);
            });
            this.setState(
              {
                TotalSum:(Totalsum+(parseInt(data.Amount,10))),
                MinusAmount:Math.sign(data.Amount)!=1 ? (Minus+(parseInt(data.Amount,10))).toString().replace('-',''):this.state.MinusAmount.toString().replace('-',''),
                PlusAmount:Math.sign(data.Amount)==1 ?(Plus+(parseInt(data.Amount,10))):this.state.PlusAmount
              });
            e.preventDefault();
  }

  componentDidUpdate=()=>
  {
    debugger;
   console.log("After Update");
   console.log(this.state);
  }
   render(){
    const contextData={
      data:this.state,
      handleForUpdateState:this.handleContextForUpdateState
  };
  return (
  <>
  <div className="container">
  <h1>Expence Tracker</h1>
  <ApplicationContext.Provider value={contextData}>
  <div>
    <Balance></Balance>
    <Histroy></Histroy>
    <Transaction></Transaction>
  </div>

  </ApplicationContext.Provider>
  </div>
  </>
  );
   }
}

// export default App;
