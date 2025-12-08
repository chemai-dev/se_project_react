import "./Main.css";
import WeatherCard from "../App/WeatherCard/WeatherCard";
import ItemCard from "../App/ItemCard/ItemCard";

function Main({
  weatherData,
  clothingItems,
  setClothingItems,
  handleCardClick,
}) {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp?.F ? `${weatherData.temp.F}° F` : "N/A"} /
          You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => item.weather === weatherData.type)
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
