const formatCurrency = (value, country) => {
  if (country === 'BRL') {
    const formattedValue = (value / 100).toFixed(2).replace('.', ',');
    return `R$${formattedValue}`;
  }

  // Adicione outras moedas aqui, se necessário

  return value.toLocaleString('pt-br', {
    style: 'currency', 
    currency: country
  });
}

export default formatCurrency;