type MapProps = {
    className: string
}

function Map({ className }: MapProps) {
  return (
    <section className={`${className}__map map`}></section>
  );
}

export default Map;
