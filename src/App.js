import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Component/landingPage";
import Profilepage from "./Component2/Profilepage";
import React, { useEffect, useState } from "react";
import Post from "./Component2/Post";
import Gallery from "./Component2/Gallery";
import Todo from "./Component2/Todo";
import Profile from "./Component2/Profile";
function App() {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const response = await fetch("https://panorbit.in/api/users.json");
    const json = await response.json();
    setData(json.users);
    // console.log(json);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage data={data} />} />
          <Route
            path="/profilepage/:id"
            element={<Profilepage allData={data} />}
          />
          <Route path="/post" element={<Post allData={data} />} />
          <Route path="/gallery" element={<Gallery allData={data} />} />
          <Route path="/todo" element={<Todo allData={data} />} />
          <Route path="/profile/1" element={<Profile allData={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
