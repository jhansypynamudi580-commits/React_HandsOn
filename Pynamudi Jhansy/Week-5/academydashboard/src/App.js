import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {

  return (

    <div className="App">

      <h1>My Academy Dashboard</h1>

      <CohortDetails
        title="React Development"
        status="Ongoing"
        coach="John"
        trainer="David"
      />

      <CohortDetails
        title="Angular Development"
        status="Completed"
        coach="James"
        trainer="Peter"
      />

      <CohortDetails
        title="Java Full Stack"
        status="Ongoing"
        coach="Robert"
        trainer="Smith"
      />

      <CohortDetails
        title="Python Programming"
        status="Completed"
        coach="William"
        trainer="Anderson"
      />

    </div>

  );

}

export default App;
