# Business Nexus

Business Nexus is a React + Vite dashboard prototype for investor and entrepreneur collaboration. It provides role-based dashboard views, messaging, profile pages, document workflows, calendar interactions, and a polished Tailwind CSS interface.

## Key Features

- Role-based login mockup for Entrepreneur and Investor personas
- React Router navigation across dashboard pages
- Separate dashboard layouts for entrepreneur and investor users
- Sidebar navigation with page routing and active state handling
- Messaging interface with contact list and chat view
- Startup founder profile page with funding, team, and document sections
- Investor portfolio profile page with thesis, track record, and documents
- Calendar section UI and document chamber UI placeholders
- Reusable UI components in `src/ui/`

## Project Structure

- `Nexus/src/App.jsx` — application entry, login gating, and React Router configuration
- `Nexus/src/main.jsx` — React DOM bootstrap
- `Nexus/src/index.css` — global styling and Tailwind import
- `Nexus/src/pages/login/LoginPage.jsx` — login form and demo account selectors
- `Nexus/src/pages/dashboard/DashboardPage.jsx` — dashboard wrapper and nested routes
- `Nexus/src/pages/dashboard/EntrepreneurDashboard.jsx` — entrepreneur dashboard experience
- `Nexus/src/pages/dashboard/InvestorDashboard.jsx` — investor dashboard experience
- `Nexus/src/pages/profile/ProfilePage.jsx` — startup founder profile page
- `Nexus/src/pages/investorprofile/InvestorProfilePage.jsx` — investor profile page
- `Nexus/src/pages/messages/Messages.jsx` — messaging interface and chat selection
- `Nexus/src/components/sidebar/Sidebar.jsx` — sidebar navigation component
- `Nexus/src/components/navbar/Navbar.jsx` — top navigation header
- `Nexus/src/components/calendar/Calendar.jsx` — calendar UI component
- `Nexus/src/components/documentchamber/DocumentChamber.jsx` — document section UI component
- `Nexus/src/components/videocall/VideoCall.jsx` — video call overlay component
- `Nexus/src/components/chatwindow/ChatWindow.jsx` — chat conversation component
- `Nexus/src/ui/` — reusable UI primitives: `Avatar`, `Badge`, `Button`, `Card`, `Input`

## Technologies Used

- React 19
- Vite 4+
- React Router DOM 7
- Tailwind CSS 3
- ESLint

## Installation

```bash
cd "Nexus"
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Notes

- This is a frontend-only prototype with local state mockups.
- Login is simulated locally and uses demo entrepreneur/investor roles.
- Most dashboard content is static mock data for UI demonstration.

## Recommended Improvements

- Add backend authentication and database integration
- Replace mock data with API-driven startup/investor records
- Improve mobile responsiveness across all pages
- Add automated tests for UI flows
- Include a license file if releasing publicly
