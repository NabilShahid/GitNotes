enum ROUTES {
  Home = '/',
  Redirect = '/redirect',
  Gist = '/gist/:id',
  Profile = '/profile',
  Starred = '/starred',
}
export default ROUTES;

export const ROUTES_WITH_SEARCH:Array<string> = [ROUTES.Home];
