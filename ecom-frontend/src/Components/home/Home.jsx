import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../Shared/ProductCard";
import Loader from "../Shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";

const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log("Auth State:", { isAuthenticated, user });
        
        if (isAuthenticated && user && !document.getElementById("kommunicateScript")) {
            console.log("Initializing Kommunicate for user:", user.name);
            
            // Initialize Kommunicate with user data
            window.kommunicate = window.kommunicate || {};
            window.kommunicate._globals = {
                appId: "37bfff631e7613c35867992ce2dc18b8c",
                popupWidget: true,
                automaticChatOpenOnNavigation: true,
                isAnonymousChat: false,
                userId: user.id || user._id, // Handle both id and _id
                userName: user.name || user.username, // Handle different name fields
                userEmail: user.email,
                metadata: {
                    userType: user.role || 'user',
                    lastLogin: new Date().toISOString()
                }
            };

            const s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.id = "kommunicateScript";
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

            s.onload = function() {
                console.log("Kommunicate script loaded");
                if (window.Kommunicate) {
                    window.Kommunicate.updateUser({
                        userId: user.id || user._id,
                        userName: user.name || user.username,
                        userEmail: user.email,
                        metadata: {
                            userType: user.role || 'user',
                            lastLogin: new Date().toISOString()
                        }
                    });
                    console.log("Kommunicate user updated");
                }
            };

            s.onerror = function(error) {
                console.error("Error loading Kommunicate script:", error);
            };

            document.head.appendChild(s);
        }

        return () => {
            const script = document.getElementById("kommunicateScript");
            if (script) {
                script.remove();
                window.kommunicate = undefined;
                console.log("Kommunicate script removed");
            }
        };
    }, [isAuthenticated, user]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4">
            <div className="py-6">
                <HeroBanner />
            </div>

            <div className="py-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-slate-800 text-4xl font-bold">Products</h1>
                    <span className="text-slate-700">
                        Discover our handpicked selection of top-rated items just for you!
                    </span>
                </div>

                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                        <span className="text-slate-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                        {products &&
                            products.slice(0, 3).map((item, i) => (
                                <ProductCard key={i} {...item} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
