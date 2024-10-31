import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import AuthLayout from "./components/layouts/AuthLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import AppLayout from "./components/layouts/AppLayout";
import ExplorePosts from "./components/explore/ExplorePosts";
import ExploreHashtags from "./components/explore/ExploreHashtags";
import ExplorePeople from "./components/explore/ExplorePeople";
import Search from "./pages/Search";
import SearchAll from "./components/search/SearchAll";
import SearchPosts from "./components/search/SearchPosts";
import SearchProfiles from "./components/search/SearchProfiles";
import SearchHashtags from "./components/search/SearchHashtags";
import ProfileEdit from "./pages/ProfileEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        {/* Auth */}
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Auth />} />
          {/* Login */}
          <Route path="login" element={<Login />} />
          {/* Register */}
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          {/* Home */}
          <Route path="home" element={<Home />} />
          {/* Explore */}
          <Route path="explore" element={<Explore />}>
            <Route index element={<Navigate to="posts" replace />} />
            <Route path="posts" element={<ExplorePosts />} />
            <Route path="hashtags" element={<ExploreHashtags />} />
            <Route path="people" element={<ExplorePeople />} />
          </Route>
          {/* Search */}
          <Route path="search" element={<Search />}>
            <Route index element={<Navigate to="all" replace />} />
            <Route path="all" element={<SearchAll />} />
            <Route path="posts" element={<SearchPosts />} />
            <Route path="profiles" element={<SearchProfiles />} />
            <Route path="hashtags" element={<SearchHashtags />} />
          </Route>
          {/* Profile */}
          <Route path="profile/:nickname" element={<Profile />} />
          <Route path="profile/edit" element={<ProfileEdit />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
