var fileObject = getFile();

var newObject = {
    'lastModified' : fileObject.lastModified,
    'lastModifiedDate' : fileObject.lastModifiedDate,
    'name'             : fileObject.name,
    'size'             : fileObject.size,
    'type'             : fileObject.type
 };

 JSON.stringify(newObject);