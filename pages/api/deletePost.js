import dataRequest from "../utils/dataRequest";

export default async function deletePost(req, res) {
  const id = req.query._id;
  console.log(id);
  const result = await dataRequest("deleteOne", {
    filter: { _id: { $oid: id } },
  });
  res.status(200).json(result);
}
