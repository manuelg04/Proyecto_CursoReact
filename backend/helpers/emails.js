import nodemailer from "nodemailer"

export const emailRegistro =async (datos) => {
    const { email, nombre, token } = datos
    const  transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      //Informacion del email

      const info = await transport.sendMail({
        from: '"Uptask - Admin de proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptrask - Confirma tu cuenta",
        text: "Comprueba tu cuenta en uptask",
        html: `<p>Hola: ${nombre} Comprueba tu cuenta en uptaask</p>
        <p> Confirma en el siguiente enlance:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
        <p> Si tu no creaste esta cuenta, ignora mensaje </p>

        `
      })
}

export const emailOlvidePassword =async (datos) => {
  const { email, nombre, token } = datos

  // TODO: MOVER HACIA VARIABLES DE ENTORNO

  const  transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
    });

    //Informacion del email

    const info = await transport.sendMail({
      from: '"Uptask - Admin de proyectos" <cuentas@uptask.com>',
      to: email,
      subject: "Uptrask - Reestablece tu password",
      text: "Reestablece tu password",
      html: `<p>Hola: ${nombre} Has solicitidado reestablecer tu password</p>
      <p> Sigue el siguiente enlance para generar una nueva password
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablece mi password</a>
      <p>  </p>

      `
    })
}