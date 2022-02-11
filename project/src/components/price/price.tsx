type PriceProps = {
    amount: number,
    className: string
}

function Price({ amount, className }: PriceProps) {
  const style = className === 'property' ? {display: 'none'} : {};
  return (
    <div className={`${className}__price`}>
      <b className={`${className}__price-value`}>€{amount}</b>
      <span className={`${className}__price-text`}><span className="price-divider" style={style}>&nbsp;/</span>&nbsp;night</span>
    </div>
  );
}

export default Price;
