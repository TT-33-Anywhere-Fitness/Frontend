import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getClasses } from "../store";
import Class from "./Class";

function Dashboard(props) {
  console.log(props.currentUser.auth_code)

  useEffect(() => {
    props.getClasses();
  }, []);

  return (
    <StyledDashBoard>
      <h2>Current Fitness Classes</h2>
      { props.currentUser.auth_code && <StyledLink to="/classform">Add Class</StyledLink>}
      <StyledClasses>
        {props.loading && <h2>Loading Classes...</h2>}

        {props.classes.map &&
          props.classes.map((item) => {
            return <Class key={item.class_id} item={item} />;
          })}

        {props.errors && <h2>{props.errors}</h2>}
      </StyledClasses>
    </StyledDashBoard>
  );
}

const StyledDashBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;

  h2 {
    font-size: 4rem;
    margin-bottom: 3%;
  }
`;

const StyledLink = styled(Link)`
  border: 0.15rem solid white;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  margin-top: 2%;
  margin-bottom: 3%;
  padding: 1%;
`;

const StyledClasses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-wrap: wrap;
  width: 70%;
`;

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    loading: state.loading,
    errors: state.errors,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { getClasses })(Dashboard);
