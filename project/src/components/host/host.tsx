type HostProps = {
    host: {
        pro: boolean,
        name: string,
        avatar: string,
        description: string[],
    }
  }

function Host({ host }: HostProps) {
  const { pro, name, avatar, description } = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {pro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="property__description">
        {description.map((text, idx) =>(<p key={idx.toString()} className="property__text">{text}</p>))}
      </div>
    </div>
  );
}

export default Host;
