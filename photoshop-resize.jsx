// Set the path to the folder containing the images
var inputFolder = new Folder("D:/YandexDisk/Boosty/Pathfinder/Падение Чумного Камня/1. Deskew");

// Set the path to the folder where you want to save the resized images
var outputFolder = new Folder("D:/YandexDisk/Boosty/Pathfinder/Падение Чумного Камня/2. Average Resolution");

// Get an array of all the files in the input folder
var files = inputFolder.getFiles();

// Loop through each file in the array
for (var i = 0; i < files.length; i++) {

    // Check if the file is an image
    if (files[i] instanceof File && files[i].fullName.match(/\.(jpg|jpeg|png|gif)$/i)) {
        
        // Open the image in Photoshop
        var doc = app.open(files[i]);
        
        // Resize the image
        doc.resizeImage(UnitValue(2414, "px"), UnitValue(3176, "px"));
        
        // Save the image to the output folder as PNG
        var outputFilePath = new File(outputFolder + "/" + files[i].name.slice(0, -4) + ".png");
        doc.saveAs(outputFilePath, new PNGSaveOptions());
        
        // Close the image without changes
        doc.close(SaveOptions.DONOTSAVECHANGES);
    }
}