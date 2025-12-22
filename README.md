# TextUtils - React Modular Text Utility App

A **React** application for transforming, analyzing, and managing text. It is **modular, reusable, and fully responsive**, with **dark/light mode** and **export options**.

---

## Features

- **Text Transformations**
  - Uppercase / Lowercase
  - Capitalize Words
  - Sentence Case
  - Reverse Text
  - Remove Extra Spaces
  - Remove Special Characters

- **Text Actions**
  - Copy to clipboard
  - Clear text
  - Speak text
  - Download as `.txt`, `.pdf`, `.docx`

- **Advanced Features**
  - Undo / Redo actions
  - History panel (last 10 changes)
  - Keyboard shortcuts
  - Reusable modular components (Button, Card, TextArea, EmptyState)
  - Dark/Light mode toggle

- **Pages**
  - Home
  - Text Form
  - About

---

## Project Structure

src/
├─ components/
│ ├─ common/ # Reusable components
│ ├─ navbar/ # Navbar
│ ├─ text/ # TextForm and related components
│ ├─ Home.jsx
│ └─ About.jsx
├─ redux/ # Redux store and slices
├─ utils/ # Text utility functions
├─ hooks/ # Custom hooks
└─ App.jsx # App entry point

Usage

Navigate to Text Form page to enter text.

Use buttons to transform text.

View live summary: word count, character count, estimated reading time.

Access history panel to restore previous changes.

Toggle dark/light mode from the navbar.

Export text as .txt, .pdf, or .docx.

Home and About pages show heading and content cards styled consistently.

Dependencies

react / react-dom

react-router-dom

react-redux

@reduxjs/toolkit

bootstrap

jspdf - for PDF export

docx - for DOCX export

