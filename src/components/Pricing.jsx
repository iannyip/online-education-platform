import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

export default function Pricing() {
  console.log("Wow admin is here");
  return (
    <div className="row mt-4">
      <div className="col-12 d-flex justify-content-center">
        <img
          src="images/javascript-on-off.gif"
          className="js-gif-style"
          alt=""
        />
      </div>
      <PricingTable highlightColor="#4b5b63">
        {/* Option 1 */}
        <PricingSlot
          // onClick={this.submit}
          buttonText="GET STARTED"
          title="FREE"
          priceText="$0/month"
        >
          <PricingDetail>
            <b>Limited</b> Access
          </PricingDetail>
          <PricingDetail>
            <b>Untracked</b> Progress
          </PricingDetail>
          <PricingDetail strikethrough>
            {" "}
            <b>One-on-one</b> coaching
          </PricingDetail>
        </PricingSlot>

        {/* Option 2 */}
        <PricingSlot
          highlighted
          // onClick={this.submit}
          buttonText="SIGN UP"
          title="MONTHLY"
          priceText="$25/month"
        >
          <PricingDetail>
            <b>Unlimited</b> Access
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Tracked</b> Progress
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Masterclass</b> with Jit Corn
          </PricingDetail>
        </PricingSlot>

        {/* Option 3 */}
        <PricingSlot
          // onClick={this.submit}
          buttonText="SIGN UP"
          title="ANNUAL"
          priceText="$300/year"
        >
          <PricingDetail>
            <b>Unlimited</b> Access
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Tracked</b> Progress
          </PricingDetail>
          <PricingDetail>
            {" "}
            Intern at <b>Rocket Academy</b>
          </PricingDetail>
        </PricingSlot>
      </PricingTable>
    </div>
  );
}
