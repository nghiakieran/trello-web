# Trello Web Application

A Trello web application built with React and DnD Kit, focusing on implementing drag and drop functionality for columns and task cards.

## 🚀 Live Demo

> Check out the live demo: [https://trello-web-khaki-rho.vercel.app/]

## 🚀 Implemented Features

- [x] Drag and drop columns to reorder
- [x] Drag and drop cards between columns
- [x] Responsive design
- [x] Dark/Light mode
- [x] Material-UI user interface

## 🛠 Technologies Used

- **Frontend Framework**: React 18
- **UI Library**: Material-UI (MUI)
- **Drag and Drop**: @dnd-kit/core, @dnd-kit/sortable

## 📦 Installation

1. Clone repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

## 🏗 Project Structure

```
src/
├── components/    # Reusable components
│   ├── AppBar/    # Navigation bar
│   └── ModeSelect/# Dark/Light mode toggle
├── pages/         # Main pages
│   └── Boards/    # Board management page
│       └── BoardContent/
│           └── ListColumns/  # Column and card management
├── assets/        # Static assets (images, icons)
└── theme.js       # MUI theme configuration
```

## 📝 Reference

> This project was developed based on the tutorial by TrungQuanDev on YouTube. You can check out the playlist here: [https://www.youtube.com/@trungquandev]
