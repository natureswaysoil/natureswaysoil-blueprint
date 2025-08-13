// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  message: string
  timestamp: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    name: 'Nature\&apos;s Way Soil API',
    message: 'Hello from the Nature\&apos;s Way Soil API! This is a sample endpoint ready for your e-commerce integration.',
    timestamp: new Date().toISOString()
  })
}