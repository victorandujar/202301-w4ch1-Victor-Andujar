import { gentlemens } from "../../data";

const Gentlemen = (): JSX.Element => {
  const gentlemenList = gentlemens.map((gentlemen, position) => (
    <li key={position} className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={gentlemen.picture}
          alt={gentlemen.alternativeText}
        />
        <span className="gentleman__initial">F</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentlemen.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentlemen.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>
            {gentlemen.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {gentlemen.twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  ));

  return <ul className="gentlemen">{gentlemenList}</ul>;
};

export default Gentlemen;
