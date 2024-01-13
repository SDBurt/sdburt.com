import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureItemProps {
  title: string;
  description: string;
}

export default function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="w-full rounded-lg border border-transparent p-1 text-start hover:border-muted">
      <CardHeader className="w-full p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </div>
  );
}
