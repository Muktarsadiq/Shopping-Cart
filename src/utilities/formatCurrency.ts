const  CURRENCY_FPORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency" 
})

export const formatCurrency = (number: number) => {
    return CURRENCY_FPORMATTER.format(number)
}