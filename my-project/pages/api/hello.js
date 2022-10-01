// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import users from "../../db/models/users"

export default async function handler(req, res) {
  console.log(users)
  const test = await users.create({ fullname: "helel", fakename: "nour", password: "gdgdgfdf", email: "gffdgdfgfd", status: true });
  if (test) {
    res.status(200).json({ status: true })

  } else { res.status(200).json({ status: false }) }

}
