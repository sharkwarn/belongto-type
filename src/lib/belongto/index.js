const belontTo=(data)=>{
  if( isNaN(data) ){
    return 'NaN'
  }
  const typeStr = Object.prototype.toString.call(data);
  return typeStr.replace(/\[object\s(.*)\]/g,'$1');
}
export default belontTo;