import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import { useEffect } from "react";
import ApiClient from "../services/ApiClient";
import AppFilter from "./common/AppFilter";

const Users = (props) => {
  const {
    location: {
      state: { data },
    },
  } = props;

  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const usersData = await ApiClient.getUsers();
      if (usersData.data) {
        const filteredData = usersData.data.filter(user => user.teamId[0] === data.id);
        setUsers(filteredData);
      }
    } catch (error) {
      console.log("Error Retrieving Users data");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div className="row header">
        <h4>Users ({users.length})</h4>
      </div>

      <div class="row filter">
        <div className="col-sm-4">
          <AppFilter data={users} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul>
            {users.length > 0 &&
              users.map((user) => {
                if (user) {
                  return <li key={user.id}>{user.name}</li>;
                }
                return null;
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Users;
