import { EventButton } from "./_components/event_button";

const HomePage: React.FC = () => {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center flex-col gap-y-8">
        <h2 className="text-4xl font-bold">Google Tag Manager</h2>
        <EventButton />
      </div>
      <div className="min-h-screen flex items-center justify-center flex-col gap-y-8">
        <h2 className="text-4xl font-bold">Google Tag Manager</h2>
        <EventButton />
      </div>
    </main>
  );
};
export default HomePage;
