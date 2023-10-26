const formatCurrency = (value, country) =>{
  return value.toLocaleString('pt-br', {
    style: 'currency', 
    currency: country
  })
}

export default formatCurrency
