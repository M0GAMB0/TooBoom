import { TabHeader } from "@/components/ui/TabHeader";
import { getCurrentFormattedDate } from "@/src/utils/date";

export default function HomeHeader() {
  const formattedDate = getCurrentFormattedDate();

  return (
    <TabHeader
      title="Hello, Saikumar 👋"
      subtitle={formattedDate}
    />
  );
}
