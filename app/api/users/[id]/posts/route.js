import { connectToDb } from '@utils/database'
import Prompt from '@models/prompt'
export const GET = async (req, { params }) => {
  try {
    await connectToDb()
    const posts = await Prompt.find({
      creator: params.id
    }).populate('creator')

    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new Response('Fail to fetch', { status: 500 })
  }
}
