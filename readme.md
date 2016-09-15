Boilerplate ReactAPP

The Main component is the top level component

The Nav gets rendered in main and doesn't take any props or trigger state changes
up through the app

Then each URL will be 
- Timer (timer, start clear)
- Countdown (unique elements here)

Timer will render the clock and controls
Countdown will render its own set of controls

React Router:
IndexRoute = the component to render when one visits the root of the app

Example: below the homepath renders the main component. 
The main component renders
its children if you refer to Main.jsx. The index route will render the Timer component
The /countdown route will render the Countdown component

```javascript
ReactDOM.render(
 <Router history={hashHistory}>
 	<Route path="/" component={Main}>
 		<Route path="countdown" component={Countdown} />
 		<IndexRoute component={Timer}/> 
 	</Route>
 </Router>,
  document.getElementById('app')
);
```

#Details on how the Countdown works:
- Countdown component renders a clock
- Countdown component renders a CountdownForm

Handling of State and Props
- state managed by Countdown
- countdown form passes a function up via onSubmit
- In countdown, handleOnSetCountdown is responsible for setting
  the state to seconds and whether the clock is running or not
 - In the case that it's started, it effects state by calling startTimer
- Since the handleOnSetCountdown updates state, we further configure logic
  around timing on componentDidUpdate
- When starttimer is called, it updates the state and the component re-renders
- since the prev and new states differ, the switch statement does not break

   
