import React, { Component } from "react";

class Getuser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }


  componentDidMount() {

    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {

        this.setState({
          user: data.results[0]
        });

      });

  }


  render() {

    const { user } = this.state;


    return (

      <div>

        <h2>User Details</h2>

        {
          user ? (

            <div>

              <img
                src={user.picture.large}
                alt="user"
              />

              <h3>
                Title: {user.name.title}
              </h3>

              <h3>
                First Name: {user.name.first}
              </h3>


            </div>

          ) : (

            <h3>Loading User Details...</h3>

          )

        }


      </div>

    );

  }

}

export default Getuser;