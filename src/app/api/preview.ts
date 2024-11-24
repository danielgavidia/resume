import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;
  const response = await axios.get(url as string);
  const html = await response.data;
  const ogImage = html.match(/<meta property="og:image" content="(.*?)"/)?.[1];
  res.status(200).json(ogImage);
};

export default handler;
