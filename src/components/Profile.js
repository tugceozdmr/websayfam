import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-content">
        <div>
          <h3>Profile</h3>
          <table>
            <tr>
              <td>Birthday:</td>
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
        </div>
        <div className="aboutme">
          <h3>About Me</h3>
          <div className="aboutme-content">
            <div>
              I am studying at WorkinTech in order to use my analytical skills
              and work in the software industry, which is my field of interest. I have actively completed  
                 projects during my education process.
            </div>
            <div>
         You can visit my GitHub pageto see which projects 
            </div>
            <div>
               I have
              completed.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
