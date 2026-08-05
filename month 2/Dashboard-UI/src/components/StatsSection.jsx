import StatCard from "./StatCard";

function StatsSection({ stats }) {
  return (
    <section className="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </section>
  )
}

export default StatsSection;