/*
//1.for building first custom component
function ExpenseItem(){
  return <h2>Expense Item</h2>
}
//to use this component,we need toexport
export default ExpenseItem;
*/

/*
//2.writing some more complex code
//In react component, you must have only have root element for jsx code snippet.so here we use one another div which acts as root

function ExpenseItem() {
  return (
    <div>
      <div>March 28,2021</div>
      <div>
        <h2>car Insurance</h2>
        <div>249.6</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
*/

/*
//3.stylingwithcss //added import and classnames
//we use className instead of class
import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28,2021</div>
      <div className="expense-item__description">
        <h2>car Insurance</h2>
        <div className="expense-item__description">249.6</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
*/

/*
//4.outputting dynamic data
//we use javascript here
import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2021,2,28);
  const expenseTitle = 'car insurance';
  const expenseAmount=294;
//to output dynamic data,react have that syntax curly braces which are dynamic place holders
//in curly braces we can run basic expression

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2> 
        <div className="expense-item__description">{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
*/

/*
//5.passing data via props
//for components reusabilty ,we use props
//here like js, we need to pass one paramater which is object holds all received properties as attributes called props(properties)
//props are another way passing data from component a to b.
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.E}</h3>
        <div className="expense-item__description">Rs{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
*/

/*
//6.Adding normal js to components

import "./ExpenseItem.css";
function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US',{month:'long'})
  const day = props.date.toLocaleString('en-US',{day:'2-digit'})
  const year = props.date.getFullYear()
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.E}</h3>
        <div className="expense-item__description">Rs{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
*/

/*
//7.making components smaller
//making other component exponentdate.js and added css styling
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date ={props.date}/> 
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
      </div>
    </div>
  ); 
}
export default ExpenseItem;
*/

/*
//8.making expense details component

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.E}
        title={props.title}
      />
    </div>
  );
}

export default ExpenseItem;
*/


//9.card component 
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date ={props.date}/> 
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
      </div>
    </Card>
  ); 
}
export default ExpenseItem;
