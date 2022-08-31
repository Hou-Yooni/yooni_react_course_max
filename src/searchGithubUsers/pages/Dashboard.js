// eslint-disable-next-line no-unused-vars
import { Info, Repos, User, Search, Navbar } from "../components";
// eslint-disable-next-line no-unused-vars
import loadingImage from "../images/preloader.gif";
// eslint-disable-next-line no-unused-vars
import { GithubContext } from "../context/context";
const Dashboard = () => {
  return (
    <main>
      {/* <Navbar></Navbar> */}
      {/* <Search /> */}
      <Info />
      <User />
      {/* <Repos /> */}
    </main>
  );
};

export default Dashboard;
