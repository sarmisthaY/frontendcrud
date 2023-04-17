import { Switch, Route } from 'react-router-dom';
import TableData from './component/TableData';
import CreateData from './component/createData';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={TableData}></Route>
        <Route exact path='/create' component={CreateData}></Route>
      </Switch>
    </>
  );
}

export default App;
