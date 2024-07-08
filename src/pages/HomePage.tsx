import DiscoCard from "../components/DiscoCard";
import { useDisco } from "../hooks/useDisco";
import "../font/font.css";
import logo from "../img/logo/logo.png";

const HomePage = () => {
    const { discos, isLoading } = useDisco();
    if (isLoading) {
        return <p>loading data...</p>;
    }

    return (
        <>
            <header className="h-screen">
                <nav className="bg-nav">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                        <img
                            src={logo}
                            className="h-12 pr-4"
                            alt="Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            DISCOWAVE
                        </span>
                        <div
                            className="hidden w-full md:block md:w-auto"
                            id="navbar-default"
                        ></div>
                    </div>
                </nav>

                <div className="head">
                    <div className="contenitore flex justify-center  flex-col">
                        <h1 className="bg-gradient italic text-4xl md:text-[80px] md:p-10">
                            Book Your party
                        </h1>
                        <h3 className="bg-gradient italic text-4xl md:text-[80px] md:p-10">
                            change your night
                        </h3>
                    </div>
                </div>
            </header>

            <section id="cards">
                <h2 className="flex justify-center text-white text-4xl p-5 title">
                    Our Events
                </h2>

                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center w-full">
                    {discos.map((disco, index) => {
                        return (
                                <DiscoCard
                                    key={index}
                                    disco={disco}
                                    detailPath={`/detail/${disco.id}`}
                                />
                        );
                    })}
                </div>

            </section>
        </>
    );
};

export default HomePage;
