import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: "e1",
      name: "Office Desk (Wooden)",
      price: 150.32,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e2",
      name: "Smart TV",
      price: 120.51,
      date: new Date(2022, 1, 3)
    }
  ];

  return (
    <div>
      <ExpenseItem 
        name={expenses[0].name}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem 
        name={expenses[1].name}
        price={expenses[1].price}
        date={expenses[1].date}
      />
    </div>
  );
}

export default App;
