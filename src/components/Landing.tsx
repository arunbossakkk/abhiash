import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/website"); // <-- Make sure this is your main page route
    }, 1500); // 1.5 seconds for boom effect

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/wp/202347/stock-market-trend-minimal-trading-graph-flourishing-in-green-3d-render-isolated-on-white-for-data-analysis_9751367.jpg!w700wp')",
      }}
    >
      <div className="flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg animate-boom-in">
        <TrendingUp className="h-24 w-24 text-white mb-4" />
        <h1 className="text-5xl font-bold text-white tracking-wider">FinAX</h1>
      </div>
    </div>
  );
};

export default Landing;
