const SkillCard = ({ skill }) => {
  const { name, icon, progress } = skill || {};
  return (
    <div>
      <div className="border px-6 py-2 border-grayText flex w-fit items-center gap-4">
        <img src={icon} alt={name} />
        <h1 className="text-grayText text-2xl">{name}</h1>
      </div>
      <div className="flex border border-grayText p-2 items-center text-white gap-4 justify-center">
        <progress
          className="progress text-grayText bg-black w-56"
          value={progress}
          max="100"
        />
        <h1>{progress}%</h1>
      </div>
    </div>
  );
};

export default SkillCard;
