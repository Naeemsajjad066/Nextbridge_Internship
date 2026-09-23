import fs from 'fs/promises'

const filePath = process.env.PASSWORD_RESET_TOKENS_FILE_PATH

export const getResetTokens = async () => {
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

export const saveResetTokens = async (tokens) => {
  await fs.writeFile(filePath, JSON.stringify(tokens, null, 2))
}
