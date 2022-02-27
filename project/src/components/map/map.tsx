type MapProps = {
  className: string
  id?: string
}

function Map({ id, className }: MapProps) {
  return (
    <section id={id} className={`${className}__map map`}></section>
  );
}

export default Map;
