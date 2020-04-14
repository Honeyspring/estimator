import React ,{Component}from 'react';
import './Form.css';
import covid19ImpactEstimator from '../estimator';
class Form extends Component {
    constructor(props){
        super(props);
          this.state = {
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
 	onpPeriodTypeSelect=(event)=>{
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
onFormSubmit = (inputData) => {
   inputData.avgDailyIncomeInUSD =this.state.FormAvgDailyIncomeInUSD;
    inputData.avgDailyIncomePopulation =this.state.FormAvgDailyIncomePopulation;
   inputData.periodType = this.state.FormPeriodType;
   inputData.timeToElapse = this.state.FormTimeToElapse;
    inputData.reportedCases = this.state.FormReportedCases;
   inputData.totalHospitalBeds=this.state.FormTotalHospitalBeds

      const severeImpact = covid19ImpactEstimator(inputData).severeImapct;
     const  Impact = covid19ImpactEstimator(inputData).impact
  
        this.props.loadData(Impact,severeImpact);
   
 
};



 render(){
    return(

        <article className="ma4 br3 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className=" pa4 black-80">  
        <div className=" measure centre">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f3 fw6 ph0 mh0">Please carefully Fill Out All Data Correctly</legend>
        <div className="mt3 ">
            <label className="db fw6 lh-copy f4"  htmlFor="region">Region</label>
            <label className="db fw6 lh-copy f6"  htmlFor="name">name</label>
            <input type="text" className="pa2 hover-white w-100" onChange={this.onNameChange}  name="region-name"  id=" data-name " required="required" data-name />
            </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgAge">Average Age</label>
            <input className="pa2    hover-white w-100" type="number" onChange={this.onAvgAgechange}  name="region-avgAge"  id=" data-avg-age" required="required" data-avg-age/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgDailyIncomeInUSD">Average Daily Income In USD</label>
            <input className="pa2   hover-white w-100" type="number" onChange={this.onAvgDailyIncomeInUSDChange} name="region-avgDailyIncomeInUSD"  id="data-avg-daily-income-in-usd" required="required" data-avg-daily-income-in-usd/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgDailyIncomePopulation">Average Daily Income Population</label>
            <input className="pa2   hover-white w-100" type="number" onChange={this.onAvgDailyIncomePopulationChange} name="region-avgDailyIncomePopulation"  id=" data-avgDaily-income-population" required="required"data-avg-daily-income-population/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="periodType">Period Type</label>
            <input className="pa2  radio hover-white" type="radio" onChange={this.onpPeriodTypeSelect}  name="periodType" value="Daily" id="data-period-type-Daily" required="required" data-period-type-days/>Daily
              <input className="pa2 radio   hover-white " type="radio" onChange={this.onpPeriodTypeSelect}  name="periodType" value="Weekly" id="data-period-type-Weekly" required="required" data-period-type-weeks/>Weekly
                <input className="pa2 radio hover-white " type="radio" onChange={this.onpPeriodTypeSelect}  name="periodType" value="Monthly" id="data-period-type-Monthly" required="required" data-period-type-months/>Monthly
        </div>
        <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="timeToElapse" >Time To Elapse </label> 
            <input className="b pa2    hover-white w-100" type="number"  onChange={this.onTimeToElapseChange} name="timeToElapse"  id=" data-time-to-elapse " required="required" data-time-to-elapse/>
        </div>
        <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="reportedCases" >Reported Cases</label> 
            <input className="b pa2    hover-white w-100" type="number"  onChange={this.onReportedCasesChange} name="reportedCases"  id="data-reported-cases " required="required" data-reported-cases/>
        </div>
         <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="population" >Population</label> 
            <input className="b pa2    hover-white w-100" type="number"  onChange={this.onPopulationChange} name=" population"  id="data-population" required="required" data-population/>
        </div>
         <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="totalHospital" >Total Hospital Beds</label> 
            <input className="b pa2    hover-white w-100" type="number"  onChange={this.onTotalHospitalBedsChange} name="totalHospitalBeds" id=" data-total-hospital-beds " required="required" data-total-hospital-beds />
        </div>
       
        </fieldset>
        <div className="">
        <input className="b ph3 pv2  ba b--black grow pointer f6 dib btn" onClick={this.onFormSubmit}type="submit" id ="data-go-estimate" value="Estimate" data-go-estimate/>
        
            </div>
            </div>
            </main>
     </article> 
      );
    }
}
export default Form;