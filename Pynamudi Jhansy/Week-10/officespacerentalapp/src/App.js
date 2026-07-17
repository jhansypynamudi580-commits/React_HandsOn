import './App.css';

function App() {

  // Creating an object of office
  const office = {
    name: "DBS Office Space",
    rent: 50000,
    address: "Chennai"
  };


  // List of office objects
  const offices = [
    {
      name: "DBS Office Space",
      rent: 50000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    },
    {
      name: "Tech Park Office",
      rent: 75000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
    },
    {
      name: "Corporate Office",
      rent: 90000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    }
  ];


  return (
    <div className="App">

      <h1>Office Space Rental Application</h1>


      <h2>Office Details</h2>

      <p>
        Name : {office.name}
      </p>

      <p>
        Rent : 
        <span 
          style={{color: office.rent < 60000 ? "red" : "green"}}
        >
          ₹{office.rent}
        </span>
      </p>

      <p>
        Address : {office.address}
      </p>


      <hr />


      <h2>Available Office Spaces</h2>


      {
        offices.map((item, index) => (

          <div className="office-card" key={index}>

            <img 
              src={item.image}
              alt="Office Space"
              width="300"
              height="200"
            />


            <h3>{item.name}</h3>


            <p>
              Address : {item.address}
            </p>


            <p>
              Rent :
              <span
                style={{
                  color: item.rent < 60000 ? "red" : "green",
                  fontWeight: "bold"
                }}
              >
                ₹{item.rent}
              </span>
            </p>


          </div>

        ))
      }


    </div>
  );
}

export default App;