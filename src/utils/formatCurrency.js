const formatCurrency = (value, country) => {

  const formattedNumber = (value / 100)

  return formattedNumber.toLocaleString('pt-br', {
    style: 'currency', 
    currency: country
  })
}

export default formatCurrency
