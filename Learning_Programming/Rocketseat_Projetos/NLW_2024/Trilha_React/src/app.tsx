import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="flex flex-col max-w-[1216px] mx-auto py-8 gap-5">
        <Header />
        <AttendeeList />
    </div>
  );
}
