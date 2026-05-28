# Rune

A lightweight reactive runtime for modern web interfaces.

Rune is an experimental frontend runtime focused on:

* reactive rendering
* efficient DOM updates
* scheduling and batching
* ownership-based cleanup
* modular runtime architecture

The project is being designed as the core runtime layer behind future UI systems and applications.

## Goals

Rune aims to explore a rendering architecture centered around:

* fine-grained reactivity
* staged DOM updates
* lightweight scheduling
* scoped effects and cleanup
* composable rendering systems
* low-level control over UI behavior

The runtime is designed with long-term scalability and renderer flexibility in mind.

## Current State

Rune is currently in active early-stage development.

Core areas being explored include:

* Signals / reactivity
* Effect systems
* Scheduler design
* DOM traversal and manipulation
* Fragment-based updates
* Ownership propagation
* Cleanup and disposal systems

APIs and internal architecture may evolve significantly during development.

## Project Structure

```txt
src/
├── reactivity/
├── scheduler/
├── dom/
├── renderer/
└── ...
```

Each subsystem is separated into focused modules with local documentation and implementation details.

## Philosophy

Rune is being built with an emphasis on:

* explicit architecture
* modularity
* predictable rendering behavior
* minimal abstraction overhead
* runtime clarity over excessive magic

The goal is not to imitate existing frameworks directly, but to understand and refine the underlying runtime mechanics behind modern UI systems.

## Development

```bash
npm install
npm run build
```

## Notes

This project is experimental and intended primarily for runtime and rendering system research.

Contributions, discussions, and architectural feedback are welcome as the project evolves.
