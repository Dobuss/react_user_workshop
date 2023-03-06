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

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users={users} />
          <button className="btn-add btn">Add new user</button>
          <Paginaton />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
