import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Shield, 
  AlertTriangle,
  Heart,
  Users,
  Calendar,
  ExternalLink
} from "lucide-react";

const SupportSection = () => {
  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "24/7 crisis support and suicide prevention",
      available: "24/7"
    },
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text message",
      available: "24/7"
    },
    {
      name: "Campus Crisis Hotline",
      phone: "(555) 123-HELP",
      description: "Immediate support for students in crisis",
      available: "24/7"
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Peer Chat Support",
      description: "Connect with trained peer supporters who understand student life",
      availability: "Daily 8AM - 10PM",
      type: "Immediate",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Calendar,
      title: "Counseling Sessions",
      description: "One-on-one sessions with licensed mental health professionals",
      availability: "By appointment",
      type: "Professional",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Group sessions focused on specific topics and peer connections",
      availability: "Weekly schedule",
      type: "Group",
      color: "bg-success/10 text-success"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Non-urgent support and resource guidance via email",
      availability: "24-48 hour response",
      type: "Flexible",
      color: "bg-muted/50 text-muted-foreground"
    }
  ];

  const upcomingGroups = [
    {
      title: "Anxiety Management Workshop",
      date: "Monday, 3:00 PM",
      spots: "3 spots left",
      type: "Workshop"
    },
    {
      title: "Study Stress Support Circle",
      date: "Wednesday, 6:00 PM",
      spots: "Open",
      type: "Support Group"
    },
    {
      title: "Mindfulness & Meditation",
      date: "Friday, 4:30 PM",
      spots: "2 spots left",
      type: "Practice Session"
    }
  ];

  return (
    <section id="support" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Support When You Need It
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're not alone. Access professional help, peer support, and crisis resources available 24/7.
          </p>
        </div>

        {/* Crisis Resources */}
        <div className="mb-12">
          <Card className="max-w-4xl mx-auto border-destructive/20 bg-destructive/5 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-destructive">
                <AlertTriangle className="w-5 h-5" />
                <span>Crisis Resources - Available 24/7</span>
              </CardTitle>
              <CardDescription>
                If you're in immediate danger or having thoughts of self-harm, please reach out now.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {crisisResources.map((resource, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-2">{resource.name}</h4>
                    <div className="space-y-2">
                      {resource.phone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-destructive" />
                          <span className="font-mono text-lg font-bold text-destructive">{resource.phone}</span>
                        </div>
                      )}
                      {resource.contact && (
                        <div className="text-sm font-medium text-destructive">{resource.contact}</div>
                      )}
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                      <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/20">
                        {resource.available}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Options */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Support Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card key={index} className="shadow-soft border-border/50 hover:shadow-glow transition-smooth group">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-smooth`}>
                    <option.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <Badge variant="outline" className="text-xs mx-auto">
                    {option.type}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3 h-3" />
                    <span>{option.availability}</span>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth">
                    Get Support
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-success" />
                <span>Upcoming Support Groups</span>
              </CardTitle>
              <CardDescription>Join others on similar journeys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingGroups.map((group, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{group.title}</h4>
                    <p className="text-sm text-muted-foreground">{group.date}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs mb-1">
                      {group.type}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{group.spots}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full border-border hover:bg-muted transition-smooth">
                View All Groups
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Privacy & Safety</span>
              </CardTitle>
              <CardDescription>Your wellbeing and privacy are our priorities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Confidential Support</h4>
                    <p className="text-xs text-muted-foreground">All conversations are private and secure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">HIPAA Compliant</h4>
                    <p className="text-xs text-muted-foreground">Your health information is protected</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Licensed Professionals</h4>
                    <p className="text-xs text-muted-foreground">Qualified mental health experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">24/7 Crisis Support</h4>
                    <p className="text-xs text-muted-foreground">Emergency resources always available</p>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth mt-4">
                <Heart className="w-4 h-4 mr-2" />
                Learn More About Safety
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;