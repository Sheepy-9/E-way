# Mini E‑Commerce Frontend in Vue.js

## Objective

Create a small, frontend‑only e‑commerce page using Vue.js 3 to demonstrate understanding of:
- Basic Vue app setup
- Components and props
- Events and emit
- Reactive data & two‑way binding
- Computed properties
- Conditional rendering and list rendering
- Basic JavaScript (array/filter/sort, etc.)

Use mock data only – no backend, no authentication required.

## Functional Requirements

### 1. Product Data

Create an in‑memory product list (array with at least 8 items). Each product should have:
- id (number)
- name (string)
- price (number)
- category (string, e.g. "Shoes", "Electronics")
- inStock (boolean)
- rating (number from 1 to 5)
- image (string URL, can be placeholder)

You can store this in a separate file or in your root component.

### 2. Layout / Components

At minimum, split your app into these components:

1. App.vue
 - Holds global state (products, cart)
 - Composes other components

2. ProductList.vue
 - Receives a list of products as a prop
 - Renders a list of ProductCard components

3. ProductCard.vue
 - Props: single product object
 - Displays:
   1. Image
   2. Name
   3. Price
   4. Category
   5. Rating
   6. “Add to Cart” button
 - If inStock === false, clearly show “Out of stock” and disable the button
 - Emits an event (e.g. add-to-cart) when the button is clicked

4. FiltersBar.vue
 - Controls:
   1. Category filter (dropdown or buttons)
   2. Text search input (by product name)
   3. Sort dropdown:
   1.Price: Low → High
   2.Price: High → Low
   3.Rating: High → Low
 - Emits events or a single object with the current filter/sort state

5. CartSummary.vue
- Receives cart items as a prop

- Displays:
 - Number of items in the cart
 - Total price
 - Optional: list of cart items with quantity

You can add more components if you like.

### 3. Behavior

**Filtering & Sorting**

Combine:

- Category filter
- Search by name (case‑insensitive substring)
- Sorting (price/rating)
- Implement filtering and sorting using computed properties, not manual re‑assignment of the original products array.

**Cart (Frontend Only):**
- Clicking “Add to Cart” on a product:
- Adds it to the cart (you can store just ids + quantity, or product objects)
- If the item is added multiple times, increase quantity instead of duplicating entries
- The cart summary should always show:
- Total item count
- Total price (basic sum)
- No persistence required (refresh may reset the cart).

## Technical Requirements

Use:
- Vue 3
- Composition API (setup, ref, computed)
 - v-for for rendering lists
 - v-if / v-else / v-show for conditional rendering (e.g. “Out of stock”)
 - v-model for search input and filter controls
 - computed for derived data (filtered + sorted products, cart totals)
 - $emit to communicate from child to parent

Styling can be simple; focus is on clear structure and correct Vue usage.

## What to Submit

Link to a Git repository (GitHub, GitLab, etc.) with:

- Source code

- README.md containing:

  - Project specific information (e.g. name, versions, small introduction)

  - Instructions to run the project (e.g. npm install, npm run dev)