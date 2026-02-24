#!/bin/sh
# Run database migrations on startup
npx prisma db push --skip-generate
# Start Next.js
npm start
