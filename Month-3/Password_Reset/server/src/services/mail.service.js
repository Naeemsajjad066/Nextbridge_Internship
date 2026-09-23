import { transporter } from '../config/mail.js'

export const sendPasswordResetEmail = async (email, resetToken) => {
  const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}`

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Reset your password',
    text: `
      You requested a password reset.

      Click the link below to reset your password:

      ${resetUrl}

      This link will expire in 15 minutes.
    `,
  })
}
