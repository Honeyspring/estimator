import React ,{Component}from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import Form from './components/Form/Form';


class App extends Component{
  constructor(){
    super();
      
     this.state = {
       FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :"",
      TableImpact:{},
      TableSevereImpact:{},
      FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :""
      }
          }
}

onNameChange=(event)=>{
        this.setState({ FormName:event.target.value});
       
        
    }
   onAvgAgechange=(event)=>{
        this.setState({FormAvgAge:event.target.value});
       
    }

   onAvgDailyIncomeInUSDChange=(event)=>{
     this.setState({FormAvgDailyIncomeInUSD:event.target.value});
    
        
    }
    onAvgDailyIncomePopulationChange=(event)=>{
        this.setState({FormAvgDailyIncomePopulation:event.target.value});
       
    }
  onPeriodTypeSelect=(event)=>{
        this.setState({FormPeriodType:event.target.value});
      
    }
    onTimeToElapseChange=(event)=>{
        this.setState({FormTimeToElapse:event.target.value});
       
    }
    onReportedCasesChange=(event)=>{
        this.setState({FormReportedCases:event.target.value});
       
    }
     onPopulationChange=(event)=>{
        this.setState({FormPopulation:event.target.value});
       
    }
     onTotalHospitalBedsChange=(event)=>{
        this.setState({FormTotalHospitalBeds:event.target.value});

    }

