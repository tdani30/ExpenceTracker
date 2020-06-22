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
  
  handleContextForDeletetate=(data,e)=>{
   debugger; 
   var array = [...this.state.Histroy]; // make a separate copy of the array
  var ReturnData = array.filter((e)=>(e.ID !== data))
 // if (index !== -1) 
 // {
    //array.splice(index, 1);

    let Totalsum=0;
    let Plus=0;
    let Minus=0;
    const sjum =  ReturnData.map((info,index)=>  
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
        Histroy: ReturnData,
        TotalSum:Totalsum,
        MinusAmount:Minus.toString().replace('-',''),
        PlusAmount:Plus
      });
  //}
  }
   render(){
    const contextData={
      data:this.state,
      handleForUpdateState:this.handleContextForUpdateState,
      handleForDeleteState:this.handleContextForDeletetate
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
