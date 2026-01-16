"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Search } from "lucide-react"

// Constants
const TRDG_BSC_ADDRESS = "0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
const TRDG_ETH_ADDRESS = "0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
const DEFAULT_WALLET = "0x000000000000000000000000000000000000dEaD"

interface WalletData {
  bsc: {
    balance: string
    balanceUsd: string
    rewards: string
    rewardsUsd: string
  }
  eth: {
    balance: string
    balanceUsd: string
    rewards: string
    rewardsUsd: string
  }
}

export function WalletTracker({
  prices,
}: { prices: { bsc: string; eth: string; wbnbPrice: string; wethPrice: string } }) {
  const [walletAddress, setWalletAddress] = useState(DEFAULT_WALLET)
  const [inputWallet, setInputWallet] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [walletData, setWalletData] = useState<WalletData>({
    bsc: {
      balance: "0",
      balanceUsd: "0",
      rewards: "0",
      rewardsUsd: "0",
    },
    eth: {
      balance: "0",
      balanceUsd: "0",
      rewards: "0",
      rewardsUsd: "0",
    },
  })

  // Format large numbers with commas
  const formatNumber = (num: string | number) => {
    return Number(num).toLocaleString("en-US", { maximumFractionDigits: 0 })
  }

  // Format USD values
  const formatUsd = (value: string | number) => {
    return `$${Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  // Fetch wallet data
  const fetchWalletData = async (address: string) => {
    setIsLoading(true)
    try {
      // Fetch BSC wallet data
      const bscBalance = await fetchTokenBalance(address, "bsc")
      const bscRewards = await fetchTokenRewards(address, "bsc")

      // Fetch ETH wallet data
      const ethBalance = await fetchTokenBalance(address, "eth")
      const ethRewards = await fetchTokenRewards(address, "eth")

      // Calculate USD values
      const bscBalanceUsd = Number(bscBalance) * Number(prices.bsc)
      const bscRewardsUsd = Number(bscRewards) * Number(prices.bsc)
      const ethBalanceUsd = Number(ethBalance) * Number(prices.eth)
      const ethRewardsUsd = Number(ethRewards) * Number(prices.eth)

      setWalletData({
        bsc: {
          balance: bscBalance,
          balanceUsd: bscBalanceUsd.toString(),
          rewards: bscRewards,
          rewardsUsd: bscRewardsUsd.toString(),
        },
        eth: {
          balance: ethBalance,
          balanceUsd: ethBalanceUsd.toString(),
          rewards: ethRewards,
          rewardsUsd: ethRewardsUsd.toString(),
        },
      })
    } catch (error) {
      console.error("Error fetching wallet data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch token balance for a wallet
  const fetchTokenBalance = async (address: string, chain: "bsc" | "eth"): Promise<string> => {
    try {
      // In a real implementation, this would call the blockchain API
      // For demo purposes, we'll simulate data for the dead wallet and return random data for others
      if (address.toLowerCase() === DEFAULT_WALLET.toLowerCase()) {
        return chain === "bsc" ? "42976275761868632" : "60976275761868632"
      } else {
        // Random balance for demo purposes
        return Math.floor(Math.random() * 1000000000000).toString()
      }
    } catch (error) {
      console.error(`Error fetching ${chain} token balance:`, error)
      return "0"
    }
  }

  // Fetch token rewards for a wallet
  const fetchTokenRewards = async (address: string, chain: "bsc" | "eth"): Promise<string> => {
    try {
      // In a real implementation, this would call the blockchain API
      // For demo purposes, we'll simulate data for the dead wallet and return random data for others
      if (address.toLowerCase() === DEFAULT_WALLET.toLowerCase()) {
        return chain === "bsc" ? "9463951399596002" : "13463951399596002"
      } else {
        // Random rewards for demo purposes
        return Math.floor(Math.random() * 100000000000).toString()
      }
    } catch (error) {
      console.error(`Error fetching ${chain} token rewards:`, error)
      return "0"
    }
  }

  // Handle wallet search
  const handleSearch = () => {
    if (inputWallet.trim()) {
      setWalletAddress(inputWallet.trim())
    }
  }

  // Handle input keypress (search on Enter)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  // Fetch data when wallet address changes
  useEffect(() => {
    fetchWalletData(walletAddress)
  }, [walletAddress, prices])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Enter wallet address (0x...)"
            value={inputWallet}
            onChange={(e) => setInputWallet(e.target.value)}
            onKeyDown={handleKeyPress}
            className="bg-black/60 border-purple-500/20 focus:border-purple-500"
          />
        </div>
        <Button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
        >
          {isLoading ? "Loading..." : <Search className="mr-2 h-4 w-4" />}
          Track Wallet
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* BSC Wallet Card */}
        <Card className="bg-black/40 border-purple-500/20 overflow-hidden">
          <CardHeader className="border-b border-purple-500/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium font-orbitron">TRDG BSC Wallet</h3>
              <div className="text-xs text-gray-400 truncate max-w-[150px]">
                {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image src="/images/trdg-logo.png" alt="TRDG Logo" fill className="object-contain" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Balance</div>
                    <div className="font-medium">{formatNumber(walletData.bsc.balance)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Value</div>
                  <div className="font-medium">{formatUsd(walletData.bsc.balanceUsd)}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image src="/images/rewards.png" alt="Rewards" fill className="object-contain" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Rewards Earned</div>
                    <div className="font-medium">{formatNumber(walletData.bsc.rewards)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Value</div>
                  <div className="font-medium">{formatUsd(walletData.bsc.rewardsUsd)}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ETH Wallet Card */}
        <Card className="bg-black/40 border-blue-500/20 overflow-hidden">
          <CardHeader className="border-b border-blue-500/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium font-orbitron">TRDG ETH Wallet</h3>
              <div className="text-xs text-gray-400 truncate max-w-[150px]">
                {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image src="/images/trdg-logo.png" alt="TRDG Logo" fill className="object-contain" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Balance</div>
                    <div className="font-medium">{formatNumber(walletData.eth.balance)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Value</div>
                  <div className="font-medium">{formatUsd(walletData.eth.balanceUsd)}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image src="/images/rewards.png" alt="Rewards" fill className="object-contain" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Rewards Earned</div>
                    <div className="font-medium">{formatNumber(walletData.eth.rewards)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Value</div>
                  <div className="font-medium">{formatUsd(walletData.eth.rewardsUsd)}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
