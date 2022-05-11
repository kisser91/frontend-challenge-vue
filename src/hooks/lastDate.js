const lastDate = (dates) => {
  let aux = "1700-01-01T00:00:00Z";
  dates.map((el) =>
    new Date(el).getTime() > new Date(aux).getTime() ? (aux = el) : ""
  );
  return aux;
};

export default lastDate;
