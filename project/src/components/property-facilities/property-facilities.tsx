type PropertyFacilitiesProps = {
    facilities: string[]
}

function PropertyFacilities({ facilities }: PropertyFacilitiesProps) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {facilities.map((facility, idx) => (
          <li key='key' className="property__inside-item">
            {facility}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyFacilities;
