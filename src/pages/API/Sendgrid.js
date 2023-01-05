import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.REACT_APP_SENDGRID_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: `${req.body.to}`, // Your email where you'll receive emails
      from: "pujansapkota77@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      text: "and easy ",
      html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
