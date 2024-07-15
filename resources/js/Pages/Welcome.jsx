import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo.png";
import gold from "@/assets/gold.jpg";
import arangkelapa from "@/assets/arangkelapa.jpg";
import arangkayu from "@/assets/arangkayu.jpg";
import arangbbq from "@/assets/arangbbq.jpg";

const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // const handleImageError = () => {
    //     document
    //         .getElementById("screenshot-container")
    //         ?.classList.add("!hidden");
    //     document.getElementById("docs-card")?.classList.add("!row-span-1");
    //     document
    //         .getElementById("docs-card-content")
    //         ?.classList.add("!flex-row");
    //     document.getElementById("background")?.classList.add("!hidden");
    // };

    return (
        <>
            <Head title="Gold Dashboard" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="min-h-screen bg-white max-w-7xl scroll-smooth">
                    <div className="relative w-full max-w-2xl lg:max-w-7xl">
                        <header className="bg-white px-6">
                            <nav
                                aria-label="Global"
                                className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
                            >
                                <div className="flex lg:flex-1">
                                    <img
                                        alt=""
                                        src={logo}
                                        className="h-[70px] w-auto"
                                    />
                                </div>
                                <div className="flex lg:hidden">
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(true)}
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    >
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        <Bars3Icon
                                            aria-hidden="true"
                                            className="h-6 w-6"
                                        />
                                    </button>
                                </div>
                                <div className="hidden">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                    <a
                                        href="#"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Log in{" "}
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </nav>
                            <Dialog
                                open={mobileMenuOpen}
                                onClose={setMobileMenuOpen}
                                className="lg:hidden"
                            >
                                <div className="fixed inset-0 z-10" />
                                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                    <div className="flex items-center justify-between">
                                        <img
                                            src={logo}
                                            className="h-[70px] w-auto"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XMarkIcon
                                                aria-hidden="true"
                                                className="h-6 w-6"
                                            />
                                        </button>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6 hidden">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                            <div className="py-6">
                                                <Link
                                                    href={route("login")}
                                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    Log in
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </Dialog>
                        </header>

                        <main className="mt-6">
                            <div
                                id="home"
                                className="box-content max-w-full mb-8 lg:mb-16 lg:pl-20 py-10 lg:py-30"
                                style={{
                                    backgroundImage: `url(${gold})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <article className="text-wrap text-center lg:text-left">
                                    <h3
                                        className="text-white text-2xl lg:text-5xl font-lato font-semibold pb-8"
                                        id="companyTitle"
                                    >
                                        Five Key Indonesia
                                    </h3>
                                    <div className="lg:w-[700px]">
                                        <p
                                            className="text-white font-lato text-balance text-md lg:text-lg font-normal"
                                            id="companyDescription"
                                        >
                                            We are a supplier of briquettes and
                                            charcoal in Indonesia Through our
                                            dedicated production and quality
                                            control team who tirelessly work to
                                            provide the best quality briquettes
                                            and charcoal expected by our
                                            clients.
                                        </p>
                                    </div>
                                </article>
                                <div className="flex justify-center lg:justify-start mt-8">
                                    <a
                                        type="button"
                                        className="transition ease-in-out hover:-translate-y-1 hover:scale-100 rounded-full bg-green-600 px-4 py-2 lg:px-6 lg:py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                        href="https://api.whatsapp.com/send/?phone=6289529312100"
                                    >
                                        <p className="font-lato" id="order">
                                            Order Now
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <h3
                                className="text-black text-2xl text-center lg:text-5xl font-lato font-bold pb-8"
                                id="product"
                            >
                                Our Charcoal Products Collection
                            </h3>

                            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-3 gap-y-4 p-4 lg:p-16 mx-auto">
                                <div className="bg-white rounded-lg shadow-2xl mx-auto overflow-hidden hover:overflow-visible transform transition-transform duration-500 hover:-translate-y-4 lg:hover:-translate-y-12">
                                    <div className="relative">
                                        <img
                                            src={arangbbq}
                                            alt="arangbbq"
                                            className="h-96 w-[300px] object-cover mx-auto"
                                        />
                                        <div className="flex items-center w-48 left-0 right-0 absolute -bottom-4 bg-white border-2 border-black px-4 py-2 text-center mx-auto justify-center">
                                            <p
                                                className="text-black text-sm uppercase font-bold font-lato tracking-wider"
                                                id="charcoalBbqTitle"
                                            >
                                                CHARCOAL BBQ BRIQUETTES
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        className="text-black text-justify text-balance py-4 mx-auto w-48 lg:w-64"
                                        id="charcoalBbqText"
                                    >
                                        These charcoal briquettes are made from
                                        various materials such as sawdust and
                                        coconut shells
                                    </p>
                                </div>
                                <div className="bg-white text-black rounded-lg shadow-2xl mx-auto overflow-hidden hover:overflow-visible transform transition-transform duration-500 hover:-translate-y-4 lg:hover:-translate-y-12">
                                    <div className="relative">
                                        <img
                                            src={arangkayu}
                                            alt="arangkayu"
                                            className="h-96 w-[300px] object-cover mx-auto"
                                        />
                                        <div className="flex items-center w-48 left-0 right-0 absolute -bottom-4 bg-white border-2 border-black px-4 py-2 text-center mx-auto justify-center">
                                            <p
                                                className="text-sm uppercase font-bold font-lato tracking-wider"
                                                id="hardwoodTitle"
                                            >
                                                HARDWOOD CHARCOAL
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        className="text-justify text-balance py-4 mx-auto w-48 lg:w-64"
                                        id="hardwoodText"
                                    >
                                        Our wood charcoal is made from selected
                                        wood, ranging from halaban wood,
                                        mahogany wood, tamarind wood or can also
                                        be mixed with other hardwoods.
                                    </p>
                                </div>
                                <div className="bg-white text-black rounded-lg shadow-2xl mx-auto overflow-hidden hover:overflow-visible transform transition-transform duration-500 hover:-translate-y-4 lg:hover:-translate-y-12">
                                    <div className="relative">
                                        <img
                                            src={arangkelapa}
                                            alt="arangkelapa"
                                            className="h-96 w-[300px] object-cover mx-auto"
                                        />
                                        <div className="flex items-center w-48 left-0 right-0 absolute -bottom-4 bg-white border-2 border-black px-4 py-2 text-center mx-auto justify-center">
                                            <p
                                                className="text-sm uppercase font-bold font-lato tracking-wider"
                                                id="coconutTitle"
                                            >
                                                COCONUT SHELL CHARCOAL
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        className="text-justify text-balance py-4 mx-auto w-48 lg:w-64"
                                        id="coconutText"
                                    >
                                        Our coconut shell charcoal is a material
                                        that can be used for various types of
                                        needs.
                                    </p>
                                </div>
                            </div>
                        </main>

                        <div
                            id="contact"
                            className="box-content max-w-full mx-auto lg:mx-0 px-10 lg:pl-20 py-10 lg:py-30"
                            style={{
                                backgroundImage: `url(${gold})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <article
                                className="text-wrap text-center lg:text-left"
                                id="animatedContent"
                            >
                                <h3
                                    className="text-white text-2xl lg:text-5xl font-lato font-semibold lg:font-bold border-solid pb-8"
                                    id="intrested"
                                >
                                    Intrested ? Please Contact Us
                                </h3>
                                <form id="contact-form" method="post">
                                    <div className="bg-white rounded-lg shadow-2xl mb-10 py-4 px-10 lg:w-1/2">
                                        <div className="mb-4">
                                            <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                                                First Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>
                                        <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                                            Message
                                        </label>
                                        <div className="mb-4">
                                            <div className="mt-2">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    placeholder="Message"
                                                    className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="flex justify-center lg:justify-start mt-8">
                                            <button
                                                type="submit"
                                                className="w-full transition ease-in-out hover:-translate-y-1 hover:scale-100 rounded-sm bg-black px-4 py-2 lg:px-6 lg:py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                            >
                                                <p
                                                    className="font-lato"
                                                    id="sendMessage"
                                                >
                                                    Send Me Message
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </article>
                        </div>

                        <div className="fixed bottom-4 left-4 z-50">
                            <a
                                href="https://api.whatsapp.com/send/?phone=6289529312100"
                                target="_blank"
                                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-full shadow-lg transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#fff"
                                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                                    ></path>
                                    <path
                                        fill="#cfd8dc"
                                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                                    ></path>
                                    <path
                                        fill="#40c351"
                                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        fill-rule="evenodd"
                                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span
                                    className="hidden lg:contents contact-text"
                                    id="contactUs"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {isHovered ? "WhatsApp" : "Contact Us"}
                                </span>
                            </a>
                        </div>

                        {/* <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer> */}
                    </div>
                </div>
            </div>
        </>
    );
}