import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import Card from '@/components/project/Card';

export default function Home() {
  return (
    <div className="bg-black w-full  sm:pt-36 h-screen">
      <AnimatedGridPattern color="gray" />
      <Card />
    </div>
  );
}
