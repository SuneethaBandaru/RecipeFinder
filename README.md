# Suneetha's Kitchen

A recipe-browsing app built with Next.js (App Router) and TypeScript,
using [TheMealDB](https://www.themealdb.com/) as its data source. Built
for a "Context & Dynamic Routing" assignment.

## Getting started

npm install
npm run dev

Then go to http://localhost:3000. The MealDB API endpoint is already set in .env.local, so you don't need to add anything.

## Logging in

There's no sign-up, just log in with one of these (username / password):

| Username | Password   | Favourite category |
|----------|------------|---------------------|
| sunee    | sunee123   | Chicken             |
| rob      | rob123     | Dessert             |
| ram      | ram123     | *(none set)*        |
| john     | john123    | *(none set)*        |


## What it does

- Home page — if you're not logged in you get a login form plus a few random recipes so there's something to look at. Once you're logged in, it shows you a recipe from your favourite category (or a random one if you haven't picked one yet), plus a link to how many recipes you've saved.
- Categories page — every category from TheMealDB, click one to see its recipes and to set it as your favourite.
- Recipe page — the full recipe: ingredients, instructions, tags, a YouTube link when there is one, and a save/unsave button.
- Profile page — your saved recipes and your favourite category, all in one place.
- Nav bar has Home / Categories / Profile plus a log out button, and it collapses into a hamburger menu on mobile.

## Project structure


app/                  Routes (App Router)
  page.tsx            Home
  categories/          Categories list + [slug] detail page
  recipes/[id]/        Recipe detail page
  profile/             Profile page
components/           UI components (one folder per component)
contexts/userContext.tsx  
data/users.ts         Mock user accounts
lib/mealdb.ts         TheMealDB API fetch helpers
lib/ingredients.ts    Helper to flatten TheMealDB's ingredient fields
types/types.ts        Shared TypeScript types


## Tech

- Next.js
- TypeScript
- Tailwind CSS 
- TheMealDB REST API