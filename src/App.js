import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/UserActions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.loading);
  useEffect(() => {
    dispatch(getUsers({ page: 2 }));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App1">
      <header className=""></header>
      {!isLoading ? (
        users.map((user) => (
          <div key={user.id}>
            <h1>
              {user.first_name} {user.last_name}
            </h1>
            <img src={user.avatar} alt="user avatar" />
            <hr />
          </div>
        ))
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default App;
