import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, ShieldCheck } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-success/10" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="pb-2 text-4xl font-bold leading-tight sm:text-5xl bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Stock Market Trading Game
            </h1>
            <br /><br /><br />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the thrill of stock trading in a team-based competition. <br />
              8 rounds, 25 stocks, and ₹50,00,000 to start your journey!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Player Panel */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/team-registration')}>
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Team Player</CardTitle>
                <CardDescription className="text-base">
                  Join the trading competition with your team of 4 players
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li>• Register your team with 4 players</li>
                  <li>• Trade stocks across 8 exciting rounds</li>
                  <li>• Build your portfolio strategically</li>
                  <li>• Compete for the top position</li>
                </ul>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/team-registration');
                    }}
                  >
                    Register Team
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/team-login');
                    }}
                  >
                    Team Login
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Admin Panel */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin-login')}>
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <ShieldCheck className="h-12 w-12 text-success" />
                </div>
                <CardTitle className="text-2xl">Administrator</CardTitle>
                <CardDescription className="text-base">
                  Control the game, manage teams, and set stock prices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li>• Approve/reject team registrations</li>
                  <li>• Manage 20 stocks and their prices</li>
                  <li>• Control game rounds and settings</li>
                  <li>• Monitor leaderboard and portfolios</li>
                </ul>
                <Button 
                  className="w-full bg-success hover:bg-success/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/admin-login');
                  }}
                >
                  Admin Login
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Game Rules Section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Game Rules</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Trading Rules</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Each team starts with ₹50,00,000</li>
                <li>• 1% brokerage on all trades (buy & sell)</li>
                <li>• Rounds 1-2: Only buying allowed</li>
                <li>• Round 3-8: Both buying and selling allowed</li>
                <li>• Round 9: 🔔 Closing Bell - No trading, final prices set</li>
                <li>• 25+ stocks available for trading</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-success">Team Structure</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 4 players per team</li>
                <li>• Team registration requires approval</li>
                <li>• Real-time portfolio tracking</li>
                <li>• Profit/Loss calculations</li>
                <li>• Leaderboard rankings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
