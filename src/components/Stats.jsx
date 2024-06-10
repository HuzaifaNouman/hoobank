import { stats } from "../data";

const Stats = () => {
  return (
    <div className="flex flex-wrap text-nowrap justify-evenly items-center py-5 mt-3 leading-9">
      {stats.map((stat) => {
        return (
          <div key={stat.id}>
            <span className="text-3xl max-md:text-2xl font-semibold text-white mr-4">
              {stat.count}
            </span>
            <span className="secondary-color text-2xl max-md:text-xl font-normal">
              {stat.content}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
