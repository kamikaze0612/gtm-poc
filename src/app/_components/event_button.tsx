"use client";

import { Button } from "@/components/ui/button";
// import { sendGTMEvent } from "@next/third-parties/google";

export const EventButton: React.FC = () => {
  return (
    <Button
      // onClick={() => sendGTMEvent({ event: "buttonClicked", value: "xyz" })}
      size="lg"
      id="event-button"
      className="text-xl font-semibold event-button"
    >
      Click me
    </Button>
  );
};
