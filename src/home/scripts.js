function App() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <RowPost url={originals} title='Originals' />
        <RowPost url={action} title='Action' isSmall/>
        <RowPost url={romance} title='Romance' />
        <RowPost url={animation} title='Animation' isSmall/>
        <Footer/>
  
      </div>
    );
  }