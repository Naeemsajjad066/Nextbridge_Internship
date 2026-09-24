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

export const sendEmailVerificationToken = async (email, verificationToken) => {
  const verificationUrl = `http://localhost:5173/verify-email?token=${verificationToken}`

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Confirm your email address',
    text: `
      Please confirm your email address.

      Open this link to verify your account:

      ${verificationUrl}

      This link will expire in 15 minutes.
    `,
    html: `
      <p>Please confirm your email address.</p>
      <p><a href="${verificationUrl}">Verify your account</a></p>
      <p>This link will expire in 15 minutes.</p>
    `,
  })
}
