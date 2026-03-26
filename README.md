# Todo List (React)

A simple to-do list application built with React to manage tasks using component-based architecture and state management.

## Features

- Display a list of to-do items
- Mark tasks as completed
- Add new to-do items
- Remove existing to-do items
- Dynamic UI updates using React state

## Tech Stack

- React 17 (via CDN)
- Babel Standalone (in-browser JSX transpiler, via CDN)
- Bootstrap 5
- JavaScript (ES6+)
- HTML5 & CSS3
- JSX

## How It Works

- React and Babel are loaded via CDN — no npm install or build step required
- Babel transpiles JSX in the browser at runtime
- The app is structured as a single React component (`App`)
- To-do items are stored in component state using `useState`
- The list is rendered dynamically using `.map()`
- User interactions (add, remove, toggle) trigger state updates
- React re-renders the UI automatically when state changes

## Setup

```bash
git clone https://github.com/sp1aca9fa/todoListInReact.git
cd todoListInReact
npx serve
```

Open in your browser:
http://localhost:3000

## Learnings
- Understanding React’s component-based architecture
- Managing state with useState
- Handling events and form inputs in React
- Rendering dynamic lists with .map()
- Building interactive UIs with declarative logic

## Notes

This project is a solution to a Le Wagon bootcamp challenge focused on introducing React fundamentals and component-based UI development.
