import InfoComponent from "./components/Info/Info";

const app = () => {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointning gentlemen</h1>
        </header>
        <InfoComponent number={5} />
        <main className="main">
          <ul className="gentlemen"></ul>
        </main>
      </div>
    </>
  );
};

export default app;
