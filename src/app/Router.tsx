import { Route, Routes } from 'react-router-dom';

import { APP_PATHS } from './lib/constants/APP_PATHS';

import { CurrentGameConnector, CustomGame, LeviathanGame, MainPage } from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path={APP_PATHS.main} element={<MainPage />} />
      <Route path={APP_PATHS.leviathan} element={<LeviathanGame />} />
      <Route path={APP_PATHS.custom} element={<CustomGame />} />
      <Route path={APP_PATHS.current} element={<CurrentGameConnector />} />
    </Routes>
  );
};
