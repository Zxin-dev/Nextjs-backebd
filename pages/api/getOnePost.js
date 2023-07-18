import dataRequest from "../utils/dataRequest";

export default async function getOnePost(req, res) {
  const id = req.query._id;
  const result = await dataRequest("findOne", {
    filter: { _id: { $oid: id } },
  });
  res.status(200).json(result);
}
