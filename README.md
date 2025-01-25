# React useEffect Cleanup Function Issue

This repository demonstrates a common issue in React applications involving the `useEffect` hook and its cleanup function.  The example shows a component with two `useEffect` hooks: one for mounting and one for tracking changes to a state variable.  The second effect includes an asynchronous operation (setTimeout) that, without proper cleanup, can cause memory leaks if the component unmounts before the timer completes.

The solution demonstrates the correct way to use the cleanup function to prevent these issues.