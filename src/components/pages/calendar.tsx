import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { format, startOfWeek, endOfWeek, eachDayOfInterval, addMonths, subMonths } from "date-fns";

const events = {
  "2024-03-20": [
    { id: 1, title: "Team Meeting", time: "10:00 AM", type: "work" },
    { id: 2, title: "Project Review", time: "2:00 PM", type: "work" },
  ],
  "2024-03-22": [
    { id: 3, title: "Client Presentation", time: "11:30 AM", type: "important" },
  ],
  "2024-03-25": [
    { id: 4, title: "Team Lunch", time: "12:00 PM", type: "personal" },
    { id: 5, title: "Sprint Planning", time: "2:00 PM", type: "work" },
  ],
};

export function CalendarPage() {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handlePrevMonth = () => setDate(subMonths(date, 1));
  const handleNextMonth = () => setDate(addMonths(date, 1));

  const weekDays = eachDayOfInterval({
    start: startOfWeek(selectedDate),
    end: endOfWeek(selectedDate),
  });

  const getEventsForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return events[dateStr] || [];
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "work":
        return "default";
      case "important":
        return "destructive";
      case "personal":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
          <p className="text-muted-foreground">
            Schedule and manage your events
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Event
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-5">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle>{format(date, "MMMM yyyy")}</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevMonth}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextMonth}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="month" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="day">Day</TabsTrigger>
              </TabsList>

              <TabsContent value="month">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  month={date}
                  className="rounded-md border"
                  components={{
                    Day: ({ date }) => (
                      <div className="relative h-12 w-12 p-2">
                        <span>{format(date, "d")}</span>
                        {getEventsForDate(date).length > 0 && (
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                            {getEventsForDate(date).slice(0, 3).map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 rounded-full bg-primary"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ),
                  }}
                />
              </TabsContent>

              <TabsContent value="week">
                <div className="grid grid-cols-7 gap-2">
                  {weekDays.map((day) => (
                    <div
                      key={day.toString()}
                      className="border rounded-lg p-2 min-h-[120px]"
                    >
                      <div className="text-center mb-2">
                        <div className="text-sm font-medium">
                          {format(day, "EEE")}
                        </div>
                        <div className="text-lg">{format(day, "d")}</div>
                      </div>
                      {getEventsForDate(day).map((event) => (
                        <div
                          key={event.id}
                          className="text-xs p-1 mb-1 rounded bg-primary/10"
                        >
                          {event.time} - {event.title}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="day">
                <div className="space-y-2">
                  <div className="text-center p-4">
                    <h3 className="text-lg font-medium">
                      {format(selectedDate, "EEEE, MMMM d, yyyy")}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {Array.from({ length: 24 }, (_, i) => (
                      <div key={i} className="grid grid-cols-12 gap-2">
                        <div className="col-span-1 text-right text-sm text-muted-foreground">
                          {i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`}
                        </div>
                        <div className="col-span-11 border-l pl-2 min-h-[40px]">
                          {getEventsForDate(selectedDate)
                            .filter((event) => {
                              const [hour] = event.time.split(":");
                              return parseInt(hour) === i;
                            })
                            .map((event) => (
                              <div
                                key={event.id}
                                className="bg-primary/10 p-2 rounded text-sm mb-1"
                              >
                                {event.time} - {event.title}
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-4">
                {Object.entries(events).map(([date, dayEvents]) => (
                  <div key={date} className="space-y-2">
                    <h4 className="text-sm font-medium">
                      {format(new Date(date), "EEEE, MMMM d")}
                    </h4>
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center justify-between p-2 rounded-lg border"
                      >
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {event.time}
                          </p>
                        </div>
                        <Badge variant={getBadgeVariant(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}