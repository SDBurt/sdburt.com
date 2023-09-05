import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureItemProps {
  title: string;
  description: string;
}

export default function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <Card className="border-transparent hover:border-muted w-full text-start">
      <CardHeader className="p-4 w-full">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
