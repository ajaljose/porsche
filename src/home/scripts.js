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
  
function Footer() {
    return (
      <div>
        <footer className="footer">
         <div className="container">
             <div className="row">
                 
                 <div className="footer-col">
                     <h4>get help</h4>
                     <ul>
                         <li><p>FAQ</p></li>
                         <li><p>shipping</p></li>
                     </ul>
                 </div>
                 
                 <div className="footer-col">
                     <h4>follow us</h4>
                     
                 </div>
           <div className="footer-col">
                     <h4>Disclaimer</h4>
                     <p id='Disclaimer'>This site is for educational purposes only!!
  Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as  teaching, education and research etc...</p>
                 </div>
             </div>
         <p id='Disclaimer'>Created By Ajal Jose</p>
         </div>
    </footer>
      </div>
    );
  }
  