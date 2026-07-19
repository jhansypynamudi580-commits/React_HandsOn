import React, { useEffect, useState } from "react";
import GitClient from "./GitClient";
import "./App.css";


function App() {


  const [repos, setRepos] = useState([]);


  useEffect(() => {

    const client = new GitClient();


    client
    .getRepositories("techiesyed")
    .then(data => {

      setRepos(data);

    });


  }, []);



  return (

    <div className="App">

      <h1>
        GitHub Repository List
      </h1>


      <ul>

        {
          repos.map(repo => (

            <li key={repo.id}>
              {repo.name}
            </li>

          ))
        }

      </ul>


    </div>

  );

}


export default App;