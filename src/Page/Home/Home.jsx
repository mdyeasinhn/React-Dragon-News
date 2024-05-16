import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews/>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
                <div >
                    <LeftSideNav/>
                </div>
                <div className="md:col-span-2 ">
                   {
                    news.map(aNews => <NewsCard
                    key={news._id}
                    news={aNews}
                    ></NewsCard>)
                   }
                </div>
                <div >
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;