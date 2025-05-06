import { cn } from "@/lib/utils";

interface ProductGrowthListItemProps {
  title: string;
  titleNum: number;
  subtitle: string;
  subtitleNum: number;
}

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ProductGrowthListItem = ({ title, titleNum, subtitle, subtitleNum }: ProductGrowthListItemProps) => {
  return (
    <div className="font-medium text-sm">
      <div className="flex justify-between">
        <div>
          {title}
        </div>
        <div>
          {titleNum}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-muted">
          {subtitle}
        </div>
        <div className={cn("", getRandomInt(0, 10) % 2 === 0 ? 'text-growth_up' : 'text-growth_down')}>
          {subtitleNum}
        </div>
      </div>
    </div>
  )
}

export default ProductGrowthListItem