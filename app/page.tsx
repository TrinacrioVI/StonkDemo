import Header from "./components/Header";
import FollowBar from "./components/layout/FollowBar";
import Sidebar from "./components/layout/Sidebar";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";

export default function Home() {
  return (
    
    <>
    <div className="h-screen bg-black">
          <div className="container h-full mx-auto xl:px-30 max-w-6xl">
          <Header label="Stonks Home"/>
            <div className="grid grid-cols-4 h-full">
              <Sidebar/>
              <div className="col-span-3 lg:col-span-2 border-x-[3px] border-neutral-800">
              <RegisterModal />
              <LoginModal />
              </div>
              <FollowBar />
            </div> 
          </div> 
        </div>
    </>
  );
}
