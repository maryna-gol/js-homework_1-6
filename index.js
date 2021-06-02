
function countProps(object) {
  let propCount = 0;
  // Change code below this line
for (const obj in object) {
if (object.hasOwnProperty(obj))
propCount +=1;}
  // Change code above this line
  return propCount;
}
  