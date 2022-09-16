import React from "react";
import "./OpeningTimes.css";

const OpeningTimes = () => {
    return (

    <div className="container demo-bg">
<div className="row">
<div className=""></div>
<div className=""></div>
<div className="">
<div className="business-hours">
<h2 className="title">Opening Hours</h2>
<ul className="list-unstyled opening-hours">
<li>Sunday <span className="pull-right">14:00-23:00</span></li>
<li>Monday <span className="pull-right">14:00-23:00</span></li>
<li>Tuesday <span className="pull-right">14:00-23:00</span></li>
<li>Wednesday <span className="pull-right">14:00-23:00</span></li>
<li>Thursday <span className="pull-right">14:00-23:00</span></li>
<li>Friday <span className="pull-right">14:00-00:00</span></li>
<li>Saturday <span className="pull-right">14:00-00:00</span></li>
</ul>
</div>
</div>
</div>
</div>
    )
}
export default OpeningTimes;