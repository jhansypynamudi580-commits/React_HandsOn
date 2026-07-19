import React from "react";

function CohortDetails(props) {

  const { cohort } = props;

  return (
    <div>

      <h2>Cohort Details</h2>

      <h3>{cohort.code}</h3>

      <p>
        Cohort Name: {cohort.name}
      </p>

      <p>
        Status: {cohort.status}
      </p>

    </div>
  );

}

export default CohortDetails;