# Next.js 15 Starter Kit

A modern, feature-rich starter template for building production-ready applications with Next.js 15, Tailwind CSS, and TypeScript.

![Next Starter Kit](https://dwdwn8b5ye.ufs.sh/f/MD2AM9SEY8GucGJl7b5qyE7FjNDKYduLOG2QHWh3f5RgSi0c)

## Features

### Core Technologies
- ⚡ **Next.js 15** - The latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe code
- 🔒 **Authentication** - Clerk integration with persistent authorization toggle
- 🎭 **Shadcn/ui** - Beautiful and accessible components
- 💾 **Convex DB** - Real-time database with built-in file storage and serverless functions
- 💳 **Polar.sh** - Open-source solution for managing subscriptions and payments

### Performance Optimizations
- 🚀 **Route Prefetching** - Instant page transitions for dashboard and auth pages
- 🖼️ **Optimized Images** - Eager loading for critical images
- 🌓 **Dark/Light Mode** - System-aware theme switching with custom gradients
- 📱 **Responsive Design** - Mobile-first approach
- 🔄 **Real-time Updates** - Powered by Convex DB's real-time capabilities

### Developer Experience
- 🧩 **Component Library** - Pre-built, customizable components
- 📊 **Dashboard Template** - Ready-to-use admin interface with subscription management
- 🔍 **SEO Optimized** - Meta tags and sitemap generation

## Convex DB Integration

To set up your Convex database, visit: [https://convex.link/rasmicstarter](https://convex.link/rasmicstarter)

## Quick Start

> For detailed setup instructions, please refer to the complete setup guide and video tutorial sections below.

1. Clone the repository:
```bash
git clone https://github.com/michaelshimeles/nextjs-starter-kit.git
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Convex
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
CONVEX_ADMIN_KEY=

# Polar.sh
POLAR_WEBHOOK_SECRET=

# Frontend
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

5. Run the development server:
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
├── app/
│   ├── (auth)/         # Authentication routes
│   ├── (marketing)/    # Marketing pages
│   ├── api/           # API routes
│   └── dashboard/     # Dashboard pages
├── components/
│   ├── homepage/     # Landing page components
│   ├── shared/       # Shared UI components
│   └── wrapper/      # Layout wrappers and navigation
├── config/           # Configuration files
├── convex/          # Convex DB schema and functions
├── lib/             # Utility functions
├── public/          # Static assets
│   ├── images/      # Image assets
│   └── svg/         # SVG assets
└── styles/          # Global styles
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## Setup Tutorial

Watch this video for a complete walkthrough of setting up the starter kit:

[![Next.js Starter Kit Setup Tutorial](https://img.youtube.com/vi/UzpGzbDQP7k/maxresdefault.jpg)](https://www.youtube.com/watch?v=UzpGzbDQP7k)

The video covers:
- Complete setup process from start to finish
- Authentication setup with Clerk
- Database setup with Convex
- Payment integration with Polar.sh
- Local development with ngrok
- Testing the subscription flow
- Troubleshooting common issues

## Setup Guide

### 1. Initial Setup
1. Clone the repository:
```bash
git clone https://github.com/michaelshimeles/nextjs-starter-kit.git
```

2. Install dependencies:
```bash
bun install
```

3. Create environment variables file:
```bash
cp .env.example .env.local
```

### 2. Service Setup

#### Clerk Authentication
1. Go to [clerk.com](https://clerk.com) and create a new project
2. Name your project (e.g., "next-starter")
3. Select authentication methods (Email and Google recommended)
4. Copy these environment variables to `.env.local`:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```
5. Go to JWT Templates in Clerk dashboard
6. Create a new template selecting Convex
7. Copy the issuer URL for the next step
8. **Important**: Click Save on the JWT template

#### Convex Backend
1. Run the following command to create a new Convex project:
```bash
npx convex dev
```
2. When prompted, create a new project and name it in the Convex dashboard
3. The command will automatically add the `NEXT_PUBLIC_CONVEX_URL` to your `.env.local`

### Troubleshooting
1. If subscription isn't working:
   - Verify webhook is properly configured in Polar
   - Check Convex webhook secret is correct
   - Ensure plan IDs match in Polar and Convex plans table
   - Check the `webhookEvents` table in Convex for any errors
   - Verify the `FRONTEND_URL` matches your current environment
2. If authentication isn't working:
   - Verify Clerk JWT template is saved
   - Check Clerk signing key in Convex
   - Ensure all Clerk environment variables are set correctly

## Sponsors and Supporters

Special thanks to [Convex](https://www.convex.dev/) for their sponsorship and support in making this starter kit possible. Their real-time database and file storage solutions have been instrumental in creating a powerful foundation for modern web applications.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this template helpful, please give it a ⭐️ on GitHub!
