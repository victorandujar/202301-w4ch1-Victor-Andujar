import Button from "../Button/Button";

interface InfoProp {
  number: number;
}

const InfoComponent = ({ number }: InfoProp): JSX.Element => {
  return (
    <section className="controls">
      <p className="info">{number} gentlemen pointing at you.</p>
      <Button />
    </section>
  );
};

export default InfoComponent;
