import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      { role: 'system', content: "You are a helpful assistant for TransMENA Network, a logistics and freight forwarding company operating in the Middle East and North Africa region. Provide concise and accurate information about TransMENA's services, partners, and logistics solutions." },
      ...messages
    ],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}

