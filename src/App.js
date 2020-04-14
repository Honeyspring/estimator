import React ,{Component}from 'react';
import './App.css';
//import covid19ImpactEstimator from './components/estimator';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import Form from './components/Form/Form';


const initialState ={
  inputData:{
    region: {
      name:"",
      avgAge:"",
      avgDailyIncomeInUSD:"",
      avgDailyIncomePopulation:""
    },
    periodType:"",
    timeToElapse:"",
    reportedCases:"",
    population:"",
    totalHospitalBeds:""
  },
    
    Impact:{
    currentlyInfected: "",
    infectionsByRequestedTime:"",
    severeCasesByRequestedTime:"",
    hospitalBedsByRequestedTime :"",
    casesForICUByRequestedTime: "",
    casesForVentilatorsByRequestedTime  : "",
    dollarsInFlight:""
      },
    severeImpact:{
    currentlyInfected: "",
    infectionsByRequestedTime:"",
    severeCasesByRequestedTime:"",
    hospitalBedsByRequestedTime :"",
    casesForICUByRequestedTime: "",
    casesForVentilatorsByRequestedTime  : "",
    dollarsInFlight:""
      }
        
    }

class App extends Component{
  constructor(){
    super();
      this.state= initialState;
    
}

loadData=(data)=>{
this.setState({
    inputData:{
      region: {
      name:data.name,
      avgAge:data.avgAge,
      avgDailyIncomeInUSD:data.avgAge,
      avgDailyIncomePopulation:data.avgDailyIncomePopulation
    },
    periodType:data.periodType,
    timeToElapse:data.timeToElapse,
    reportedCases:data.reportedCases,
    population:data.population,
    totalHospitalBeds:data.totalHospitalBeds
  },
     Impact:{
    currentlyInfected : data.currentlyInfected,
    infectionsByRequestedTime : data.infectionsByRequestedTime,
    severeCasesByRequestedTime : data.severeCasesByRequestedTime,
    hospitalBedsByRequestedTime : data.hospitalBedsByRequestedTime,
    casesForICUByRequestedTime : data.casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime : data.casesForVentilatorsByRequestedTime,
    dollarsInFlight : data.dollarsInFlight
      },
    severeImpact:{
    currentlyInfected : data.currentlyInfected,
    infectionsByRequestedTime : data.infectionsByRequestedTime,
    severeCasesByRequestedTime : data.severeCasesByRequestedTime,
    hospitalBedsByRequestedTime : data.hospitalBedsByRequestedTime,
    casesForICUByRequestedTime : data.casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime : data.casesForVentilatorsByRequestedTime,
    dollarsInFlight : data.dollarsInFlight
      }
  

})
}
  
 
 
  render(){ 
  // const {IsLoggedIn,box,route,imageUrl,user}= this.state; 
  return(
  <div className='App'>
  <Header />
    <div className="main">
        <Form loadData={this.loadData}/>
         <Table  Impact={this.state.Impact} severeImpact={this.state.severeImpact}/>
   </div>
    <Footer />
  </div>
  );
  }
}

export default App;
