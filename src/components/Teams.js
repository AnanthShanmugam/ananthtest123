import React, { useState, useEffect, Fragment } from "react";
import ApiClient from "../services/ApiClient";
import { Link } from "react-router-dom";
import AppFilter from "../components/common/AppFilter";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const loadTeams = async () => {
    try {
      const teamsData = await ApiClient.getTeams();
      if (teamsData.data) {
        setTeams(teamsData.data);
      }
    } catch (error) {
      console.log("Error Retrieving teams data");
    }
  };

  useEffect(() => {
    loadTeams();
  }, []);

  const filterTeams = (items) => {
    console.log('Items here',items);
    setTeams(items);
  }

  return (
    <Fragment>
      <div className="row header">
        <h4>Teams</h4>
      </div>

      <div class="row filter">
        <div className="col-sm-4">
          <AppFilter data={teams} setFilteredData={filterTeams} />
        </div>
      </div>
      <div class="row">
        {teams.length > 0 &&
          teams.map((team) => {
            if (team) {
              return (
                <div className="col-md-3 col-sm-6" key={team.id}>
                  <div className="card">
                    <div className="card-body app-card">
                      <h5 className="card-title">
                        <Link
                          to={{
                            pathname: `/teams/${team.name}/users`,
                            state: { data: team },
                          }}
                        >
                          {team.name}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>
    </Fragment>
  );
};

export default Teams;
