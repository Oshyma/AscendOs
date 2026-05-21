# AscendOs

> **⚠️ Work In Progress — Project on hold**
> AscendOs is an experimental project that has been put on hold indefinitely. The foundations are in place, but development has stalled. There is no ETA for the next update. Feel free to explore, fork, or contribute, but don't expect active maintenance for the time being.

---

A Visual Studio Code extension that gamifies your coding experience. Write code, earn XP, level up, complete missions, and collect loot — all without leaving your editor.

![TS](https://img.shields.io/badge/Typescript-3178c6?style=flat&logo=typescriptl&logoColor=white)
 [![Status](https://img.shields.io/badge/status-wip-orange)](https://github.com/oshyma/AscendOs)
![License](https://img.shields.io/badge/license-ISC-blue)


## Features

- **XP & Leveling System** — Earn experience points as you code. Levels scale with a progression curve (`100 × level^1.3` XP per level), so the grind stays satisfying.
- **Status Bar Integration** — Your current level and XP are always visible in the VS Code status bar (`AscendOs: Lv X (Y XP)`).
- **Mission System** — Complete coding milestones (save your first file, reach 5 saves, etc.) to earn bonus XP.
- **Loot System** — Randomly drop items (weapons, armor, potions) with different rarities (Common, Rare, Epic) as you work.
- **Persistent Progress** — All your data (XP, level, inventory) is saved using VS Code's global state storage and persists across sessions.
- **Dashboard** — Open a dedicated panel to view your stats (command: `AscendOs: Show Dashboard`).

## Current State

The following systems are scaffolded but not yet implemented:

- Avatar system (`avatarSystem.ts` — empty)
- Inventory system (`inventorySystem.ts` — empty)
- Code & Git event listeners (`codeEvents.ts`, `gitEvents.ts`, `taskEvents.ts` — empty)

The XP system, persistence layer, loot definitions, mission definitions, and UI panel provider are functional.

## Requirements

- Visual Studio Code `^1.104.0`
- Node.js & pnpm

## Installation (Development)

```bash
git clone https://github.com/your-username/AscendOs.git
cd AscendOs
pnpm install
```

Then press `F5` in VS Code to launch the extension in a new Extension Development Host window.

## Build

```bash
# Development build
pnpm run compile

# Production build
pnpm run package
```

## Commands

| Command | Description |
|---|---|
| `AscendOs: Show Dashboard` | Opens the AscendOs stats panel |
| `AscendOs: Activate` | Activates the extension manually |

## Tech Stack

- **TypeScript** with strict type checking
- **ESBuild** for bundling
- **VS Code Extension API** (`vscode.Memento` for persistence)

## Project Structure

```
src/
├── extension.ts          # Entry point, status bar setup
├── events/
│   ├── codeEvents.ts     # (WIP) Code activity listeners
│   ├── gitEvents.ts      # (WIP) Git event listeners
│   └── taskEvents.ts     # (WIP) Task event listeners
├── storage/
│   └── persistence.ts    # Wrapper around vscode.Memento
├── systems/
│   ├── xpSystem.ts       # XP & leveling logic
│   ├── lootSystem.ts     # Item definitions & random drops
│   ├── missionSystem.ts  # Mission definitions
│   ├── avatarSystem.ts   # (WIP)
│   └── inventorySystem.ts# (WIP)
└── ui/
    └── panelProvider.ts  # Webview panel for the dashboard
```
