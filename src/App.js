
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
     <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="TRENDING"  fetchUrl={requests.fetchTrending}/>
     <Row title="TOP RATED"  fetchUrl={requests.fetchTopRated}/>
     <Row title="ACTION MOVIES"  fetchUrl={requests.fetchActionMovies}/>
     <Row title="COMEDY MOVIES"  fetchUrl={requests.fetchComedyMovies}/>
     <Row title="HORROR MOVIES"  fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="ROMANCE MOVIES"  fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="DOCUMENTARIES"  fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
