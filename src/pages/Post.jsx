import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Post = () => {
  const { id } = useParams();
  const post = {
    title: `Blog Post ${id}`,
    content: `This is the full content of blog post ${id}.`,
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;