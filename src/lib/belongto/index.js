const belontTo=(data)=>{
  const typeStr = Object.prototype.toString.call(data);
  const str =  typeStr.replace(/\[object\s(.*)\]/g,'$1');
  if( str == 'Number' && isNaN(data) ){
    return 'NaN';
  }
  return str;
}
export default belontTo;
