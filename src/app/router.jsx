import { Route, Routes } from 'react-router-dom';
import ProjectDetailPage from '../pages/project-details';
import Layout from './layout';
import HomePage from '../pages/home-page';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
