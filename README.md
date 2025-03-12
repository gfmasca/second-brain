# Siameses v2

A Deno backend application.

## Project Structure

```
src/
├── core/          # Core domain entities and utilities
├── domain/        # Business logic
│   ├── application/  # Application services
│   └── enterprise/   # Enterprise entities
└── main.ts        # Application entry point
```

## Getting Started

```bash
# Run in development mode with watch
deno task dev

# Run the application
deno task start

# Run tests
deno task test

# Run a single test file
deno test src/path/to/test.ts

# Lint code
deno lint

# Format code
deno fmt

# Type check
deno check src/**/*.ts
```

## Development

This project follows clean architecture principles, separating concerns into core domain entities, enterprise business logic, and application services.
