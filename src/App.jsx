import "./App.css";
import data from "../data.json";
import ListingCard from "./components/ListingCard.jsx";

function App() {
  return (
    <div>
      <img className="banner-img" src="/images/bg-header-mobile.svg" alt="" />

      <div className="container card-container">
        {data.map((job) => (
          <ListingCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
