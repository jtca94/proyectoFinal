const acción = () => {
    const filtered = FakeDatabase.filter((artículo) => artículo.category === 'Acción');
    setArrayDB(filtered);
  };
  
  const aventuras = () => {
    const filtered = FakeDatabase.filter((artículo) => artículo.category === 'Aventuras');
    setArrayDB(filtered);
  };
  
  const estrategia = () => {
    const filtered = FakeDatabase.filter((artículo) => artículo.category === 'Estrategia');
    setArrayDB(filtered);
  };
  
  export const FunctionFilters = [acción, aventuras, estrategia];