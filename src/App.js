import * as userService from "./services/userService";

import { useEffect, useState } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import "./App.css";
import { UserList } from "./components/UserList";
import { Paginaton } from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then(setUsers)
      .catch((err) => {
        throw err;
      });
  }, []);

  const onUserCreateSubmit = async (e) => {
    //stop auto submit
      e.preventDefault();

    //Collect data from form
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);

    //Send Ajax request to server
      const createdUser = await userService.create(data);

    //If successfull, ass new user to state
    setUsers(state => [...state, createdUser]);
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users={users} onUserCreateSubmit={onUserCreateSubmit} />
          <Paginaton />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
