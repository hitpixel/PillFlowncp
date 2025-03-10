"use client";

import { ArrowUp, Calendar, ChevronDown, Clock, Home, LineChart, Package, Pill, Settings, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r border-border bg-card text-card-foreground md:flex">
        <div className="flex h-14 items-center border-b border-border px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <Pill className="h-6 w-6 text-primary" />
            <span className="text-lg">PillFlow</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Package className="h-4 w-4" />
              Packs
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Calendar className="h-4 w-4" />
              Schedule
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <LineChart className="h-4 w-4" />
              Reports
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto border-t border-border p-4">
          <div className="flex items-center gap-3 rounded-lg bg-accent/50 p-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Avatar"
              className="rounded-full border border-border"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Dr. Sarah Chen</span>
              <span className="text-xs text-muted-foreground">Pharmacist</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-border bg-card px-4 lg:px-6">
          <Link href="#" className="lg:hidden">
            <Pill className="h-6 w-6 text-primary" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto h-8"
          >
            <Clock className="mr-2 h-4 w-4" />
            Last updated: Today, 2:30 PM
          </Button>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Collections</CardTitle>
                <Package className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  12% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Active Customers</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <span>No change from last month</span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Due This Week</CardTitle>
                <Calendar className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <span>All collections up to date</span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Collection Rate</CardTitle>
                <LineChart className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">100%</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  5% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Collections Over Time</CardTitle>
                <CardDescription>Last 6 months of collection data</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <CollectionsChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Customer Collection Activity</CardTitle>
                <CardDescription>Recent collection activity by customer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                          JD
                        </div>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-xs text-muted-foreground">Last collection: 3 days ago</div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-500">Active</Badge>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>6 collections</span>
                      <span>8 total</span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-medium">
                          MS
                        </div>
                        <div>
                          <div className="font-medium">Mary Smith</div>
                          <div className="text-xs text-muted-foreground">Last collection: 1 week ago</div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-500">Active</Badge>
                    </div>
                    <Progress value={25} className="h-2" />
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>2 collections</span>
                      <span>8 total</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Collections</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-border bg-accent/50 p-4 text-center">
                  <Calendar className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">No upcoming collections this week</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Medication Status</CardTitle>
                <CardDescription>Current inventory status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <div>Blister Packs</div>
                      <div className="text-green-500">In Stock</div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <div>Sachets</div>
                      <div className="text-yellow-500">Low Stock</div>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <div>Webster Packs</div>
                      <div className="text-green-500">In Stock</div>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest system events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/20 p-1">
                      <Package className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Collection completed</p>
                      <p className="text-xs text-muted-foreground">John Doe • 3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-purple-500/20 p-1">
                      <Package className="h-4 w-4 text-purple-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Collection completed</p>
                      <p className="text-xs text-muted-foreground">Mary Smith • 1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-500/20 p-1">
                      <Users className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">New customer added</p>
                      <p className="text-xs text-muted-foreground">System • 2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function CollectionsChart() {
  return (
    <div className="h-[240px] w-full">
      <svg viewBox="0 0 600 240" className="h-full w-full">
        {/* Grid lines */}
        <line x1="0" y1="240" x2="600" y2="240" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="0" y1="200" x2="600" y2="200" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="0" y1="160" x2="600" y2="160" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="0" y1="120" x2="600" y2="120" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="0" y1="80" x2="600" y2="80" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="0" y1="40" x2="600" y2="40" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="0" y1="0" x2="600" y2="0" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

        {/* Month labels */}
        <text x="50" y="260" className="text-muted-foreground" fontSize="12" textAnchor="middle">
          Jan
        </text>
        <text x="150" y="260" className="text-muted-foreground" fontSize="12" textAnchor="middle">
          Feb
        </text>
        <text x="250" y="260" className="text-muted-foreground" fontSize="12" textAnchor="middle">
          Mar
        </text>
        <text x="350" y="260" className="text-muted-foreground" fontSize="12" textAnchor="middle">
          Apr
        </text>
        <text x="450" y="260" className="text-muted-foreground" fontSize="12" textAnchor="middle">
          May
        </text>
        <text x="550" y="260" className="text-muted-foreground" fontSize="12" textAnchor="middle">
          Jun
        </text>

        {/* Area chart */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <path
          d="M0,240 L0,180 C50,160 100,200 150,170 C200,140 250,120 300,140 C350,160 400,120 450,100 C500,80 550,100 600,80 L600,240 Z"
          fill="url(#gradient)"
          className="text-primary"
        />

        {/* Line */}
        <path
          d="M0,180 C50,160 100,200 150,170 C200,140 250,120 300,140 C350,160 400,120 450,100 C500,80 550,100 600,80"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />

        {/* Data points */}
        <circle cx="0" cy="180" r="4" className="fill-background stroke-primary" strokeWidth="2" />
        <circle cx="150" cy="170" r="4" className="fill-background stroke-primary" strokeWidth="2" />
        <circle cx="300" cy="140" r="4" className="fill-background stroke-primary" strokeWidth="2" />
        <circle cx="450" cy="100" r="4" className="fill-background stroke-primary" strokeWidth="2" />
        <circle cx="600" cy="80" r="4" className="fill-background stroke-primary" strokeWidth="2" />
      </svg>
    </div>
  );
}
