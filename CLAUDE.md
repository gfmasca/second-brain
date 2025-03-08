# CLAUDE.md - Agent Instructions

## Project: siameses-v2

## Build/Test/Lint Commands

- Run dev: `deno task dev`
- Run application: `deno task start`
- Test all: `deno task test`
- Test single: `deno test src/path/to/test.ts`
- Lint: `deno lint`
- Format: `deno fmt`
- Type check: `deno check src/**/*.ts`

## Code Style Guidelines

- **Formatting**: Use Deno's built-in formatter (`deno fmt`)
- **Naming**: camelCase for variables/functions, PascalCase for classes/types
- **Imports**: Use explicit imports with full URLs for external dependencies
- **Types**: Use TypeScript types/interfaces, avoid `any`
- **Error Handling**: Use try/catch blocks with specific error handling
- **Comments**: JSDoc for public APIs, inline comments for complex logic
- **Testing**: Write unit tests using Deno's built-in test framework
