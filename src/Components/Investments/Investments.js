
const InvestmentsList = (props) => {
     return (
        <tbody>
            {props.myList.map((item, index) => (
            <tr key={index}>
            <td>{item.year}</td>
            <td>{item.savingsEndOfYear}</td>
            <td>{item.yearlyInterest}</td>
            <td>{item.totalYearlyContribution}</td>
            <td>{item.totalSavings}</td>
            </tr>))}
        </tbody>
      )
}

export default InvestmentsList;