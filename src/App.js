import React, { useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Management from './pages/Management';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

axios.defaults.withCredentials = true;

const userInfo = {
  class: 0,
  code: 0,
  enroled: "",
  grade: 0,
  name: "",
  nickname: "",
  studentNo: "",
  isLogin: false,
};

export const UserContext = createContext(userInfo);

const App = () => {
  const [user, setUser] = React.useState(userInfo);

  useEffect(() => {
    (async () => {
      try {
        const userTest = await getUserInfo();
        console.log(userTest)
        // setUser({
        //   ...(await getUserInfo().data),
        //   isLogin: true,
        // });
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status >= 400) {
          setUser((prev) => ({ ...prev, isLogin: false }));
        }
      }
    })();
  }, []);

  const getUserInfo = () => {
    return axios.get("http://bsmboo.kro.kr:8000/isLogin", { withCredentials: true });
  };

  return (
    <Router>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path={'/'} element={<Home userInfo={userInfo} />} />
          <Route path={'/mypage'} element={<MyPage userInfo={userInfo} />} />
          <Route path={'/management'} element={<Management userInfo={userInfo} />} />
          <Route path={'/login'} element={<Login userInfo={userInfo} />} />
          <Route path={'*'} element={<NotFound userInfo={userInfo} />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;