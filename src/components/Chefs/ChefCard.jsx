import React, { Fragment } from "react";
import './ChefCards.css';
import hat from '../../images/hat/klipartz_chef.com.png';
export function ChefCard(){
  return(
    <Fragment>
      {/* <h1> I am a ChefCard</h1> */}
      <section className="chefsSection">
        <div className="chefBox">
        <img src="https://img.icons8.com/offices/40/000000/chef-hat.png"/>
          Chef Figma designer
        </div>
        <div className="chefBox">
        <img src="https://img.icons8.com/offices/40/000000/chef-hat.png"/>
          Chef Front End
        </div>
        <div className="chefBox">
        <img src="https://img.icons8.com/offices/40/000000/chef-hat.png"/>
          Chef Back End
        </div>
        <div className="chefBox">
        <img src="https://img.icons8.com/offices/40/000000/chef-hat.png"/>
          Chef HTML comunications
        </div>
        <div className="chefBox">
        <img src="https://img.icons8.com/offices/40/000000/chef-hat.png"/>
          Chef Biologic
        </div>
      </section>
    </Fragment>
  )
}