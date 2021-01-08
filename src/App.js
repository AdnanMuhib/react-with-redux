import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/UserActions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.loading);
  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App1">
      <header className=""></header>
      {!isLoading ? (
        users.map((user) => <h1 key={user.id}>{user.name}</h1>)
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default App;
