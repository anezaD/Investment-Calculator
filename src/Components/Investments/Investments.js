
const InvestmentsList = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return (
      <tbody>
          {props.myList.map((item,index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  item.savingsEndOfYear - 
                  props.initialInvestment - 
                  item.yearlyContribution * item.year)}
              </td>
              <td>
              {formatter.format(
                props.initialInvestment +
                item.yearlyContribution * item.year
              )}
              </td>
            </tr>
          ))}
      </tbody>
    )
}

export default InvestmentsList;

