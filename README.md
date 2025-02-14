# FCM Test - Web Push Notifications with React

A React application to test and implement web push notifications using Firebase Cloud Messaging (FCM). Built with Vite for optimal development experience.

## Features

- React integration with Vite
- Firebase Cloud Messaging implementation
- Web Push Notifications
- Hot Module Replacement (HMR)
- ESLint configuration for code quality

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- A Firebase project with FCM enabled

## Getting Started

1. Clone the repository:
```sh
git clone <repository-url>
cd fcm-test
```

2. Install dependencies:
```sh
npm install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## Resources

- [React Documentation](https://react.dev)
- [Firebase Cloud Messaging Documentation](https://firebase.google.com/docs/cloud-messaging)
- [Vite Documentation](https://vitejs.dev)
