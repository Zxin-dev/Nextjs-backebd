import dataRequest from "../utils/dataRequest";

export default async function getAllPost(req, res) {
  const result = await dataRequest("find", {});
  res.status(200).json(result);
}
