var recipes = {}

//var object = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  
  object[key]= value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value)
{
  
//  return var newObj = Object.assign({}, object);
     return Object.assign({}, object, { [key]: value })
   
}

function  deleteFromObjectByKey(object, key) 
{
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
  
  
}

function destructivelyDeleteFromObjectByKey(object, key)
{
 // delete object[key]
 // return object
  
}