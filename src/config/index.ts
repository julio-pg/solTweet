import { PublicKey } from '@solana/web3.js'

export const SOL_TWEET_PROGRAM_ID = new PublicKey(import.meta.env.VITE_SOL_TWEET_PROGRAM_ID as string)
