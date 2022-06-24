import { useSelector , useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  
  const incrementhandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <div>
          <button className={classes.btn} onClick={incrementhandler}>Increment</button>
          <button className={classes.btn} onClick={decrementHandler}>Decrement</button>
          <button className={classes.btn} onClick={increaseHandler}>Increase by 10</button>
      </div>
      <button className={classes.btn} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
