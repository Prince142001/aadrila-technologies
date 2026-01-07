function SectionHeading(props) {
  return (
    <>
      <h2 className={`${props.classname}`}>{props.title}</h2>
      <h3 className={`mt-5 text-center ${props.subtitleClassname}`}>
        {props.subtitle}
      </h3>
    </>
  );
}

export default SectionHeading;
