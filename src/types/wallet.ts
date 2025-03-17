import { Hex, Address } from 'viem'

type tx = {
  chainId: number
  to: Address
  value: bigint
  nonce: number
  data: Hex
  gas: bigint
  maxFeePerGas: bigint | undefined
  maxPriorityFeePerGas: bigint | undefined
  gasPrice: bigint | undefined
}

export type TgCustodialWallet = {
  tg_user_id: string
  address: Address
  network: string
  address_type: 'main' | 'batch'
  creation_time: string
}

export interface TelegramCustodialWallet {
  headers: Record<string, string>;
  userId: string;

  getAddresses(
    network: 'eth' | 'sol',
    retrieveOnlyMain?: boolean
  ): Promise<Array<TgCustodialWallet>>;

  signEthTransaction(
    address: string,
    txs: tx[]
  ): Promise<Hex[]>;
}



