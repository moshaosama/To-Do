import { memo } from "react";

type BoxInputProps = {
  Label: string;
  Type: string;
  placeHolder: string;
};

const BoxInput = memo(({ Label, Type, placeHolder }: BoxInputProps) => {
  return (
    <p className="d-flex flex-column gap-1 my-4">
      <label htmlFor="" style={{ fontWeight: "bold" }}>
        {Label}
      </label>
      <input
        type={Type}
        className="border rounded p-2"
        placeholder={placeHolder}
      />
    </p>
  );
});

export default BoxInput;
