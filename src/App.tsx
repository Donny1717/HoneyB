import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";

const BidsmithPage = lazy(() => import("./pages/BidsmithPage"));
const DoccutePage = lazy(() => import("./pages/DoccutePage"));

function AnimatePresenceWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/bidsmith" element={<BidsmithPage />} />
        <Route path="/doccute" element={<DoccutePage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="size-8 animate-spin rounded-full border-2 border-[hsl(152_65%_42%)] border-t-transparent" />
        </div>
      }
    >
      <AnimatePresenceWrapper />
    </Suspense>
  );
}

export default App;
