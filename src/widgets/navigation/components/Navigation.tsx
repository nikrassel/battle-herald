import { Link } from 'react-router-dom';

import { Button } from '@shared/ui';
import { APP_PATHS } from '@//app/lib/constants/APP_PATHS';
import { useContext } from 'react';
import { GameContext } from '@//app/context';

export const Navigation = () => {
  const context = useContext(GameContext);
  return (
    <div className="navigation">
      {!context?.isCurrentGame ? null : (
        <Link to={APP_PATHS.current}>
          <Button>{'Resume game'}</Button>
        </Link>
      )}
      <Link to={APP_PATHS.leviathan}>
        <Button>{'Leviathan Games'}</Button>
      </Link>
      <Link to={APP_PATHS.custom}>
        <Button>{'Custom game'}</Button>
      </Link>
    </div>
  );
};
