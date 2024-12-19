import nodemailer from 'nodemailer'

export const sendEmail = async (
  mailerConfig: any,
  emailProp: {
    body: string
    to: string[]
    subject: string
    from: string
  }
) => {
  const transporter = nodemailer.createTransport({ ...mailerConfig })
  const { to, subject, from, body } = emailProp
  await transporter.sendMail(
    // mail options
    {
      from, // replace with your own address
      to, // replace with your own address
      subject,
      html: body || '',
    }
  )
}
