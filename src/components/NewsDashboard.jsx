import React, { useEffect, useState } from "react";

const API_KEY = '63dee35ff9de4f729da894d08ac2a06a'; // Replace with your actual API key

const NewsDashboard = () => {
  const [entertainmentHeadline, setEntertainmentHeadline] = useState({});
  const [sportsHeadline, setSportsHeadline] = useState({});
  const [businessArticles, setBusinessArticles] = useState([]);
  const [filteredSections, setFilteredSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Entertainment Headline
        const entertainmentResponse = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=${API_KEY}`);
        const entertainmentData = await entertainmentResponse.json();
        if (entertainmentData.articles && entertainmentData.articles.length > 0) {
          setEntertainmentHeadline(entertainmentData.articles[0]); // Set the first entertainment article as the headline
        }

        // Fetch Sports Headline
        const sportsResponse = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${API_KEY}`);
        const sportsData = await sportsResponse.json();
        if (sportsData.articles && sportsData.articles.length > 0) {
          setSportsHeadline(sportsData.articles[0]); // Set the first sports article as the headline
        }

        // Fetch Business Articles (limit to 3)
        const businessResponse = await fetch(`https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=${API_KEY}`);
        const businessData = await businessResponse.json();
        if (businessData.articles) {
          setBusinessArticles(businessData.articles.slice(0, 3)); // Limit to 3 articles
        }

        // Set filtered sections
        setFilteredSections([
          { title: "Business News", articles: businessData.articles.slice(0, 3) },
          { title: "Entertainment News", articles: [entertainmentData.articles[0]] },
          { title: "Sports News", articles: [sportsData.articles[0]] },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-28">
      {/* Explore Channel Section */}
      <section className="mb-8 w-full">
        <h2 className="text-2xl font-bold mb-4">Explore Channel</h2>
        <div className="bg-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-bold">{entertainmentHeadline.title}</h3>
          <p className="text-gray-600">{entertainmentHeadline.description}</p>
          <img
            src={entertainmentHeadline.urlToImage}
            alt={entertainmentHeadline.title}
            className="w-full h-10 object-cover rounded-md mt-2"
          />
        </div>
      </section>

      {/* Today's Headline and Business News Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Today's Headline Section */}
        <section className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Sports Headline</h2>
          <div className="flex items-center">
            <img
              src={sportsHeadline.urlToImage}
              alt={sportsHeadline.title}
              className="w-1/2 h-32 object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="font-bold text-lg">{sportsHeadline.title}</h3>
              <p className="text-gray-600 text-sm">{sportsHeadline.description}</p>
              <span className="text-xs text-gray-500">
                {sportsHeadline.publishedAt}
              </span>
            </div>
          </div>
        </section>

        {/* Business News Section */}
        <section className="p-4">
          <h2 className="text-2xl font-bold mb-4">Business News</h2>
          {filteredSections.map((section, index) => (
            <div key={index} className="mb-4">
              {section.title === "Business News" && (
                <div className="grid grid-cols-1 gap-4">
                  {section.articles.map((article, idx) => (
                    <div key={idx} className="flex flex-row gap-2 p-2">
                      <div>
                        <h3 className="font-bold text-lg">{article.title}</h3>
                        <p className="text-gray-600 text-sm">{article.description}</p>
                        <span className="text-xs text-gray-500">
                          {article.publishedAt}
                        </span>
                      </div>
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-1/4 h-10 object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {/* Video and Education Insights Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Video Section */}
        <section className="w-full p-4">
          <h2 className="text-2xl font-bold mb-4">Video</h2>
          <div className="h-32 bg-gray-300 rounded-md">Video Content</div>
        </section>

        {/* Education Insights Section */}
        <section className="p-4">
          <h2 className="text-2xl font-bold mb-4">Today's Headline</h2>
          <div className="flex items-center">
            <img
              src={sportsHeadline.urlToImage}
              alt={sportsHeadline.title}
              className="w-1/4 h-32 object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="font-bold text-lg">{sportsHeadline.title}</h3>
              <p className="text-gray-600 text-sm">{sportsHeadline.description}</p>
              <span className="text-xs text-gray-500">
                {sportsHeadline.publishedAt}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsDashboard;
