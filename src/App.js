import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2020, 2, 28),
      EOL: "Mumbai",
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 2.67,
      date: new Date(2021, 9, 28),
      EOL: "chennai",
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 29,
      date: new Date(2021, 10, 28),
      EOL: "chennai",
    },
    {
      id: "e4",
      title: "Book",
      amount: 299,
      date: new Date(2021, 9, 28),
      EOL: "kerela",
    },
  ];
  const expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseItems.push(
      <ExpenseItem
        key={i} // Remember to include a unique key prop when rendering a list of components
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        E={expense.EOL}
      />
    );
  }

  return (
    <div>
      <h2>Let's get started</h2>
      {expenseItems}
    </div>
  );
}

export default App;

/*
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2020, 2, 28),
      EOL:'Mumbai'
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 2.67,
      date: new Date(2021, 9, 28),
      EOL:'chennai'
    },
    { id: "e3", title: "New Desk", amount: 29, date: new Date(2021, 10, 28), EOL:'chennai' },
    { id: "e4", title: "Book", amount: 299, date: new Date(2021, 9, 28), EOL:'kerela' },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        E={expenses[0].EOL}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        E={expenses[1].EOL}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        E={expenses[2].EOL}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        E={expenses[3].EOL}

      ></ExpenseItem>
    </div>
  );
}

export default App;
*/

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
