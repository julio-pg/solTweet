import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AnchorProvider, Program } from '@coral-xyz/anchor'

import toast from 'react-hot-toast'
import { useCluster } from '../cluster/cluster-data-access'
import { useAnchorProvider } from '../solana/solana-provider'
import { useTransactionToast } from '../ui/ui-layout'
import { web3 } from '@coral-xyz/anchor'
import { SOL_TWEET_PROGRAM_ID } from '@/config'
import SOL_TWEET_PROGRAM_IDL from '@/idl/sol_tweet_idl.json'
interface CreateProfileArgs {
  username: string
  bio: string
  avatar_cid: string
}

const getSolTweetProgram = (provider: AnchorProvider) => {
  return new Program(SOL_TWEET_PROGRAM_IDL, provider)
}

export function useSolTweetProgram() {
  const { connection } = useConnection()
  const { cluster } = useCluster()
  const transactionToast = useTransactionToast()
  const provider = useAnchorProvider()
  const program = getSolTweetProgram(provider)
  const { publicKey } = useWallet()

  const getProgramAccount = useQuery({
    queryKey: ['solTweet', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(SOL_TWEET_PROGRAM_ID),
  })

  const createProfile = useMutation<string, Error, CreateProfileArgs>({
    mutationKey: ['createProfile', { cluster }],
    mutationFn: ({ username, bio, avatar_cid }) =>
      program.methods
        .createProfile(username, bio, avatar_cid)
        .accounts({
          profile: '',
          user: publicKey!,
          systemProgram: web3.SystemProgram.programId,
        })
        .rpc(),

    onSuccess: (signature: string) => {
      transactionToast(signature)
    },
    onError: () => {
      toast.error('Failed to run program')
    },
  })

  return {
    getProgramAccount,
    createProfile,
  }
}
