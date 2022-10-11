import _ from 'lodash';
import conversation from "../../../db/models/conversation"
import message from "../../../db/models/message"

import { decodeToken, verifyToken } from '../../../globals/token';


export default async function getConversation(req, res) {
    const { token } = req.headers
    const { receiverId } = req.body

    if(!_.isEmpty(verifyToken(token))){
        const newtoken=decodeToken(token)

        const convr = await conversation.findOne({where:{senderId:newtoken.id,receiverId:receiverId}})

        if (_.isEmpty(convr)) {
            res.status(200).json(({
                status: false,
                errors: "Something went wrong please try again later."
            }))
        }
        const Messages = await message.findAll({where:{idConv:convr.dataValues.id}})

        if (_.isEmpty(Messages)) {
            res.status(200).json(({
                status: false,
                errors: "Something went wrong please try again later."
            }))
        }

    
        res.status(200).json(({
            status: true,
            messages: Messages
        }))
    
    }else{

    res.status(200).json(({
        status: true,
        errors: "Invalid token"
    }))
}




}
