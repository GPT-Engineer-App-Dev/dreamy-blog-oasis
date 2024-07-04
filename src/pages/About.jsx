import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src="/images/profile.jpg" alt="Profile Picture" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <p className="text-center">
            Hello! I'm a passionate blogger who loves to write about various topics including technology, travel, and personal development. Welcome to my personal blog where I share my thoughts and experiences.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;