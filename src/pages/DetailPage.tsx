import Modal from "../components/Modal";
import { useId } from "../hooks/useId";
import logo from "../img/logo/logo.png";
import abito from "../img/icons/dress-icon.png";
import drink from "../img/icons/drink-icon.png";

const DetailPage = () => {
    
    const { disco, isLoading } = useId();
    if (isLoading) {
        return <p>loading data...</p>;
    }

    return (
        <>
            <nav className="bg-nav">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <img src={logo} className="h-12 pr-4" alt="" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        DISCOWAVE
                    </span>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    ></div>
                </div>
            </nav>
            <header
                style={{ backgroundImage: `url(${disco?.coverImage})` }}
                className="bg-cover bg-no-repeat h-full"
            >
                <h2 className="text-violet-950 bg-white/20 font-bold flex justify-start items-end text-3xl shadow-xl p-3 h-72 md:h-screen md:text-7xl">
                    {disco?.name}
                </h2>
            </header>
            <div className="text-white bg-violet-950 m-3 p-2 rounded">
                <h2 className="text-2xl p-2">About party:</h2>
                <p className="p-3">{disco?.description.long}</p>
            </div>

            <div className="text-white flex flex-col">
                <div className="bg-violet-950 m-3 p-2 rounded flex">
                    <img src={abito} alt="" className="w-1/12 m-1 md:w-min" />
                    <h3 className="py-2 text-2xl w-10/12 flex justify-start items-center mx-1">
                        Dresscode:
                        <span className="font-bold text-2xl mx-1">
                            {disco?.dresscode}
                        </span>
                    </h3>
                </div>
                <div className="bg-violet-950 m-3 p-2 rounded flex justify-start items-center flex-wrap">
                    <img src={drink} alt="" className="w-1/12 md:w-min" />
                    <h3 className="px-3 py-2 text-2xl">
                        Drinks included:
                        <span className="justify-beetwen">
                            {disco?.includedDrinks.map((drink) => {
                                return <li>{drink}</li>;
                            })}
                        </span>
                    </h3>
                </div>
                <div className="bg-violet-950 m-3 p-2 rounded flex justify-start items-center">
                    <h3 className="px-3 py-2 text-2xl">
                        Dishes included:
                        <ul className="text-base px-3 py-2">
                            {disco?.includedDishes ? (
                                disco.includedDishes.map((dish) => {
                                    return (
                                        <div className="p-5">
                                            <h3 className="text-xl text-green-600 font-bold">
                                                {dish.name}
                                            </h3>
                                            <p>
                                                <span className="font-bold">
                                                    What is?
                                                </span>{" "}
                                                {dish.description}
                                            </p>
                                            <p>
                                                <span className="font-bold">
                                                    Allergens:
                                                </span>{" "}
                                                {dish.allergens.length == 0
                                                    ? "none"
                                                    : dish.allergens.map(
                                                          (allergens) => {
                                                              return allergens;
                                                          }
                                                      )}
                                            </p>
                                        </div>
                                    );
                                })
                            ) : (
                                <span className="text-red-600 font-bold text-xl">
                                    Dishes not included
                                </span>
                            )}
                        </ul>
                    </h3>
                </div>
            </div>
            <div className="bg-violet-950 m-3 p-2 rounded">
                <h3 className="px-3 py-2 text-white text-2xl flex justify-center">
                    Make your reservation here
                </h3>
                <div className="form bg-violet-700 flex justify-center items-center rounded text-white p-5 md:justify-start">
                    <form action="" className="flex flex-col md:w-9/12">
                        <label htmlFor="" className="font-bold md:text-2xl">
                            Name and surname:
                        </label>
                        <input type="text" className="bg-violet-500 rounded md:p-2" />
                        <label htmlFor="" className="font-bold md:text-2xl">
                            Email:
                        </label>
                        <input type="email" className="bg-violet-500 rounded md:p-2" />
                    </form>
                </div>
                <h4 className="px-3 py-2 text-base text-white text-xl flex justify-center font-bold">
                    Choose time:
                </h4>
                <div className="px-3 py-2 flex flex-wrap justify-center md:flex-row">
                    {disco?.ora.map((slot) => {
                        return <Modal slot={slot} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default DetailPage;
