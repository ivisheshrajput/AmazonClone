interface FormattedNumberProps {
  amount: number;
}

const FormattedPrice = ({ amount }: FormattedNumberProps) => {
  const formattedAmount = new Number(amount).toLocaleString("en-us", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });
  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
