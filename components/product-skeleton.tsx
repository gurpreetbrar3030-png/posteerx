export function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="h-80 animate-pulse rounded-xl bg-zinc-800" />
      ))}
    </div>
  );
}
