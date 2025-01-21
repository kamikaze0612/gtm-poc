import { EventButton } from "./_components/event_buttont";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-y-8">
      <h1 className="text-4xl font-bold">Google Tag Manager</h1>
      <EventButton />
    </div>
  );
};
export default HomePage;
