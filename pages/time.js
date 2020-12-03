function Time(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (Dinâmico)</div>
      <div>{props.staticDateString} (Estático)</div>
    </div>
  );
}

export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    },
    revalidade: 1
  }
}
export default Time;