import { useAppSelector } from '../app/hooks'
import { selectAuth } from '../features/authSlice'
import LoadingToRedirect from './LoadingToRedirect';

const PrivateRoute = ({children}: {children: any}) => {
   const {token} = useAppSelector(selectAuth);
  return token ? children : <LoadingToRedirect/>;
}

export default PrivateRoute