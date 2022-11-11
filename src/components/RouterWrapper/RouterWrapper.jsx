import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import HomeScreen from "../../screens/Home/HomeScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import LoginScreen from "./../../screens/Login/LoginScreen";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UsersProfileScreen from "../../screens/Users/UsersProfileScreen/UsersProfileScreen";
import BlogFormScreen from "./../../screens/Blog/BlogForm/BlogFormScreen";
import BlogListScreen from "../../screens/Blog/BlogList/BlogListScreen";
import BlogDetailScreen from "./../../screens/Blog/BlogDetail/BlogDetailScreen";
import BlogUpdateScreen from "../../screens/Blog/BlogUpdate/BlogUpdateScreen";
import UsersListScreen from "../../screens/Users/UsersListScreen/UsersListScreen";
import UsersUpdateScreen from "../../screens/Users/UsersUpdateScreen/UsersUpdateScreen";
import CourseListScreen from "../../screens/Course/CourseList/CourseListScreen";
import CourseFormScreen from "../../screens/Course/CourseForm/CourseFormScreen";
import CourseUpdateScreen from "../../screens/Course/CourseUpdate/CourseUpdateScreen";
import CourseDetailScreen from "../../screens/Course/CourseDetail/CourseDetailScreen";
import { useAuthContext } from "./../../context/AuthContext";
import AboutUs from "../../screens/AboutUs/AboutUsScreen";
import ElenaScreen from "../../screens/Admins/Elena/elenaScreen";
import RosaScreen from "../../screens/Admins/Rosa/rosaScreen";
import MenarcheScreen from "../../screens/Menarche/MenarcheScreen";
import TeenagerSexualityScreen from "../../screens/TeenagerSexuality/teenagerSexualityScreen";
import WomanHealthySexualityScreen from "../../screens/WomanHealthySexuality/womanHealthySexualityScreen";
import FertilityScreen from "../../screens/Fertility/fertilityScreen";
import SexualityPregnancyScreen from "../../screens/SexualityPregnancy/sexualityPregnancyScreen";
import PostpartumScreen from "../../screens/PostpartumSexuality/postPartumSexualityScreen";
import TribuTribuScreen from "../../screens/TribuTribu/tribuTribuScreen";
import SexualityMenopauseScreen from "../../screens/SexualityMenopause/sexualityMenopauseScreen";
import PhysicalActivityMenopauseScreen from "../../screens/PhysicalActivityMenopause/physicalActivityMenopauseScreen";
import PageNotFound from "../../screens/NotFound/notFound";
import UnderConstruction from "../../screens/UnderConstruction/underConstruction";
import MerIdo from "../../screens/MerIdo/MarIdo";
import BlogKeywordScreen from "./../../screens/Blog/BlogKeywords/BlogKeywordScreen";
import Footer from './../Footer/Footer';
import './RouterWrapper.css'

const RouterWrapper = () => {
  const { isAuthFetched } = useAuthContext();
  return (
    <>
      <Header />
      {isAuthFetched ? (
        <Routes>
          {/* rutas no protegidas: home, resgiter, login, coursesList y blogList*/}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/blogs" element={<BlogListScreen />} />
          <Route path="/courses" element={<CourseListScreen />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/elena" element={<ElenaScreen />} />
          <Route path="/aboutus/rosa" element={<RosaScreen />} />
          <Route path="/menarche" element={<MenarcheScreen />} />
          <Route path="/teenager-sexuality" element={<TeenagerSexualityScreen />} />
          <Route path="/woman-healthy-sexuality" element={<WomanHealthySexualityScreen />} />
          <Route path="/fertility" element={<FertilityScreen />} />
          <Route path="/sexuality-pregnancy" element={<SexualityPregnancyScreen />} />
          <Route path="/postpartum-sexuality" element={<PostpartumScreen />} />
          <Route path="/tribu-tribu" element={<TribuTribuScreen />} />
          <Route path="/menopause-sexuality" element={<SexualityMenopauseScreen />} />
          <Route path="/physical-activity-menopause" element={<PhysicalActivityMenopauseScreen />} />
          <Route path='/Mer&Ido' element={<MerIdo />} />
          <Route path="/tienda" element={<UnderConstruction />} />
          {/*rutas protegidas -> hace falta tener token -> estar logado */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UsersProfileScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersListScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/update"
            element={
              <ProtectedRoute>
                <UsersUpdateScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/create"
            element={
              <ProtectedRoute>
                <BlogFormScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <ProtectedRoute>
                <BlogDetailScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/:keyword"
            element={
              <ProtectedRoute>
                <BlogKeywordScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/:id/update"
            element={
              <ProtectedRoute>
                <BlogUpdateScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/create"
            element={
              <ProtectedRoute>
                <CourseFormScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:id"
            element={
              <ProtectedRoute>
                <CourseDetailScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:id/update"
            element={
              <ProtectedRoute>
                <CourseUpdateScreen />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <p className="loading"> Loading ...</p>
      )}
      <Footer />
    </>
  );
};

export default RouterWrapper;
