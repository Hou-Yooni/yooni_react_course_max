import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [githubUser, setGithubUser] = useState(mockUser);
  // eslint-disable-next-line no-unused-vars
  const [repos, setRepos] = useState(mockRepos);
  // eslint-disable-next-line no-unused-vars
  const [followers, setFollowers] = useState(mockFollowers);
  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
