import { useContext, useEffect } from "react";
import Can from "../components/Can";
import { AuthContext } from "../context/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Dashboard: {user?.email} </h1>

      <button onClick={signOut}>Sign Out</button>

      <Can roles={["administrator"]}>
        <div>Metrics</div>
      </Can>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/me");
  console.log(response.data);

  return {
    props: {},
  };
});
