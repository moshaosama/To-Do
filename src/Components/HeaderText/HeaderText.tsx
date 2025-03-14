import { IoCheckmarkDone } from "react-icons/io5";

const HeaderText = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="bg-success px-1 d-flex align-items-center justify-content-center rounded">
        <IoCheckmarkDone className="text-light h3 my-1" />
      </div>
      <h2 className="text-success" style={{ fontWeight: "bold" }}>
        Quick
      </h2>
      <h2 style={{ fontWeight: "bold" }}>Task</h2>
    </div>
  );
};

export default HeaderText;
