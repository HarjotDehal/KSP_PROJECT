import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination folder for file uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split('.').pop(); // Get the file extension
    cb(null, uniqueSuffix + '.' + extension); // Set the filename with the original extension
  }
});

const fileFilter = (req, file, cb) => {
  // Check file type or other criteria if needed
  if (file.fieldname === 'BOLPDF') {
    // Allow file upload
    cb(null, true);
  } else {
    // Reject other field types
    cb(new Error('Invalid field type'));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;