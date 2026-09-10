import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeamRegistration from "./pages/TeamRegistration";
import TeamLogin from "./pages/TeamLogin";
import AdminLogin from "./pages/AdminLogin";
import PlayerDashboard from "./pages/PlayerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team-registration" element={<TeamRegistration />} />
          <Route path="/team-login" element={<TeamLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/player-dashboard" element={<PlayerDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
