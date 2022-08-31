import axios from "axios";
import { useEffect } from "react";

const url = "https://course-api.com/react-store-products";

const App = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const postData = async () => {
  //   try {
  //     const res = await axios.post(url, { name: name, mail: mail });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
};
export default App;
