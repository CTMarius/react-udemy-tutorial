import Expenses from "./components/Expenses";
import { expenses } from "./mocks/mocks";

function App() {
  //console.log(expenses)
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
