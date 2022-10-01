// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import users from "../../db/models/users"
import { createToken } from "../../globals/token";

export default async function handler(req, res) {
const user={
  id:3,
  username: "youssef",
  email: "email@email.com",
  deviceId: "15",
}
console.log(createToken(user))
  const test = await users.create({ fullname: "helel", fakename: "nour", password: "gdgdgfdf", email: "gffdgdfgfd", status: true });
  if (test) {
    res.status(200).json({ status: true })

  } else { res.status(200).json({ status: false }) }

}