onFormSubmit = () => {
  
  const inputData={
  avgDailyIncomeInUSD :this.state.FormAvgDailyIncomeInUSD,
   avgDailyIncomePopulation :this.state.FormAvgDailyIncomePopulation,
  periodType : this.state.FormPeriodType,
  timeToElapse : this.state.FormTimeToElapse,
   reportedCases : this.state.FormReportedCases,
  totalHospitalBeds:this.state.FormTotalHospitalBeds
  }
   //const SevereImpact = covid19ImpactEstimator(inputData).severeImpact;
     //const  Impact = covid19ImpactEstimator(inputData).impact
     //let FormError =document.getElementsByClassName('FormError');
      const impact = {};
  const severeImpact = {};
  let factor;
  const days = inputData.periodType;

   
  // converts to days
  if (days === 'Daily') {
    inputData.timeToElapse *= 1;
    factor = 2 ** Math.trunc((inputData.timeToElapse / 3));
    console.log(factor)
  } else if (days === 'Weekly') {
    inputData.timeToElapse *= 7;
    factor = 2 ** Math.trunc((inputData.timeToElapse / 3));
    console.log(factor)
  } else if (days === 'Monthly'){
    inputData.timeToElapse *= 30;
    factor = 2 ** Math.trunc((inputData.timeToElapse / 3));
    console.log(factor);
  }
   
 const ImpactEstimator =(data)=>{
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * (factor);
  impact.severeCasesByRequestedTime = Math.trunc(impact.infectionsByRequestedTime * 0.15);
  impact.hospitalBedsByRequestedTime = Math.trunc((data.totalHospitalBeds * 0.35)- impact.severeCasesByRequestedTime);
  impact.casesForICUByRequestedTime = Math.trunc(impact.infectionsByRequestedTime * 0.05);
  impact.casesForVentilatorsByRequestedTime = Math.trunc(impact.infectionsByRequestedTime * 0.02);
 impact.dollarsInFlight = Math.trunc((impact.infectionsByRequestedTime
    * data.avgDailyIncomePopulation * data.avgDailyIncomeInUSD) / data.timeToElapse);
    
    return impact;
    
    
}
const severeImpactEstimator=(data)=>{
  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (factor);
  severeImpact.severeCasesByRequestedTime = Math.trunc(severeImpact.infectionsByRequestedTime
     * 0.15);
  severeImpact.hospitalBedsByRequestedTime = Math.trunc((data.totalHospitalBeds * 0.35)
  - severeImpact.severeCasesByRequestedTime);
  severeImpact.casesForICUByRequestedTime = Math.trunc(severeImpact.infectionsByRequestedTime
     * 0.05);
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(
    severeImpact.infectionsByRequestedTime * 0.02
  );
  severeImpact.dollarsInFlight = Math.trunc((severeImpact.infectionsByRequestedTime
    * data.avgDailyIncomePopulation * data.avgDailyIncomeInUSD) / data.timeToElapse);

    return severeImpact;
   
    
}
 const SevereImpact = ImpactEstimator(inputData);
    const  Impact = severeImpactEstimator(inputData);
     



 if (!this.state.FormName && !this.state.FormAvgAge && !this.state.FormAvgDailyIncomeInUSD&& !this.state.FormAvgDailyIncomePopulation 
  && !this.state.FormReportedCases && !this.state.FormPopulation && !this.state.FormTotalHospitalBeds  && !this.state.FormPeriodType && !this.state.FormTimeToElapse){
  
    this.setState({FormError:{
      FormName : "Field can not be empty!!!",
      FormAvgAge :"Field can not be empty!!!",
      FormAvgDailyIncomeInUSD :"Field can not be empty!!!",
      FormAvgDailyIncomePopulation :"Field can not be empty!!!",
      FormPeriodType : "Field can not be empty!!!",
      FormTimeToElapse : "Field can not be empty!!!",
      FormReportedCases : "Field can not be empty!!!",
      FormPopulation : "Field can not be empty!!!",
      FormTotalHospitalBeds :"Field can not be empty!!!"
      }
          })
    
    } else if (!this.state.FormName && this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && this.state.FormPopulation && this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  this.state.FormTimeToElapse){


    this.setState({FormError:{
      FormName : "Field can not be empty!!!",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :""
    }
      })
       
    }else if (this.state.FormName && !this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && this.state.FormPopulation && this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  this.state.FormTimeToElapse){
   this.setState({FormError:{
      FormName : "",
      FormAvgAge :"Field can not be empty!!!",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :""
    }
      })
    
    }else if (this.state.FormName && this.state.FormAvgAge && !this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && this.state.FormPopulation && this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  this.state.FormTimeToElapse){
     this.setState({FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"Field can not be empty!!!",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :""
      }
          })
   
    } else if (this.state.FormName && this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& !this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && this.state.FormPopulation && this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  this.state.FormTimeToElapse){
    this.setState({FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"Field can not be empty!!!",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :""
      }
          })
   
    
     }else if (this.state.FormName && this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && !this.state.FormReportedCases && this.state.FormPopulation && this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  this.state.FormTimeToElapse){
    this.setState({FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "Field can not be empty!!!",
      FormPopulation : "",
      FormTotalHospitalBeds :""
      }
          }) 
    } else if (this.state.FormName && this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && !this.state.FormPopulation && this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  this.state.FormTimeToElapse){
   this.setState({FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "Field can not be empty!!!",
      FormTotalHospitalBeds :""
      }
          }) 
    
  } else if (this.state.FormName && this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && this.state.FormPopulation && !this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  this.state.FormTimeToElapse){
     this.setState({FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :"Field can not be empty!!!"
      }
          }) 
    
  } else if (this.state.FormName && this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && this.state.FormPopulation && this.state.FormTotalHospitalBeds  && !this.state.FormPeriodType &&  this.state.FormTimeToElapse){
     this.setState({FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "Field can not be empty!!!",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :""
      }
          })  
  } else if (this.state.FormName && this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && this.state.FormPopulation && this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  !this.state.FormTimeToElapse){
  this.setState({FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "Field can not be empty!!!",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :""
      }
    })
  }else if (this.state.FormName && this.state.FormAvgAge && this.state.FormAvgDailyIncomeInUSD&& this.state.FormAvgDailyIncomePopulation 
  && this.state.FormReportedCases && this.state.FormPopulation && this.state.FormTotalHospitalBeds  && this.state.FormPeriodType &&  this.state.FormTimeToElapse){
     this.setState({
      TableImpact:Impact,
      TableSevereImpact:SevereImpact,
      FormError:{
      FormName : "",
      FormAvgAge :"",
      FormAvgDailyIncomeInUSD :"",
      FormAvgDailyIncomePopulation :"",
      FormPeriodType : "",
      FormTimeToElapse : "",
      FormReportedCases : "",
      FormPopulation : "",
      FormTotalHospitalBeds :""
      }
          
  }) 

    console.log(Impact,SevereImpact)
      console.log( inputData);

 
    }
     
   
   
  

 
}


  
 
 
  render(){ 
 
  return(
  <div className='App'>
  <Header />
    <div className="main">
        <Form onFormSubmit={this.onFormSubmit} onNameChange={this.onNameChange} onAvgAgechange={this.onAvgAgechange} 
         onAvgDailyIncomeInUSDChange={this.onAvgDailyIncomeInUSDChange} onAvgDailyIncomePopulationChange={this.onAvgDailyIncomePopulationChange}
        onPeriodTypeSelect={this.onPeriodTypeSelect}  onTimeToElapseChange={this.onTimeToElapseChange} onReportedCasesChange={this.onReportedCasesChange}
            onTotalHospitalBedsChange={this.onTotalHospitalBedsChange} onPopulationChange={this.onPopulationChange} FormError={this.state.FormError}/>
       <Table Impact={this.state.TableImpact} SevereImpact={this.state.TableSevereImpact}/>
   </div>
    <Footer />
  </div>
  );
  }
}

export default App;
  
  