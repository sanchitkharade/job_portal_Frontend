
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const Recomtalent = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-5 justify-between">
        {talents.map(
          (talent, index) => index < 4 && <TalentCard key={index} {...talent} />
        )}
      </div>
    </div>
  );
};
export default Recomtalent;
