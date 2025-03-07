import { getSlidesData } from "@/app/utils/getSlidesData";
import CardComponent from "@/GlobalComponent/CardComponent";

export default async function CardWrapper() {
  const slidesData = await getSlidesData();
  return <CardComponent slidesData={slidesData} />;
}
