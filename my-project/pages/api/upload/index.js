import nc from "next-connect";
import multer from "multer";
import { GLobals } from "../../../globals/globalFunction";

export const config = {
  api: {
    bodyParser: false,
  },
};


  const handler = nc(GLobals.onError);

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/upload");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            Math.round(Math.random() * 1E9) + "-" + Date.now() +file.originalname
        );
    },
});

let upload = multer({
    storage: storage,
});

let uploadFile = upload.single("file");
handler.use(uploadFile);
handler.post( (req, res) => {
    console.log("req.file", req.file);
 
    let filename = req.file.filename;
    if (filename) {
        res.status(200).send({
            url:  "/upload/" + req.file.filename,
        }); 
    }else{
        res.status(200).send({
            url:  "/image/noImage.jpg",
        }); 
    }
 

   
});

export default handler;