import React from 'react';
import './Table.css';

const Table=({Impact,severeImpact})=>{
    
    return(
        <article className="ma4 br3 ba dark-gray b--black-10 mv5 w-100 w-50-m w-75-l mw shadow-5 center">
        <main className=" pa4 black-80">  
        <legend className="f3 fw6 ph0 mh0">Estimator Results</legend>                                       
           <div className=" measure centre" style={{overflowX:'auto'}}>
          <table >                                   
          <tbody >
        <tr>
      <th style={{width:'50%'}}>Features</th>
      <th>Impact</th>    
      <th>Severe Impact</th>
    </tr>
    <tr>
      <td>Currently Infected</td>
      <td className="fw6 lh-copy f6"  value="severeImpact-currentlyInfected"><i className="fa fa-check">{severeImpact.currentlyInfected}</i></td>
      <td className="fw6 lh-copy f6" value="impact-currentlyInfected"><i className="fa fa-remove">{Impact.currentlyInfected}</i></td> 
    </tr>
    <tr>
      <td> Infections By Requested Time</td>
      <td className="fw6 lh-copy f6" value="impact-infectionsByRequestedTime"><i className="fa fa-check">{severeImpact.infectionsByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="severeImpact-infectionsByRequestedTime"><i className="fa fa-remove">{Impact.infectionsByRequestedTime}</i></td>
    </tr>
    <tr>
      <td className="fw6 lh-copy f6"> Severe Cases By Requested Time</td>
      <td className="fw6 lh-copy f6"  value="impact-severeCasesByRequestedTime"><i className="fa fa-check">{severeImpact.severeCasesByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="severeImpact- severeCasesByRequestedTime"><i className="fa fa-remove">{Impact.severeCasesByRequestedTime}</i></td>
    </tr>
    <tr>
      <td> Hospital Beds By Requested Time</td>
      <td className="fw6 lh-copy f6" value="impact-hospitalBedsByRequestedTime"><i className="fa fa-check">{severeImpact.hospitalBedsByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="severeImpact-hospitalBedsByRequestedTime"><i className="fa fa-remove">{Impact.hospitalBedsByRequestedTime}</i></td>
    </tr>
    <tr>
      <td> cases For ICU By Requested Time</td>
      <td className="fw6 lh-copy f6"  value="impact-casesForICUByRequestedTime"><i className="fa fa-check">{severeImpact.casesForICUByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="severeImpact-casesForICUByRequestedTime"><i className="fa fa-remove">{Impact.casesForICUByRequestedTime}</i></td>
    </tr>
     <tr>
      <td className="fw6 lh-copy f6">  cases For Ventilators By Requested Time</td>
      <td className="fw6 lh-copy f6"  value="impact-casesForVentilatorsByRequestedTime "><i className="fa fa-check">{severeImpact.casesForVentilatorsByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="severeImpact-casesForVentilatorsByRequestedTime "><i className="fa fa-remove">{Impact.casesForVentilatorsByRequestedTime}</i></td>
    </tr>
     <tr>
      <td className="fw6 lh-copy f6">  Dollars In Flight</td>
      <td className="fw6 lh-copy f6"  value="impact-dollarsInFlight"><i className="fa fa-check">{severeImpact.dollarsInFlight}</i></td>
      <td className="fw6 lh-copy f6"  value="severeImpact-dollarsInFlight"><i className="fa fa-remove">{Impact.dollarsInFlight}</i></td>
    </tr>
    </tbody>

   
  </table>
 </div>
    </main>
     </article> 
         );
    }

export default Table;