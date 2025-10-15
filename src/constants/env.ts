type Env = {
  WALLETCONNECT_PROJECT_ID: string
  GOOGLE_MAPS_API_KEY: string
}

export const env: Env = {
  WALLETCONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
}