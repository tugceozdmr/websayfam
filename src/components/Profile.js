import React from "react";

export default function Profile() {
  return (
    <div className="prf">
      
      <h1>
        Profile <br />
        <p className="prf2">Profile <br /> <br /></p>
          <table  className="prf3">
            <tr>
              <td  className="prf4">Birthday:</td>
              <td>06.06.1994</td>
            </tr>
            <tr>
              <td>City ​​of Residence:</td>
              <td>Bursa</td>
            </tr>
            <tr>
              <td>Educational Status:</td>
              <td>Bachelor</td>
            </tr>
            <tr>
              <td>Position</td>
              <td>Full-Stack Developer:</td>
            </tr>
          </table>
      </h1>
      <div className="about">
        About Me <br /> <br />
        <div className="about2">
          <h3>
          I am studying at WorkinTech in order to use my analytical <br />
          skills and work in the software industry, which is my field of
          interest.
          <br />
          I have actively completed projects during my education process. <br />
          You can visit my GitHub page to see which projects I have completed.{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
