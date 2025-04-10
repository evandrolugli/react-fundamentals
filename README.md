## Overview
A demo of React basics, showcasing the core fundamentals in action!
Created to understand and apply key concepts of modern React development. It includes the use of components, props, state management, conditional rendering, list rendering, event handling, and hooks.

## Tech Stack
- **React** (with functional components)
- **JavaScript (ES6+)**
- **Vite** (for fast development server and build)
- **CSS Modules** (for scoped styling)

## Key Features
- Component-based architecture
- State management using `useState`
- Conditional rendering with ternaries
- List rendering using `.map()`
- Props drilling
- Reusable and composable UI components
- Controlled input elements
- Basic styling with CSS Modules

## Key Code Concepts
```jsx
// Passing props
<Greetings name="Evandro" />

// Managing state
const [count, setCount] = useState(0);

// Conditional rendering
{isLoggedIn ? <Dashboard /> : <Login />}

// List rendering
{items.map(item => (
  <ItemCard key={item.id} {...item} />
))}
```

## Run the App
```jsx
> npm install
> npm run dev
```
