# Monorepo Demo

This project is a demonstration of a monorepo setup with the following components:

- A frontend developed with Next.js.
- A separate frontend developed with TypeScript.
- A backend developed with Django.

The `node_modules` directories are shared using `pnpm` and `lerna` for efficient package management, and the components for both frontends are shared in a common folder as well.

## How to Run

Follow these steps to run the project:

1. **Install dependencies**:

```bash
pnpm install
```

2. **Migrate the sqlite database**:

```bash
python3 manage.py migrate
```

3. **Start the Django server**:

```bash
python3 manage.py runserver
```

4. **Run the frontend projects**:

```bash
lerna run dev --parallel
```
