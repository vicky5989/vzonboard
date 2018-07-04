import React, { Component } from "react";
import { Link } from "react-router-dom";


class About extends Component {

    render() {

        return (
            <div>

               <div className="row"> 
               
                <div className="col-md-4"><div className="panel panel-default">
  <div className="panel-heading">Leadership</div>
  <div className="panel-body">Meet the team that is championing the next generation of telecommunications and technology.</div>
</div>  </div>
                <div className="col-md-4"><div className="panel panel-default">
  <div className="panel-heading">A diverse culture</div>
  <div className="panel-body">We believe that by celebrating diversity across all spectrums makes us a stronger, better company.</div>
</div>  </div>
                <div className="col-md-4"><div className="panel panel-default">
  <div className="panel-heading">A history of innovation </div>
  <div className="panel-body">Verizon was created on June 30, 2000 by Bell Atlantic and GTE Corps., in one of the largest mergers in U.S. history.</div>
</div>  </div>
                
               </div>

            </div>
        );
    }
}



export default About;
