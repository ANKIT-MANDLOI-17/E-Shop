import React, { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false);
  // console.log("open ", open);

  const user = JSON.parse(localStorage.getItem("user"));

  // console.log(user.user.email)

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-white sticky top-0 z-40">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden "
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl "
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>

                  {user ? (
                    <div className="flow-root">
                      <Link
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Order
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user?.user?.email === "ankitmandloi92425@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={"/signup"}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Signup
                      </Link>
                    </div>
                  )}
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt="Dan_Abromov"
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹300
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden "
                onClick={() => setOpen((pre) => !pre)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      E-Shop
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  )}

                  {user?.user?.email === "ankitmandloi92425@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Dan_Abromov"
                    />
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
