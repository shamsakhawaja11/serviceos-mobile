# ServiceOS Mobile

A multi-role React Native app for service-based businesses (salons, spas, clinics, gyms). Customers book appointments, staff manage their schedules, and owners run their business — all in one app, backed by a NestJS API.

Built as a phased, production-oriented project to practice real-world mobile app architecture: authentication, role-based navigation, availability scheduling, and business management.

## Roles

- **Customer** — browse businesses, book appointments, view booking history
- **Staff** — view assigned schedule, manage appointment status
- **Owner** — manage business profile, services, staff, and view appointments

## Tech stack

- **Frontend:** React Native
- **Backend:** NestJS ([serviceos-backend](#) — link when ready)
- **Database:** PostgreSQL
- **Auth:** JWT with refresh tokens, role-based access control

## Project status

🚧 In active development. Currently building: **Phase A — Authentication screens**

## Roadmap

- [ ] Phase A — Auth (login, register, forgot password)
- [ ] Phase B — Customer booking flow
- [ ] Phase C — Staff schedule flow
- [ ] Phase D — Owner business management
- [ ] Availability engine integration
- [ ] Notifications
- [ ] Payments

## Getting started

```bash
git clone https://github.com/<your-username>/serviceos-mobile.git
cd serviceos-mobile
npm install
npx react-native run-android
```

## Folder structure

```
src/
├── screens/       # App screens
├── components/    # Reusable UI components
├── navigation/     # Navigators (stack, tabs, role-based routing)
├── services/      # API calls
├── hooks/         # Custom hooks
├── store/         # Global state
├── theme/         # Colors, typography, spacing
└── types/         # TypeScript types
```

## Author

Built by shamsa