import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfig } from './store/homeSlice';
import { fetchDataFromApi } from './utils/api';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      dispatch(getApiConfig(res));
    });
  };

  return (
    <div className="App">
      <h1>welcome to cineverse</h1>

      {url?.total_results}
    </div>
  );
}

export default App;
