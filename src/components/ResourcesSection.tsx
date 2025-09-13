import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Video, 
  Headphones, 
  FileText, 
  Clock, 
  Star,
  ExternalLink,
  PlayCircle
} from "lucide-react";

const ResourcesSection = () => {
  const categories = [
    { 
      title: "Stress Management", 
      count: 12, 
      color: "bg-primary/10 text-primary border-primary/20" 
    },
    { 
      title: "Anxiety Support", 
      count: 8, 
      color: "bg-accent/10 text-accent border-accent/20" 
    },
    { 
      title: "Sleep & Rest", 
      count: 6, 
      color: "bg-success/10 text-success border-success/20" 
    },
    { 
      title: "Study Balance", 
      count: 10, 
      color: "bg-muted/50 text-muted-foreground border-muted" 
    }
  ];

  const resources = [
    {
      type: "article",
      icon: FileText,
      title: "Managing Academic Stress: A Student's Guide",
      description: "Practical strategies for handling academic pressure and maintaining balance.",
      duration: "5 min read",
      rating: 4.8,
      category: "Stress Management",
      featured: true
    },
    {
      type: "video",
      icon: Video,
      title: "Mindfulness Meditation for Students",
      description: "A guided meditation session designed specifically for busy students.",
      duration: "12 min",
      rating: 4.9,
      category: "Anxiety Support",
      featured: true
    },
    {
      type: "audio",
      icon: Headphones,
      title: "Sleep Stories for Better Rest",
      description: "Calming stories and sounds to help you unwind and sleep better.",
      duration: "15-30 min",
      rating: 4.7,
      category: "Sleep & Rest",
      featured: false
    },
    {
      type: "article",
      icon: FileText,
      title: "Building Healthy Study Habits",
      description: "Evidence-based techniques to improve focus and reduce burnout.",
      duration: "7 min read",
      rating: 4.6,
      category: "Study Balance",
      featured: false
    },
    {
      type: "video",
      icon: Video,
      title: "Breathing Exercises for Anxiety",
      description: "Quick breathing techniques you can use anywhere, anytime.",
      duration: "8 min",
      rating: 4.8,
      category: "Anxiety Support",
      featured: false
    },
    {
      type: "audio",
      icon: Headphones,
      title: "Focus & Concentration Sounds",
      description: "Background sounds designed to enhance concentration while studying.",
      duration: "60 min",
      rating: 4.5,
      category: "Study Balance",
      featured: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-accent/10 text-accent';
      case 'audio':
        return 'bg-success/10 text-success';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mental Health Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of tools, guides, and content designed to support your mental wellbeing.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant="outline"
              className={`px-4 py-2 text-sm font-medium cursor-pointer hover:shadow-soft transition-smooth ${category.color}`}
            >
              {category.title} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Featured Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.filter(resource => resource.featured).map((resource, index) => (
              <Card key={index} className="shadow-soft border-border/50 hover:shadow-glow transition-smooth group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-lg ${getTypeColor(resource.type)} flex items-center justify-center mb-3`}>
                      <resource.icon className="w-5 h-5" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                    {resource.title}
                  </CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{resource.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth">
                    {resource.type === 'video' && <PlayCircle className="w-4 h-4 mr-2" />}
                    {resource.type === 'audio' && <Headphones className="w-4 h-4 mr-2" />}
                    {resource.type === 'article' && <BookOpen className="w-4 h-4 mr-2" />}
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">All Resources</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {resources.filter(resource => !resource.featured).map((resource, index) => (
              <Card key={index} className="shadow-soft border-border/50 hover:shadow-glow transition-smooth group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${getTypeColor(resource.type)} flex items-center justify-center flex-shrink-0`}>
                      <resource.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {resource.title}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{resource.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:bg-muted transition-smooth">
            Browse All Resources
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;