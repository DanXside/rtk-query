import { useEffect } from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators';
import PostList from './components/PostList';


function App() {
  const dispatch = useAppDispatch();
  const {users, error, isLoading} = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
 
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', width: '600px', margin: '0 auto', marginTop: '100px'}}>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.map(user => (
          <div key={user.id}>
            {user.id} - {user.name}
          </div>
      ))}
      <PostList />
    </div>  
  )
}

export default App
