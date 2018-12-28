exports.actionPost = input => {
  return {
    from: '"HR Team" <no_reply@vancoastindustries.com>',
    to: input.email,
    subject: input.subject,
    html: `<table style="background-color:#fff; display:block; padding: 15px;  min-height: 400px; width: 100%"><tbody style="background-color:#fff; width: 100%"> 
      <tr>        
          <td style="background: #ff9b35; color:white; display:block; width: 600px;">  
              <a href="https://growreel.com" target="_blank" style="color:black; padding-top: 10px; padding-bottom: 10px; text-align:center;     text-decoration: none;">
                <h2 style="text-align:center">Human Resource System</h2>
              </a>            
          <td style="color:#616161; display:block; max-width: 600px">
              <h3 style="color: #616161;">Hello ${input.name
                .split(" ")[0]
                .toUpperCase()}!</h3>
              <p style="padding: 5px; margin-bottom: 15px; color: black;">
              We have an update about your complaint. We hope to solve your situation as soon as possible.</p>
              <h3 style="padding: 5px; margin-bottom: 20px;">Action:</h3>
              <p style="padding: 5px; margin-bottom: 20px; color: black;"><small><b>Status:</b> ${
                input.status
              }</small></p>
              <p style="padding: 5px; color: black;"><small><b>Reporter:</b> ${
                input.name
              }</small></p>
              <p style="padding: 5px; color: black;"><small><b>Reported Parties:</b> ${
                input.reportedParties
              }</small></p>
              <p style="padding: 5px; margin-bottom: 2px; color: black;"><small><b>Incident Date:</b> ${
                input.reportedDate
              }</small></p>
              <p style="padding: 5px; color: black;"><small><b>Description:</b> ${
                input.report
              }</small></p>
              
              <p style="padding: 5px; margin-top: 40px; color:black;">If you did not place this complaint or have any concerns/questions, please speak to your office admin.</p>
              <p style="padding: 5px; margin-top: 40px; color:black;">These email are automatically sent by our system. If you complaint was anonymous please be assured that no one will have access to your identity.</p>
              <p style="color: #383838; margin-top: 25px; font-weight: bold; font-size: 12px; padding: 5px;">©2018 Human Resources Team</p>
              </td>               
            </tr>               
          </table>`
  };
};
