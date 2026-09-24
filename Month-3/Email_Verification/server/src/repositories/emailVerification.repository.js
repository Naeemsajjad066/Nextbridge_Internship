import fs from 'fs/promises'

const filePath = process.env.EMAIL_VERIFICATION_TOKEN_FILE_PATH

export const getVerificationTokens = async () => {
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

export const saveVerificationTokens = async (tokens) => {
  await fs.writeFile(filePath, JSON.stringify(tokens, null, 2))
}
