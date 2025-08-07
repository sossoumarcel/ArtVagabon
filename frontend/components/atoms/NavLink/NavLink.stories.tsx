import  NavLink  from './NavLink';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Atoms/NavLink',
  component: NavLink,
};

export const Default = () => (
  <BrowserRouter>
    <NavLink to="/home">Lien vers Home</NavLink>
  </BrowserRouter>
);
