import { Link } from 'react-router-dom';

import { Navigation } from '@widgets/navigation';
import { APP_PATHS } from '@//app/lib/constants/APP_PATHS';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">{'Board game, mission creation helper app'}</h1>
      <Link to={APP_PATHS.main}>
        <div className="header__logo">{'Battle Herald'}</div>
      </Link>
      <Navigation />
    </header>
  );
};
