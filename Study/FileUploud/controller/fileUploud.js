const File = require("../Models/file");
const cloudinary = require("cloudinary").v2;
exports.localFileUploud = async (req, res) => {
  console.log("hello");
  try {
    const file = req.files.file;
    console.log(file);
    let path = __dirname + "/files/" + Date.now() + file.name;

    console.log(path);
    file.mv(path, (err) => {
      console.log("hello" + err);
    });

    res.json({
      succes: true,
      message: "local file uploud succesfullu",
    });
  } catch (error) {
    console.log("Not able to to uploud the file on server");
    console.log(error);
  }
};

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  console.log("temp file path", file.tempFilePath);

  if (quality) {
    options.quality = quality;
  }

  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

//image upload ka hadnler
exports.imageUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    //Validation
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File Type:", fileType);

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    //file format supported hai
    console.log("Uploading to Nishitbaria");
    const response = await uploadFileToCloudinary(file, "Nishit");
    console.log(response);

    //db me entry save krni h
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Successfully Uploaded",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.videoUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.videoFile;

    //Validation
    const supportedTypes = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File Type:", fileType);

    //TODO: add a upper limit of 5MB for Video
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    //file format supported hai
    console.log("Uploading to Nishit");
    const response = await uploadFileToCloudinary(file, "Nishit");
    console.log(response);

    //db me entry save krni h
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Video Successfully Uploaded",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.imageSizeReducer = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    //Validation
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File Type:", fileType);

    //TODO: add a upper limit of 5MB for Video
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    //file format supported hai
    console.log("Uploading to Codehelp");
    //TODO: height attribute-> COMPRESS
    const response = await uploadFileToCloudinary(file, "Nishit", 30);
    console.log(response);

    //db me entry save krni h
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Successfully Uploaded",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
