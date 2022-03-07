type PropertyGoodsProps = {
    goods: string[]
}

function PropertyGoods({ goods }: PropertyGoodsProps) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((facility, idx) => (
          <li key={idx.toString()} className="property__inside-item">
            {facility}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyGoods;
