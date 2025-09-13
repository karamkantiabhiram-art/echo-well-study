import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Brain, 
  Calendar, 
  BookOpen, 
  Users, 
  TrendingUp,
  Smile,
  Meh,
  Frown,
  CheckCircle
} from "lucide-react";

const DashboardSection = () => {
  const moodOptions = [
    { icon: Smile, label: "Great", color: "text-success" },
    { icon: Meh, label: "Okay", color: "text-muted-foreground" },
    { icon: Frown, label: "Struggling", color: "text-destructive" }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule Check-in",
      description: "Book a session with a counselor",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: BookOpen,
      title: "Explore Resources",
      description: "Browse our wellness library",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Users,
      title: "Join Support Group",
      description: "Connect with peer support",
      color: "bg-success/10 text-success"
    }
  ];

  const weeklyProgress = [
    { day: "Mon", mood: 8 },
    { day: "Tue", mood: 6 },
    { day: "Wed", mood: 7 },
    { day: "Thu", mood: 9 },
    { day: "Fri", mood: 5 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: 7 }
  ];

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Wellness Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your mental health journey, access resources, and connect with support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Daily Check-in */}
          <Card className="lg:col-span-1 shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-primary" />
                <span>Daily Check-in</span>
              </CardTitle>
              <CardDescription>How are you feeling today?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {moodOptions.map((mood, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex flex-col items-center space-y-2 h-auto py-4 hover:bg-muted transition-smooth"
                  >
                    <mood.icon className={`w-6 h-6 ${mood.color}`} />
                    <span className="text-xs">{mood.label}</span>
                  </Button>
                ))}
              </div>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth">
                Submit Check-in
              </Button>
            </CardContent>
          </Card>

          {/* Weekly Progress */}
          <Card className="lg:col-span-2 shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span>Weekly Progress</span>
              </CardTitle>
              <CardDescription>Your mood trends this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-sm font-medium w-8">{day.day}</span>
                    <div className="flex-1">
                      <Progress value={day.mood * 10} className="h-2" />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{day.mood}/10</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium">Weekly Average:</span>
                  <span className="text-lg font-bold text-success">7.1/10</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="lg:col-span-3 shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-accent" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>Get the support you need, when you need it</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth cursor-pointer group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                      <action.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{action.title}</h4>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals Section */}
        <div className="mt-12">
          <Card className="max-w-4xl mx-auto shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>This Week's Goals</span>
              </CardTitle>
              <CardDescription>Small steps towards better mental health</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { text: "Complete daily mindfulness exercise", completed: true },
                  { text: "Connect with a friend or family member", completed: true },
                  { text: "Practice gratitude journaling", completed: false },
                  { text: "Take a 10-minute walk outside", completed: false }
                ].map((goal, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      goal.completed 
                        ? 'bg-success border-success' 
                        : 'border-muted-foreground'
                    }`}>
                      {goal.completed && <CheckCircle className="w-3 h-3 text-success-foreground" />}
                    </div>
                    <span className={`flex-1 ${goal.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                      {goal.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;