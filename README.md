# Monorepo Demo

This project is a demonstration of a monorepo setup with the following components:

- A frontend developed with Next.js.
- A separate frontend developed with TypeScript.
- A backend developed with Django.

The `node_modules` directories are shared using `pnpm` and `lerna` for efficient package management.

## How to Run

Follow these steps to run the project:

1. **Install dependencies**:

```bash
pnpm install

2. **Start the Django server**:

```bash
python3 manage.py runserver

3. **Run the frontend projects**:

```bash
lerna run dev --parallel
