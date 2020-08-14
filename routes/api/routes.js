const router = require("express").Router();
const nodemailer = require("nodemailer");

// sendEmail()
// matches with /api/sendEmail
router.post("/sendEmail", async function (req, res) {
  // create transporter object with smtp server details
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    // host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "rod.schmitt@ethereal.email",
      pass: "6HtBBXE7EH6SDK7JXD",
    },
  });

  // build message
  const { email, name, type, description } = req.body;
  const remitente =
    "<strong>Remitente: </strong><span>" + clientEmail + "</span>";
  const nombreCliente = "<strong>Nombre: </strong><span>" + name + "</span>";
  const tipo = "<strong>Tipo: </strong><span>" + type + "</span>";
  const descripción =
    "<strong>Descripción: </strong><span>" + description + "</span>";

  // send email
  await transporter.sendMail({
    from: clientEmail,
    to: "aldoglez34@gmail.com",
    subject: "aldosolano.com -- " + type + " -- " + name,
    html:
      remitente +
      "<br/>" +
      nombreCliente +
      "<br/>" +
      tipo +
      "<br/>" +
      descripción,
  });

  // send response to the client
  res.send(
    "Gracias por ponerte en contacto conmigo, te responderé a la brevedad al correo proporcionado."
  );
});

module.exports = router;
