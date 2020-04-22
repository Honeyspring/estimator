import React from 'react';
import './Form.css';



const Form =({onFormSubmit,onNameChange,onAvgAgechange,onAvgDailyIncomeInUSDChange, onPopulationChange,onPeriodTypeSelect,onReportedCasesChange,onTimeToElapseChange,onTotalHospitalBedsChange,onAvgDailyIncomePopulationChange,FormError})=>{

    

    return(

        <article className="ma4 br3 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className=" pa4 black-80">  
        <div className=" measure centre">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f3 fw6 ph0 mh0">Please carefully Fill Out All Data Correctly</legend>
        <div className="mt3 ">
            <label className="db fw6 lh-copy f4"  htmlFor="region">Region</label>
            <label className="db fw6 lh-copy f6"  htmlFor="name">name</label>
            <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.FormName}</label>
            <input type="text"  className="pa2 hover-green w-100 " onChange={onNameChange}  name="region-name"  id=" data-name " required="required" data-name />
           
            </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgAge">Average Age</label>
            <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.FormAvgAge}</label>
            <input className="b pa2 hover-green w-100" type="number" onChange={onAvgAgechange}  name="region-avgAge"  id=" data-avg-age" required="required" data-avg-age/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgDailyIncomeInUSD">Average Daily Income In USD</label>
             <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.FormAvgDailyIncomeInUSD }</label> 
            <input className="b pa2 hover-green w-100" type="number" onChange={onAvgDailyIncomeInUSDChange} name="region-avgDailyIncomeInUSD"  id="data-avg-daily-income-in-usd" required="required" data-avg-daily-income-in-usd/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="avgDailyIncomePopulation">Average Daily Income Population</label>
             <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.FormAvgDailyIncomePopulation}</label> 
            <input className="b pa2 hover-green w-100" type="number" onChange={onAvgDailyIncomePopulationChange} name="region-avgDailyIncomePopulation"  id=" data-avgDaily-income-population" required="required"data-avg-daily-income-population/>
        </div>
         <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="periodType">Period Type</label>
             <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.FormPeriodType }</label> 
            <input className="b pa2  radio hover-green" type="radio" onChange={onPeriodTypeSelect}  name="periodType" value="Daily" id="data-period-type-Daily" required="required" data-period-type-days/>Daily
              <input className="b pa2 radio   hover-green " type="radio" onChange={onPeriodTypeSelect}  name="periodType" value="Weekly" id="data-period-type-Weekly" required="required" data-period-type-weeks/>Weekly
                <input className="b pa2 radio hover-green " type="radio" onChange={onPeriodTypeSelect}  name="periodType" value="Monthly" id="data-period-type-Monthly" required="required" data-period-type-months/>Monthly
        </div>
        <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="timeToElapse" >Time To Elapse </label> 
             <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.FormTimeToElapse }</label>  
            <input className="b pa2 hover-green w-100" type="number"  onChange={onTimeToElapseChange} name="timeToElapse"  id=" data-time-to-elapse " required="required" data-time-to-elapse/>
        </div>
        <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="reportedCases" >Reported Cases</label>
             <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.ReportedCases }</label>  
            <input className="b pa2 hover-green w-100" type="number"  onChange={onReportedCasesChange} name="reportedCases"  id="data-reported-cases " required="required" data-reported-cases/>
        </div>
         <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="population" >Population</label> 
             <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.FormTimeToElapse }</label>      
            <input className="b pa2 hover-green w-100" type="number"  onChange={onPopulationChange} name=" population"  id="data-population" required="required" data-population/>
        </div>
         <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="totalHospital" >Total Hospital Beds</label>  
             <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{FormError.FormTotalHospitalBeds }</label>   
            <input className="b pa2 hover-green w-100" type="number"  onChange={onTotalHospitalBedsChange} name="totalHospitalBeds" id=" data-total-hospital-beds " required="required" data-total-hospital-beds />
        </div>
        
        </fieldset>
        <div className="">
        <input className="b ph3 pv2  ba b--black grow pointer f6 dib btn" onClick={onFormSubmit}type="submit" id ="data-go-estimate" value="Estimate" data-go-estimate/>
        
            </div>
            </div>
            </main>
     </article> 
      );
    }

export default Form;