import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard: {user?.email} </h1>
    </div>
  );
}
