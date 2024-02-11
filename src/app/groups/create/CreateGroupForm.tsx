import { FormHandler } from "@/app/lib/types";
import LabeledInput from "@/components/groups/createreport/LabeledInput";

export default function CreateGroupForm({
  onSubmit,
}: {
  onSubmit: FormHandler;
}) {
  return (
    <form action={onSubmit} className="w-full flex flex-col gap-10 ">
      <LabeledInput
        label="What is the group name?"
        name="groupName"
        className="w-1/2"
      ></LabeledInput>
      <button
        type="submit"
        className="w-[20%] min-w-96 bg-rose-900 rounded-lg h-12 text-rose-100 text-xl hover:bg-rose-950"
      >
        Create Group!
      </button>
    </form>
  );
}
