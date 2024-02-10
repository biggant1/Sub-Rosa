import SideBar from "@/components/shared/SideBar";

export default function Credits() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="credits"></SideBar>
      <div className="h-screen flex-grow grid place-content-center">
        <ul className="list-disc mb-24 text-2xl w-full pl-10">
          <li>
            Vectors and icons by{" "}
            <a
              href="https://www.svgrepo.com"
              style={{ color: "revert", textDecoration: "revert" }}
              target="_blank"
            >
              SVG Repo
            </a>
          </li>
          <li>
            <a
              href="https://sigpwny.com/"
              style={{ color: "revert", textDecoration: "revert" }}
            >
              SIGPwny
            </a>{" "}
            for giving some advice on the design and user interface.
          </li>
        </ul>
      </div>
    </main>
  );
}
