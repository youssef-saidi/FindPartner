import _ from 'lodash';
import message from "../../../db/models/message"
import conversation from "../../../db/models/conversation"

import { decodeToken, verifyToken } from '../../../globals/token';


export default async function getConversation(req, res) {
    const { token } = req.headers
    const { text,receiverId } = req.body

    if(!_.isEmpty(verifyToken(token))){

        const newtoken=decodeToken(token)

        const convr = await conversation.findOne({where:{senderId:newtoken.id,receiverId:receiverId}})

        if (_.isEmpty(convr)) {
            res.status(200).json(({
                status: false,
                errors: "Something went wrong please try again later."
            }))
        }
        const sendMessage = await message.create({sender:newtoken.id,text:text,idConv:convr.dataValues.id,etat:true})

        if (_.isEmpty(sendMessage)) {
            res.status(200).json(({
                status: false,
                errors: "Something went wrong please try again later."
            }))
        }

    
        res.status(200).json(({
            status: true,
            errors: "Message has been sent"
        }))
    
    }else{

    res.status(200).json(({
        status: true,
        errors: "Invalid token"
    }))
}




}
