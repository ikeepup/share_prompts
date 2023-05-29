import { connectToDb } from '@utils/database'
import Prompt from '@models/prompt'
export const GET = async (req, res) => {
  try {
    await connectToDb()
    const posts = await Prompt.find({}).populate('creator')

    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Fail to fetch', { status: 500 })
  }
}
export const revalidate = false
