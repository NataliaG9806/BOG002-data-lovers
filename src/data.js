// estas funciones son de ejemplo

export const filterData = (dataSearch, Specie) => {
  if (Specie === "Species") {
    return dataSearch;
  } else {
    dataSearch = dataSearch.filter((Character) => Character.species === Specie)
  return dataSearch;
  }
};

export const sortData = (dataSearch, way) => {
  let dataLetter=[];
  let NewArray=[];
  const letras=["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  letras.map((item)=>   
    dataLetter.push(dataSearch.filter((Characters) => Characters.name.split("")[0] === item)))
    //console.log(dataLetter)
  dataLetter.map((item)=> 
    item.map((especific)=>
    NewArray.push(especific)));
    if(way === -1){
      NewArray = NewArray.reverse(); 
    }
  return NewArray;
};

export const computeStats = (dataSearch) => {
    let NewArray = [];
    dataSearch.map((item) => NewArray.push(item.status));    
    
    let valueCalculate = NewArray.reduce((count, status) => { 
    count[status] = (count[status] || 0) + 1;
    return count;
  }, {});

  valueCalculate.Alive > 0 ? 
  (valueCalculate.Alive = ((valueCalculate.Alive*100)/(dataSearch.length)).toFixed(2)) : (valueCalculate.Alive = 0);

  valueCalculate.Dead > 0 ? 
  (valueCalculate.Dead = ((valueCalculate.Dead*100)/(dataSearch.length)).toFixed(2)) : (valueCalculate.Dead = 0);

  valueCalculate.unknown > 0 ?
  (valueCalculate.unknown = ((valueCalculate.unknown*100)/(dataSearch.length)).toFixed(2)) : (valueCalculate.unknown = 0);

  return valueCalculate;
}
