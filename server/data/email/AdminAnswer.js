exports.adminAnswer = input => {
    return {
      from: '"HR System" <no_reply@vancoastindustries.com>',
      to: input.email,
      subject: "Your complaint received a new status",
      html: `<table style="background-color:#fff; display:block; padding: 15px; min-height: 400px; width: 600px"><tbody style="background-color:#fff; width: 100%"> 
      <tr>        
          <td style="background: #ff9b35; color:#131313; display:block; width: 600px;">   
                <h2 style="text-align:center">HR SYSTEM</h2>
          <td style="color:#616161; display:block; max-width: 600px; padding: 0 15px;">
              <h3 style="color: #131313;">Hello ${input.username}!</h3>
              <p style="padding: 5px; margin-bottom: 15px; color: black; ">
              We have an update about your complaint. We hope to solve your question as soon as possible.</p>
              <h3 style="padding: 5px; margin-bottom: 20px; color: #131313;">ADMIN ANSWER:</h3>
              <p style="padding: 5px; margin-bottom: 20px; color: #616161; font-size: 18px;"><small><b>Status:</b> ${input.complaint.status}</small></p>
              <p style="padding: 5px; margin-bottom: 45px; color: #616161; font-size: 18px;"><small><b>Message:</b> ${input.adminMessage}</small></p>
              <hr style="border: 1px solid #ff9b35;">
              
              <p style="padding: 5px; margin-top: 20px; color:#616161;">If you did not complaint, please reply to let us know and ignore this email. If you have any comments or questions, please don't hesitate to reach us on our report form.</p>              
              
              <p style="color: #131313; margin-top: 25px; font-weight: bold; font-size: 15px; padding: 5px;">©2018 - HR SYSTEM TEAM</p>
              </td>               
            </tr>               
          </table>`
    };
  };