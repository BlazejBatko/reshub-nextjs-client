"use client"

import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type Props = {
  children: React.ReactNode
}

export const queryClient = new QueryClient()

const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
