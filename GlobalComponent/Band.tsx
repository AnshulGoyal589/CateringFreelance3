import { Metadata } from "next";
import metadata from "@/app/Metadata.json";

export const cardmetadata: Metadata = metadata.home;

interface BandStatItem {
  end: number;
  label: string;
}

const bandStats: BandStatItem[] = [
  { end: 20, label: 'SKILLED CHEFS' },
  { end: 120, label: 'HAPPY CLIENTS' },
  { end: 15, label: 'YEARS EXPERIENCE' },
  { end: 230, label: 'FINISHED PROJECTS' }
];


const Band = () => {

  return (
    <section 
      className='w-full bg-[#ecece2]'
      aria-label="Company Statistics"
    >
      <div 
        className="flex flex-wrap justify-between gap-8 p-8 w-[100vw] box-border"
        itemScope 
        itemType="https://schema.org/Organization"
      >
        {bandStats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center p-4 flex-1 min-w-[200px] flex-shrink-0"
            itemProp="aggregateRating"
          >
            <span 
              className="text-3xl font-semibold text-[#f1a986]"
              aria-label={`${stat.end}+ ${stat.label}`}
            >
              {stat.end}+
            </span>
            <br />
            <span 
              className="text-lg text-gray-500"
              itemProp="description"
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Band;
