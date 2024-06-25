import Home from '../views/pages/homePage';
import Favorite from '../views/pages/favoritePage';
import Detail from '../views/pages/detailPage';

const Routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default Routes;
