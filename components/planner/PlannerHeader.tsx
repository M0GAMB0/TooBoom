import { TabHeader } from "@/components/ui/TabHeader";

interface PlannerHeaderProps {
  title: string;
  onTitlePress: () => void;
}

export function PlannerHeader({ title, onTitlePress }: PlannerHeaderProps) {
  return (
    <TabHeader
      title={title}
      leftIcon="calendar-clear"
      showSearch
      onTitlePress={onTitlePress}
    />
  );
}
