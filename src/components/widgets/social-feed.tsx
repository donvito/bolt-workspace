import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

interface Post {
  id: number;
  user: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
}

const initialPosts: Post[] = [
  {
    id: 1,
    user: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      username: "sarahw",
    },
    content: "Just launched our new project! 🚀 So excited to share this with everyone. What do you think?",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
    shares: 2,
    liked: false,
  },
  {
    id: 2,
    user: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      username: "alext",
    },
    content: "Had an amazing brainstorming session today with the team. The future is looking bright! 💡",
    timestamp: "5 hours ago",
    likes: 18,
    comments: 3,
    shares: 1,
    liked: true,
  },
];

export function SocialFeed() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked,
        };
      }
      return post;
    }));
  };

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    const post: Post = {
      id: posts.length + 1,
      user: {
        name: "Current User",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        username: "currentuser",
      },
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false,
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
              <AvatarFallback>CU</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handlePost} disabled={!newPost.trim()}>
              Post
            </Button>
          </div>
        </CardHeader>
      </Card>

      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.user.name}</p>
                  <p className="text-sm text-muted-foreground">
                    @{post.user.username} · {post.timestamp}
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Save Post</DropdownMenuItem>
                  <DropdownMenuItem>Hide Post</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="rounded-lg w-full object-cover max-h-[400px]"
              />
            )}
          </CardContent>
          <CardFooter>
            <div className="w-full space-y-4">
              <Separator />
              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={cn(post.liked && "text-primary")}
                >
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  {post.shares}
                </Button>
              </div>
              <Separator />
              <div className="flex gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
                  <AvatarFallback>CU</AvatarFallback>
                </Avatar>
                <div className="flex-1 flex gap-2">
                  <Input placeholder="Write a comment..." />
                  <Button size="sm">Comment</Button>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}