export const baseUrl =
    process.env.NODE_ENV === "production"
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000";