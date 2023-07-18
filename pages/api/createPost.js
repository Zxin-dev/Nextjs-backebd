import dataRequest from "../utils/dataRequest";

export default async function getOnePost(req, res) {
  const { name, text } = req.body;
  console.log(name + ": " + text);
  const result = await dataRequest("insertOne", {
    document: {
      name: name,
      text: text,
    },
  });
  res.status(200).json(result);
}
