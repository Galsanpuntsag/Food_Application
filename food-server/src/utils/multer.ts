import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single("image");

export default upload;
