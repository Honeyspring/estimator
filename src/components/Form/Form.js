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
        console.log(event.target.value);
        
    }
   onAvgAgechange=(event)=>{
        this.setState({FormAvgAge:event.target.value});
        console.log(event.target.value);
    }

   onAvgDailyIncomeInUSDChange=(event)=>{
   	 this.setState({FormAvgDailyIncomeInUSD:event.target.value});
        console.log(event.target.value);
    }
    onAvgDailyIncomePopulationChange=(event)=>{
        this.setState({FormAvgDailyIncomePopulation:event.target.value});
        console.log(event.target.value);
    }
 	onpPeriodTypeSelect=(event)=>{
        this.setState({FormPeriodType:event.target.value});
        console.log(event.target.value);
    }
    onTimeToElapseChange=(event)=>{
        this.setState({FormTimeToElapse:event.target.value});
        console.log(event.target.value);
    }
    onReportedCasesChange=(event)=>{
        this.setState({FormReportedCases:event.target.value});
        console.log(event.target.value);
    }
     onPopulationChange=(event)=>{
        this.setState({FormPopulation:event.target.value});
        console.log(event.target.value);
    }
     onTotalHospitalBedsChange=(event)=>{
        this.setState({FormTotalHospitalBeds:event.target.value});
        console.log(event.target.value);
    }
onFormSubmit = (inputData,reportedCases,totalHospitalBeds,avgDailyIncomePopulation,timeToElapse,avgDailyIncomeInUSD,periodType) => {
   avgDailyIncomeInUSD =this.state.FormAvgDailyIncomeInUSD;
    avgDailyIncomePopulation =this.state.FormAvgDailyIncomePopulation;
   periodType = this.state.FormPeriodType;
   timeToElapse = this.state.FormTimeToElapse;
    reportedCases = this.state.FormReportedCases;
   totalHospitalBeds=this.state.FormTotalHospitalBeds

      const severeImpact = covid19ImpactEstimator(inputData).severeImapct;
     const  Impact = covid19ImpactEstimator(inputData).impact
  
        this.props.loadData(Impact,severeImpact);
        console.log(Impact,severeImpact);
 
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
            <input type="text" className="pa2 hover-white w-100" onChange={this.onNameChange}  name="region-name"  id=" data-name " required="required"/>
            </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgAge">Average Age</label>
            <input className="pa2    hover-white w-100" type="text" onChange={this.onAvgAgechange}  name="region-avgAge"  id=" data-avgAge" required="required"/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgDailyIncomeInUSD">Average Daily Income In USD</label>
            <input className="pa2   hover-white w-100" type="text" onChange={this.onAvgDailyIncomeInUSDChange}  name="region-avgDailyIncomeInUSD"  id=" data-avgDailyIncomeInUSD" required="required"/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgDailyIncomePopulation">Average Daily Income Population</label>
            <input className="pa2   hover-white w-100" type="text" onChange={this.onAvgDailyIncomePopulationChange}  name="region-avgDailyIncomePopulation"  id=" data-avgDailyIncomePopulation" required="required"/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="periodType">Period Type</label>
            <input className="pa2  radio hover-white" type="radio" onChange={this.onpPeriodTypeSelect}  name="periodType" value="Daily" id="data-period-type-Daily" required="required"/>Daily
              <input className="pa2 radio   hover-white " type="radio" onChange={this.onpPeriodTypeSelect}  name="periodType" value="Weekly" id="data-period-type-Weekly" required="required"/>Weekly
                <input className="pa2 radio hover-white " type="radio" onChange={this.onpPeriodTypeSelect}  name="periodType" value="Monthly" id="data-period-type-Monthly" required="required"/>Monthly
        </div>
        <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="timeToElapse" >Time To Elapse </label> 
            <input className="b pa2    hover-white w-100" type="text"  onChange={this.onTimeToElapseChange} name="timeToElapse"  id=" data-time-to-elapse " required="required" />
        </div>
        <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="reportedCases" >Reported Cases</label> 
            <input className="b pa2    hover-white w-100" type="text"  onChange={this.onReportedCasesChange} name="reportedCases"  id="data-reported-cases " required="required" />
        </div>
         <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="population" >Population</label> 
            <input className="b pa2    hover-white w-100" type="text"  onChange={this.onPopulationChange} name=" population"  id="data-population" required="required" />
        </div>
         <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="totalHospital" >Total Hospital Beds</label> 
            <input className="b pa2    hover-white w-100" type="text"  onChange={this.onTotalHospitalBedsChange} name="totalHospitalBeds"  id=" data-total-hospital-beds " required="required" />
        </div>
       
        </fieldset>
        <div className="">
        <input className="b ph3 pv2  ba b--black grow pointer f6 dib btn" onClick={this.onFormSubmit}type="submit" id ="data-goestimate" value="Estimate"/>
        
            </div>
            </div>
            </main>
     </article> 
      );
    }
}
export default Form;