// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
export default (req: NextApiRequest, res: NextApiResponse) => {
  const OK = 200
  res.status(OK).json({ name: "John Doe" })
}
