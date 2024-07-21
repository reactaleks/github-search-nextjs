import SearchComponent from "@/components/SearchComponent";
import NavComponent from "@/components/NavComponent";
export default function Home() {
  return (
    <>
      <NavComponent/>
      <main className=" min-h-screen  ">
        <SearchComponent />
      </main>
    </>
  );
}
