import React from "react";

import logo from "../images/m3.PNG";

const About3 = () => {
  return (
    <section className="container mt-2 mb-4">
      <div className=" mx-auto ">
        <div className="col-md text-center" id="#company">
          <h3 className="mt-4 mb-4">Our Achievements</h3>
        </div>

        <img
          src={logo}
          alt={About3.PNG}
          className="col-md mb-4"
          height="350px"
          style={{ objectFit: "cover" }}
        />

        <p>
          We have impacted over 350,000 children and the our COGNITO
          micronutrient powder (COGNITO MNP) is effective and efficacious. We
          have over 6 million sachets (2,000 cartons) which we can deliver
          within the next 14 days to any of the states where COGNITO MNP is
          urgently needed to address the malnutrition challenge facing many
          Nigerian children. The products get to the states within 48 hours to a
          maximum of 96 hours for very far destinations. Children who are
          malnourished regained their good health. Children you couldn't stand
          on their own were able to stand and also Walk. Children you couldn't
          communicate were able to overcome the delayed IQ impairment. Children
          with lost of appetite were able to overcome such health challenge and
          lots more. I have phone numbers of some of the parents. COGNITO is
          very effective and efficient. It's also affordable. So many mothers
          have been coming back to thank me for introducing them to COGNITO
          Micronutrient Powder, WHY-because their children recovers quickly
          through the use of COGNITO. We monitor the growth of babies through
          Weighing and any health facility, be it Primary, Secondary or Tertiary
          health facility that growth monitoring and promotion (GMP) is not
          done, are faulty because it's a medium where so many health challenges
          are being discovered and appropriate attention drown on how to handle
          such cases. Any Baby whose weight is below the standard, we advise. We
          know that early detection saves Life.{" "}
        </p>
      </div>
    </section>
  );
};
export default About3;
