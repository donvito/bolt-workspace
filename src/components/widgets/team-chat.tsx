import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    user: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    content: "Hey team, how's the progress on the new feature?",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    user: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    content: "Almost done with the UI components. Will push the changes soon.",
    timestamp: "10:32 AM",
  },
  {
    id: "3",
    user: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
    content: "Great! I'll review it as soon as it's ready.",
    timestamp: "10:35 AM",
  },
];

export function TeamChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: String(messages.length + 1),
      user: {
        name: "You",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      },
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <Card className="h-[400px] flex flex-col">
      <CardHeader className="border-b bg-muted/50 py-2">
        <CardTitle>Team Chat</CardTitle>
      </CardHeader>
      <ScrollArea className="flex-1 p-3">
        <div className="space-y-3">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={message.user.avatar} />
                <AvatarFallback>{message.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium">{message.user.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp}
                  </span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-2 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex space-x-2"
        >
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="h-8"
          />
          <Button type="submit" size="icon" className="h-8 w-8">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
}