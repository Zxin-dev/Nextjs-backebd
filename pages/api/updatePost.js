import dataRequest from "../utils/dataRequest";

export default async function updatePost(req, res) {
  const { text } = req.body;
  const id = req.query._id;
  console.log(req.body.text);
  const result = await dataRequest("updateOne", {
    filter: { _id: { $oid: id } },
    update: {
      $set: {
        text: text,
      },
    },
  });
  res.status(200).json(result);
}
