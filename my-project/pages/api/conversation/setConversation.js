import _ from 'lodash';
import conversation from "../../../db/models/conversation"
import { decodeToken, verifyToken } from '../../../globals/token';
import nc from "next-connect";
import { GLobals } from "../../globals/globalFunction";
const setConversation = nc(GLobals.onError)

export default setConversation.post(async (req, res) =>{


    const { token } = req.headers
    // U2FsdGVkX18K3jDTQSN3dUzXKADZAI2Hagen46a4IHY9VIkR3iZKi1YI4L7KvtiiC0/Rm7LiX93KBIijDko5BuKt5ea3WHgik8KdkCCvAwiZxI6+N7v2Q30qZ9bMlt65uIBrBnNWCM8RjWah3cs2/MVy+GlmNb1mifkbnkRV0PMzqiKE4cLjrX50rWb+HnW+GebjJtHjbmnFLATsv3wWD6aBRpW9H5CaBHfnOaZnUN13PVdaLm99zU3DvpnslJKZIggf1LUbQuMviet4rE1oxMR7FMDF3WoI4MuUrU+PPCLjkLsBv8H/RdUCq/VTUfP3    

    const { receiverId } = req.body

    if (!_.isEmpty(verifyToken(token))) {

        const newtoken = decodeToken(token)

        const convr = await conversation.create({ senderId: newtoken.id, receiverId: receiverId })

        if (_.isEmpty(convr)) {
            res.status(200).json(({
                status: false,
                errors: "Something went wrong please try again later."
            }))
        }

        res.status(200).json(({
            status: true,
            errors: "Conversation created"
        }))

    } else {

        res.status(403).json(({
            status: true,
            errors: "Invalid token"
        }))
    }
})
