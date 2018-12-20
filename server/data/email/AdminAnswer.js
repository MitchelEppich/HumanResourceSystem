exports.adminAnswer = input => {
    return {
      from: '"HR System" <no_reply@vancoastindustries.com>',
      to: input.email,
      subject: "Your complaint received a new status",
      html: `<table style="background-color:#fff; display:block; padding: 15px;  min-height: 400px; width: 100%"><tbody style="background-color:#fff; width: 100%"> 
      <tr>        
          <td style="background: #ff9b35; color:white; display:block; width: 600px;">  
              <a href="https://growreel.com" target="_blank" style="color:black; padding-top: 10px; padding-bottom: 10px; text-align:center;     text-decoration: none;">
                <h2 style="text-align:center">HR SYSTEM</h2>
              </a>            
          <td style="color:#616161; display:block; max-width: 600px">
              <h3 style="color: #616161;">Hello ${input.username}!</h3>
              <p style="padding: 5px; margin-bottom: 15px; color: black;">
              We have an update about your complaint. We hope to solve your question as soon as possible.</p>
              <h3 style="padding: 5px; margin-bottom: 20px;">ADMIN ANSWER:</h3>
              <p style="padding: 5px; margin-bottom: 20px; color: black;"><small><b>Status:</b> ${input.complaint.status}</small></p>
              <p style="padding: 5px; margin-bottom: 45px; color: black;"><small><b>Message:</b> ${input.adminMessage}</small></p>
              <a href="https://growreel.com" style="text-align: center; background-color: #ff9b35; border: 0; font-size: 15px; margin: 1rem 2rem; padding: 10px 40px; color: black; border-radius: 2px; text-decoration: none">Click here to read!</a>
              <p style="padding: 5px; margin-top: 40px; color:black;">If you did not complaint, please reply to let us know and ignore this email. If you have any comments or questions, please don't hesitate to reach us on our report form.</p>
              <p style="color: #383838; margin-top: 25px; font-weight: bold; font-size: 12px; padding: 5px;">©2018 HR SYSTEM TEAM</p>
              </td>               
            </tr>               
          </table>`
    };
  };