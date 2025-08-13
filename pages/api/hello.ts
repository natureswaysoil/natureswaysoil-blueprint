import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    name: 'Nature\'s Way Soil API',
    message: 'API is working correctly' 
  })
}