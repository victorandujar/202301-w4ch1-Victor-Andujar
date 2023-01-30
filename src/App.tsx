import Gentlemen from "./components/Gentlemen/Gentlemen";
import InfoComponent from "./components/Info/Info";

const app = () => {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointning gentlemen</h1>
        </header>
        <InfoComponent number={3} />
        <main className="main">
          <Gentlemen />
        </main>
      </div>
    </>
  );
};

export default app;
