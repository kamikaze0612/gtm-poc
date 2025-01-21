import { Button } from "@/components/ui/button";
import { sendGTMEvent } from "@next/third-parties/google";

export const EventButton: React.FC = () => {
  return (
    <Button
      onClick={() => sendGTMEvent({ event: "buttonClicked", value: "xyz" })}
    >
      Click me
    </Button>
  );
};
