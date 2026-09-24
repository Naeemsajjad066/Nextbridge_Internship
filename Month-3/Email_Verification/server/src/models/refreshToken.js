import fs from 'fs/promises'
import 'dotenv/config'

const tokensFilePath = process.env.REFRESH_TOKENS_FILE_PATH

export const saveRefreshToken = async (email, token) => {
  const data = await fs.readFile(tokensFilePath, 'utf-8')
  const tokens = JSON.parse(data)

  tokens.push({
    email,
    token,
    createdAt: new Date().toISOString(),
  })

  await fs.writeFile(tokensFilePath, JSON.stringify(tokens, null, 2))
}

export const findRefreshToken = async (token) => {
  const data = await fs.readFile(tokensFilePath, 'utf-8')
  const tokens = JSON.parse(data)
  return tokens.find((t) => t.token === token)
}

export const deleteRefreshToken = async (token) => {
  const data = await fs.readFile(tokensFilePath, 'utf-8')
  const tokens = JSON.parse(data)
  const filteredTokens = tokens.filter((t) => t.token !== token)
  await fs.writeFile(tokensFilePath, JSON.stringify(filteredTokens, null, 2))
}

export const deleteAllUserTokens = async (email) => {
  const data = await fs.readFile(tokensFilePath, 'utf-8')
  const tokens = JSON.parse(data)
  const filteredTokens = tokens.filter((t) => t.email !== email)
  await fs.writeFile(tokensFilePath, JSON.stringify(filteredTokens, null, 2))
}
