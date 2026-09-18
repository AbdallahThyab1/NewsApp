# 📰 NewsApp - React Native News Application

> **A mobile news application built with React Native and Expo while learning modern React Native development**  
> *A continuously evolving project covering UI, components, state management, lists, navigation, networking, and more*

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/AbdallahThyab1/NewsApp)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=for-the-badge)](https://abdallah-thyab.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/abdallah-thyab-dev/)

---

## 📌 Overview

NewsApp is a React Native learning project built with Expo and JavaScript.

The project is being developed step by step alongside a React Native course. Each new concept learned in the course is applied directly to the project, making the repository a practical record of the development and learning process.

- **Purpose:** Build a real React Native application while learning the framework through practical implementation
- **Built for:** React Native learners, developers exploring mobile development, and continuous experimentation
- **Current focus:** Components, props, state, events, styling, safe areas, reusable components, lists, and project structure
- **Development approach:** The app evolves incrementally as new React Native concepts are learned

---

## 🎬 Demo

> 🚧 **Live demo / production release is not available yet.**
>
> The project is currently under active development and learning.

---

## ✨ Current Features

- ✅ **React Native + Expo Setup** — Project configured with Expo SDK 54
- ✅ **Home Screen** — Main application screen with reusable sections
- ✅ **Reusable Header Component** — Profile image, app title, and notification icon
- ✅ **Safe Area Support** — Uses `SafeAreaView` and `SafeAreaProvider`
- ✅ **News Carousel** — Horizontal `FlatList` with paging behavior
- ✅ **Image-Based News Cards** — Uses `ImageBackground` for article visuals
- ✅ **State Management Practice** — Uses `useState` for local UI state
- ✅ **Dynamic News Addition** — Adds a sample article through a button interaction
- ✅ **Event Handling** — Button and touch interactions implemented with React Native events
- ✅ **External Image Sources** — News cards currently use remote image URLs
- ✅ **Organized Project Structure** — Screens, components, styles, and assets are separated
- 🚧 **API Integration** — Planned
- 🚧 **Navigation** — Planned
- 🚧 **Persistent Storage** — Planned

---

## 📱 Core Functionality

| Module | File | Description |
|--------|------|-------------|
| 🏠 App Entry | `App.js` | Root component and application provider setup |
| 🏠 Home Screen | `src/screens/Home/HomeScreen.jsx` | Main screen combining the header, news section, and interaction area |
| 🧩 Header | `src/components/Header.jsx` | Reusable application header |
| 📰 Main News | `src/components/MainNews.jsx` | Horizontal news list and sample article rendering |
| 🎨 Header Styling | `src/styles/HeaderStyle.js` | Header layout and image/text styles |
| 🎨 Home Styling | `src/styles/HomeScreenStyle.js` | Home screen interaction styles |
| 🎨 News Styling | `src/styles/MainNewsStyle.js` | News card and overlay styles |
| 🔤 Fonts & Assets | `src/assets/` | Local font files and application images |

---

## 🏗️ Architecture & Technical Decisions

### Project Structure

```text
NewsApp/
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── Cairo-VariableFont_slnt,wght.ttf
│   │   │   └── static/
│   │   │       ├── Cairo-Regular.ttf
│   │   │       ├── Cairo-Medium.ttf
│   │   │       ├── Cairo-SemiBold.ttf
│   │   │       ├── Cairo-Bold.ttf
│   │   │       └── ...
│   │   └── images/
│   │       ├── notification.png
│   │       ├── pngtree-man.png
│   │       └── profile.png
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   └── MainNews.jsx
│   │
│   ├── screens/
│   │   └── Home/
│   │       └── HomeScreen.jsx
│   │
│   └── styles/
│       ├── HeaderStyle.js
│       ├── HomeScreenStyle.js
│       └── MainNewsStyle.js
│
├── App.js
├── index.js
├── app.json
├── package.json
└── README.md
```

### Key Technical Decisions

**Why React Native with Expo?**

> Expo provides a practical development environment for learning React Native and building the project incrementally without introducing unnecessary native configuration at the beginning.

**Why JavaScript?**

> The project uses JavaScript so the focus remains on understanding React Native fundamentals, component behavior, state, events, and application structure before introducing TypeScript.

**Why reusable components?**

> The project separates UI responsibilities into components such as `Header` and `MainNews`, making the code easier to understand, reuse, and extend.

**Why separate styles from components?**

> Styling is placed in dedicated files to keep component files focused on structure and behavior while making styles easier to find and maintain.

**Why `FlatList` for news items?**

> `FlatList` provides a list-oriented structure for rendering article data and creates a natural path toward handling larger or remotely loaded datasets later.

**Current data approach**

> News articles are currently represented as local sample data inside `MainNews.jsx`. API-based news fetching is planned for a later stage.

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|-------|------------|-----|
| Framework | React Native | Cross-platform mobile application development |
| Development Platform | Expo | Simplified React Native development workflow |
| Language | JavaScript (ES6+) | Current learning focus and project implementation |
| UI | React Native Components | Native-style mobile UI building blocks |
| State | React `useState` | Local component state and interaction handling |
| Lists | `FlatList` | Efficient rendering of list-based content |
| Images | `Image` / `ImageBackground` | Profile, notification, and news visuals |
| Safe Areas | `react-native-safe-area-context` | Handles content positioning around device safe areas |
| Fonts | Expo Font + Cairo Assets | Local font assets prepared for the project |
| Styling | `StyleSheet` | Structured React Native styling |
| Runtime / Tooling | Expo SDK 54 | Current project development environment |

---

## 🚧 Challenges & How I Solved Them

### Challenge 1: Structuring the project as it grows

**Problem:** Keeping screens, reusable UI, styling, and assets in one place quickly becomes difficult to manage.

**Solution:** Introduced separate folders for `screens`, `components`, `styles`, and `assets`.

**Result:** The project now has a clearer structure that can scale as more React Native features are introduced.

### Challenge 2: Rendering multiple news cards interactively

**Problem:** Rendering repeated article UI manually would make the component harder to extend.

**Solution:** Used `FlatList` with a reusable `renderArticle` function and article objects containing IDs, titles, and image URLs.

**Result:** New article objects can be rendered through the same list mechanism.

### Challenge 3: Understanding component state and UI updates

**Problem:** User interactions need to change the rendered interface dynamically.

**Solution:** Used `useState` to manage the displayed text and the current news list, then updated state through event handlers.

**Result:** The interface responds to user actions without manually rebuilding the UI.

---

## 📈 What I Learned

- **React Native component structure** — Building screens from reusable components
- **Props and component responsibilities** — Passing and organizing UI behavior
- **State management with `useState`** — Understanding how state changes trigger UI updates
- **Event handling** — Connecting user actions to application behavior
- **Flexbox layout** — Arranging mobile UI elements using React Native layout rules
- **`FlatList`** — Rendering dynamic lists from structured data
- **`ImageBackground`** — Building layered image-based UI
- **Safe areas** — Handling device screen boundaries and notches
- **Style organization** — Keeping styles separate from component logic
- **Project organization** — Structuring a React Native application for continued growth
- **Git & GitHub workflow** — Tracking project progress with commits and pushing updates regularly

---

## 🗺️ Roadmap

### Completed

- [x] Expo + React Native project setup
- [x] Basic component structure
- [x] Home Screen
- [x] Reusable Header component
- [x] Safe Area implementation
- [x] React Native styling with `StyleSheet`
- [x] `useState` practice
- [x] Touch and button events
- [x] Horizontal `FlatList`
- [x] Paging between news cards
- [x] Dynamic local article addition
- [x] Local image and font assets

### Planned

- [ ] React Navigation
- [ ] Multiple application screens
- [ ] News API integration
- [ ] Loading and error states
- [ ] Search and categories
- [ ] Article details screen
- [ ] Local storage
- [ ] User preferences
- [ ] Authentication
- [ ] Backend integration
- [ ] TypeScript migration
- [ ] Performance improvements
- [ ] Production Android/iOS builds

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js installed
- npm installed
- Expo-compatible development environment

### Installation

Clone the repository:

```bash
git clone https://github.com/AbdallahThyab1/NewsApp.git
```

Move into the project directory:

```bash
cd NewsApp
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npm start
```

For web development:

```bash
npm run web
```

---

## 🔄 Development Workflow

This project is developed incrementally alongside the React Native learning process.

After implementing a meaningful change:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Example:

```bash
git add .
git commit -m "Add horizontal news list"
git push
```

This keeps the GitHub repository synchronized with the project's learning and implementation progress.

---

## 📞 Contact

**Abdallah Thyab** - Computer Engineering Student & Software Engineering Learner

- 📧 Email: [1abdallahthyab@gmail.com](mailto:1abdallahthyab@gmail.com)
- 📱 Phone: +970 598786853
- 💼 LinkedIn: [Abdallah Thyab](https://www.linkedin.com/in/abdallah-thyab-dev/)
- 🐙 GitHub: [AbdallahThyab1](https://github.com/AbdallahThyab1)

---

## 📄 License

This project is currently a personal learning project developed for educational purposes.

© 2026 Abdallah Thyab. All rights reserved.
