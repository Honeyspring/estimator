import React from 'react';
import './Table.css';


const Table=({Impact,SevereImpact,Disclaimer,region})=>{
   
    return(
        <article className="ma4 br3 ba dark-gray b--black-10 mv5 w-100 w-50-m w-75-l mw shadow-5 center">
        <main className=" pa4 black-80">  
        <legend className="f3 fw6 ph0 mh0">Estimator Results</legend>                                       
           <div className=" measure centre" style={{overflowX:'auto'}}>
          <table >                                   
          <tbody >
   <p className="fw5 lh-copy f5 blue"  value="disclaimer"><i className="fa ">{region}</i></p>
        <tr>
      <th style={{width:'50%'}}>Features</th>
      <th>Impact</th>    
      <th>Severe Impact</th>
    </tr>
    <tr>
      <td>Currently Infected</td>
      <td className="fw6 lh-copy f6" value="impact-currentlyInfected"><i className="fa fa-check">{Impact.currentlyInfected}</i></td> 
      <td className="fw6 lh-copy f6"  value="SevereImpact-currentlyInfected"><i className="fa fa-remove">{SevereImpact.currentlyInfected}</i></td>

    </tr>
    <tr>
      <td> Infections By Requested Time</td>
      <td className="fw6 lh-copy f6" value="impact-infectionsByRequestedTime"><i className="fa fa-check">{Impact.infectionsByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="SevereImpact-infectionsByRequestedTime"><i className="fa fa-remove">{SevereImpact.infectionsByRequestedTime}</i></td>
    </tr>
    <tr>
      <td className="fw6 lh-copy f6"> Severe Cases By Requested Time</td>
      <td className="fw6 lh-copy f6"  value="impact-severeCasesByRequestedTime"><i className="fa fa-check">{Impact.severeCasesByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="SevereImpact- severeCasesByRequestedTime"><i className="fa fa-remove">{SevereImpact.severeCasesByRequestedTime}</i></td>
    </tr>
    <tr>
      <td> Hospital Beds By Requested Time</td>
      <td className="fw6 lh-copy f6" value="impact-hospitalBedsByRequestedTime"><i className="fa fa-check">{Impact.hospitalBedsByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="SevereImpact-hospitalBedsByRequestedTime"><i className="fa fa-remove">{SevereImpact.hospitalBedsByRequestedTime}</i></td>
    </tr>
    <tr>
      <td> cases For ICU By Requested Time</td>
      <td className="fw6 lh-copy f6"  value="impact-casesForICUByRequestedTime"><i className="fa fa-check">{Impact.casesForICUByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="SevereImpact-casesForICUByRequestedTime"><i className="fa fa-remove">{SevereImpact.casesForICUByRequestedTime}</i></td>
    </tr>
     <tr>
      <td className="fw6 lh-copy f6">  cases For Ventilators By Requested Time</td>
      <td className="fw6 lh-copy f6"  value="impact-casesForVentilatorsByRequestedTime "><i className="fa fa-check">{Impact.casesForVentilatorsByRequestedTime}</i></td>
      <td className="fw6 lh-copy f6"  value="SevereImpact-casesForVentilatorsByRequestedTime "><i className="fa fa-remove">{SevereImpact.casesForVentilatorsByRequestedTime}</i></td>
    </tr>
     <tr>
      <td className="fw6 lh-copy f6">  Dollars In Flight</td>
      <td className="fw6 lh-copy f6"  value="impact-dollarsInFlight"><i className="fa fa-check">${Impact.dollarsInFlight}</i></td>
      <td className="fw6 lh-copy f6"  value="SevereImpact-dollarsInFlight"><i className="fa fa-remove">${SevereImpact.dollarsInFlight}</i></td>
    </tr>
    
    </tbody>
   
  </table>
 </div>
  <p className="fw5 lh-copy f5 blue"  value="disclaimer"><i className="fa ">***{Disclaimer}***</i></p>
    </main>
     </article> 
         );
    }

export default Table;