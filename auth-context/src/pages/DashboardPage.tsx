import { useAuth } from "../context/AuthContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Wallet, ArrowLeftRight, TrendingUp, Mail } from "lucide-react";

export function DashboardPage() {
  const { user } = useAuth();

  const displayName = user ? `${user.firstName} ${user.lastName}` : "John Doe";
  const displayEmail = user?.email || "john@example.com";

  return (
    <div className="min-h-[calc(100vh-4rem)] py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="border-zinc-200 shadow-xs bg-white">
          <CardContent className="p-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#010101]">
              Welcome, {displayName}
            </h1>
            <div className="flex items-center gap-2 mt-2 text-sm text-zinc-600">
              <Mail className="w-4 h-4 text-zinc-400" />
              <span className="font-medium">Email:</span>
              <span className="text-zinc-800">{displayEmail}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-xs bg-white">
          <CardHeader className="border-b border-zinc-100 pb-4">
            <CardTitle className="text-xl font-bold text-[#010101]">
              Account Overview
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xs transition-colors">
                <CardHeader className="flex flex-row items-center justify-between pb-2 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Balance
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-[#010101]">
                    <Wallet className="w-4 h-4" />
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0">
                  <div className="text-2xl font-bold text-[#010101]">
                    ₦150,000
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Available balance
                  </p>
                </CardContent>
              </Card>

              <Card className="border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xs transition-colors">
                <CardHeader className="flex flex-row items-center justify-between pb-2 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Transactions
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-[#010101]">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0">
                  <div className="text-2xl font-bold text-[#010101]">12</div>
                  <p className="text-xs text-zinc-500 mt-1">Total this month</p>
                </CardContent>
              </Card>

              <Card className="border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xs transition-colors">
                <CardHeader className="flex flex-row items-center justify-between pb-2 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Investments
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-[#010101]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0">
                  <div className="text-2xl font-bold text-[#010101]">
                    ₦80,000
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">Active portfolio</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
