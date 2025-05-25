import { InfiniteMovingCards } from "../components/InfiniteMovingCards";

const certificates = Array.from({ length: 31 }, (_, i) => ({
  id: i,
  image: `/certificates/image${i}.png`,
  caption: `Certificate ${i + 1}`,
}));

export default function Certificates() {
  return (
    <div className="bg-black py-10">
      <h2 className="text-center text-2xl font-semibold text-white mb-6">
        My Certificates
      </h2>
      <InfiniteMovingCards
        items={certificates}
        speed="normal"
        direction="left"
      />
    </div>
  );
}
