import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    { id: 1, title: "First Blog Post", excerpt: "This is the excerpt for the first blog post." },
    { id: 2, title: "Second Blog Post", excerpt: "This is the excerpt for the second blog post." },
    // Add more posts as needed
  ];

  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Blog</CardTitle>
        </CardHeader>
        <CardContent>
          {posts.map((post) => (
            <div key={post.id} className="mb-4">
              <Link to={`/post/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </Link>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;