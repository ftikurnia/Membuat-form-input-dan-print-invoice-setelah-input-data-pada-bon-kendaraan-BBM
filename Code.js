// www.kurnia.com

function doGet() {
    var template = HtmlService.createTemplateFromFile('Index');
    return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }
  function getScriptURL() {
    return ScriptApp.getService().getUrl();
  }
  function file_input() {
    // Optional: Perform any necessary actions before redirecting (e.g., data processing)
    return HtmlService.createHtmlOutputFromFile('file_input');
  }
  
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }
  function test(){
    try {
      var base64 = 'data:image/jpeg;base64,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';
    var decodedData = Utilities.base64Decode(base64.split(',')[1], Utilities.Charset.UTF_8);
    
      var mimeType = getMimeTypeFromFilename('test.jpeg');
      return mimeType;
    // Do something with decodedData
  } catch (e) {
    Logger.log("Error decoding base64 data: " + e);
    // Handle the error (e.g., display a message to the user)
  }
  }
  
  function getMimeTypeFromFilename(filename) {
    var extension = filename.split('.').pop();
    // Use a switch statement or lookup table to map extensions to mimetypes
    switch (extension) {
      case "pdf":
        return MimeType.PDF;
      case "docx":
        return MimeType.DOCUMENT; // MimeType.docx is not available, use DOCUMENT
      case "png":
        return MimeType.PNG;
      case "jpeg":
        return 'image/jpeg';
      case "jpg":
        return image/jpeg;
      // Add more cases for other extensions
      default:
        return null; // Or a default mimetype if unknown
    }
  }
  
  function generateId(n) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
          
    if ( n > max ) {
      return generate(max) + generate(n - max);
    }
          
    max        = Math.pow(10, n+add);
    var min    = max/10; // Math.pow(10, n) basically
    var number = Math.floor( Math.random() * (max - min + 1) ) + min;
          
    return ("" + number).substring(add); 
  }
  
  function processForm(formData) {
    var noPol = formData.noPol;
    var typeKendaraan = formData.typeKendaraan;
    var jenis = formData.jenis;
    var harga = formData.harga;
    var tanggal = new Date();
    var bill_id = generateId(6);
  
    var spreadsheet = SpreadsheetApp.openById('16jDnC0wxa_G9atHxNlYPhA9PuoeDvUmGc83xCxvtY4Y');
    var sheet = spreadsheet.getSheetByName('Sheet1');
  
    var newRow = [tanggal, bill_id, noPol, typeKendaraan, jenis,harga];
    sheet.appendRow(newRow);
  
    var invoice = "<span style='width:100%;display:flex;justify-content:center;text-align:center;'>BON BBM <br> Kendaraan</span> \n <br>";
    invoice += "----------------------------------\n<br>"; 
    invoice += "Nomer Bon     : " + bill_id + "\n <br>";
    invoice += "Tanggal       : " + Utilities.formatDate(tanggal, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss") + "\n<br>";
    invoice += "----------------------------------\n<br>"; 
    invoice += "No Pol        : " + noPol + "\n <br>";
    invoice += "Tipe Kendaraan: " + typeKendaraan + "\n<br>";
    invoice += "Jenis BBM     : " + jenis + "\n<br>";
    invoice += "Harga         : Rp " + harga + "\n<br>";
    invoice += "------------------------------------\n<br> ";
    invoice += "Terima Kasih\n<br>";
    invoice += "------------------------------------\n<br> ";
    invoice += "Geo Dipa Energi  \n<br>";
    invoice += "------------------------------------\n<br> ";
    invoice += "------------------------------------\n<br> ";
  
  
    return invoice;
    
  }
  function processBukti(formData,file = null) {
    var bill_id = formData.bill_id;
    var km = formData.km;
  
    var fileUrl=null;
    if (file) {
      var decodedData = Utilities.base64Decode(file.content.split(',')[1], Utilities.Charset.UTF_8);
      var mimeType = getMimeTypeFromFilename(file.filename);
      // return mimeType;
      // var mimeType = Utilities.getContentMimeType(decodedData);
      var blob = Utilities.newBlob(decodedData, mimeType, file.filename);
      var driveFolder = DriveApp.getFolderById('1-VGptuuArkzShthB3nad14l--erPqDhw');  // didieu
      
      var newfile = driveFolder.createFile(blob);
      fileUrl = newfile.getUrl();;
    }
  
    var spreadsheet = SpreadsheetApp.openById('16jDnC0wxa_G9atHxNlYPhA9PuoeDvUmGc83xCxvtY4Y');
    var sheet = spreadsheet.getSheetByName('Sheet1');
    var returnValue = {
      status:false,
      msg:'Terjadi Kesalahan saat input'
    };
    for (var i = 1; i <= sheet.getLastRow(); i++) {
      var valueInB = sheet.getRange(i, 2).getValue();
      returnValue = {
        status:false,
        msg:'Nomer Bon Tidak Terdaftar'
      };
      if (valueInB == bill_id) {
        var buktiValue = sheet.getRange(i, 8).getValue();
        if(buktiValue == ''){
          var url = ScriptApp.getService().getUrl();
          returnValue = {
            status:true,
            msg:'Berhasil Input Data',
            url:url,
          };
          sheet.getRange(i, 8).setValue(fileUrl);
          sheet.getRange(i, 7).setValue(km);
          break;
        }else{
          returnValue = {
            status:false,
            msg:'Bukti Sudah Terupload sebelumnya'
          };
          break;
        }
      }
    }
  
    return returnValue;
    
  }
  
  function getURL() {
    return ""; // Mengembalikan string kosong agar URL tidak dicetak
  }
  