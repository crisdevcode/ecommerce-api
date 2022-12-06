export const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: Function) => {
    
    if(!file) return callback(new Error('File is empty'), false);

    const fileExceptions = file.mimetype.split('/')[1];
    const validExceptions = ['jpg', 'jpeg', 'png', 'gif'];

    if(validExceptions.includes(fileExceptions)) {
        return callback(null, true);
    }

    callback(null, false)
}