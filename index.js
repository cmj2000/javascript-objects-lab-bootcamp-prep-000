var recipes = {}

//var object = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  
  object[key]= value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value)
{
  
  return newObj = Object.assign({}, object);
   
   
}