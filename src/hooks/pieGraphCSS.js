const pieGraphCSS = (array, total) => {
  let acc = 0;
  let aux = 0;
  const style = [];

  for (let i = 0; i < array.length; i++) {
    acc += aux;
    aux = Math.floor((array[i].total * 100) / total);
    style.push(`${array[i].color} 0deg ${aux + acc}%`);
  }
  return style.join();
};

export default pieGraphCSS;
