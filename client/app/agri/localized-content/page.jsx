"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Dummy data for languages and regions
const languages = [
  { id: 'en', name: 'English', flag: '🇬🇧' },
  { id: 'hi', name: 'हिन्दी (Hindi)', flag: '🇮🇳' },
  { id: 'bn', name: 'বাংলা (Bengali)', flag: '🇧🇩' },
  { id: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
  { id: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
  { id: 'mr', name: 'मराठी (Marathi)', flag: '🇮🇳' },
  { id: 'ur', name: 'اردو (Urdu)', flag: '🇵🇰' },
];

const regions = [
  { id: 'north', name: 'North India', image: 'https://images.unsplash.com/photo-1566837497312-7be7830ae9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 'south', name: 'South India', image: 'https://images.unsplash.com/photo-1582650940929-e4ddb6d9189c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 'east', name: 'East India', image: 'https://images.unsplash.com/photo-1535246785412-868855965dd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 'west', name: 'West India', image: 'https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 'central', name: 'Central India', image: 'https://images.unsplash.com/photo-1520358889598-9f0a8719f1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 'northeast', name: 'Northeast India', image: 'https://images.unsplash.com/photo-1544932199-59d604aaebe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
];

// Dummy content for different languages/regions
const localizedArticles = {
  en: [
    {
      id: 1,
      title: "Efficient Rice Cultivation Techniques",
      summary: "Learn about modern methods for increasing rice yield while conserving resources.",
      image: "https://images.unsplash.com/photo-1536345171317-9b35b4f3af51?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      region: "east",
      tags: ["rice", "cultivation", "water management"],
      readTime: "7 min"
    },
    {
      id: 2,
      title: "Organic Cotton Farming Practices",
      summary: "Discover sustainable approaches to cotton cultivation without synthetic chemicals.",
      image: "https://images.unsplash.com/photo-1530968831181-0650e4317944?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      region: "west",
      tags: ["cotton", "organic", "pest management"],
      readTime: "5 min"
    },
    {
      id: 3,
      title: "Traditional Spice Cultivation Methods",
      summary: "Explore time-tested techniques for growing high-quality spices in South India.",
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      region: "south",
      tags: ["spices", "traditional", "cardamom"],
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Wheat Farming in Arid Conditions",
      summary: "Techniques for successful wheat cultivation in low-rainfall regions of North India.",
      image: "https://images.unsplash.com/photo-1631820351127-1665d711d52e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      region: "north",
      tags: ["wheat", "arid", "irrigation"],
      readTime: "8 min"
    },
  ],
  hi: [
    {
      id: 1,
      title: "चावल की खेती की कुशल तकनीकें",
      summary: "संसाधनों का संरक्षण करते हुए चावल की उपज बढ़ाने के आधुनिक तरीकों के बारे में जानें।",
      image: "https://images.unsplash.com/photo-1536345171317-9b35b4f3af51?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      region: "east",
      tags: ["चावल", "खेती", "जल प्रबंधन"],
      readTime: "7 मिनट"
    },
    {
      id: 2,
      title: "जैविक कपास की खेती के तरीके",
      summary: "सिंथेटिक रसायनों के बिना कपास की खेती के लिए टिकाऊ दृष्टिकोण जानें।",
      image: "https://images.unsplash.com/photo-1530968831181-0650e4317944?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      region: "west",
      tags: ["कपास", "जैविक", "कीट प्रबंधन"],
      readTime: "5 मिनट"
    }
  ]
};

const LocalizedContentPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredArticles = localizedArticles[selectedLanguage] ? 
    localizedArticles[selectedLanguage].filter(article => 
      (selectedRegion === 'all' || article.region === selectedRegion) &&
      (searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    ) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-300">
          Localized Farming Knowledge
        </h1>
        
        {!activeArticle ? (
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Language
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {languages.map(language => (
                      <button
                        key={language.id}
                        onClick={() => setSelectedLanguage(language.id)}
                        className={`flex items-center p-3 border rounded-lg ${
                          selectedLanguage === language.id
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <span className="text-2xl mr-2">{language.flag}</span>
                        <span className="text-gray-800 dark:text-gray-200">
                          {language.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Filter by Region
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedRegion('all')}
                      className={`p-3 border rounded-lg ${
                        selectedRegion === 'all'
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <span className="text-gray-800 dark:text-gray-200">All Regions</span>
                    </button>
                    
                    {regions.map(region => (
                      <button
                        key={region.id}
                        onClick={() => setSelectedRegion(region.id)}
                        className={`p-3 border rounded-lg ${
                          selectedRegion === region.id
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <span className="text-gray-800 dark:text-gray-200">
                          {region.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search Content
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by keywords, crops, or techniques..."
                    className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  />
                  <div className="absolute left-3 top-3 text-gray-400">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map(article => (
                  <div 
                    key={article.id}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{article.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{article.summary}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          <i className="far fa-clock mr-1"></i> {article.readTime}
                        </span>
                        <button
                          onClick={() => setActiveArticle(article)}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">No Content Found</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  {(selectedLanguage !== 'en' && !localizedArticles[selectedLanguage]) ? 
                    `Content in ${languages.find(l => l.id === selectedLanguage)?.name} is coming soon.` :
                    "We couldn't find any content matching your current filters. Try changing your search terms or filters."
                  }
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveArticle(null)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-4 flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Articles
              </button>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{activeArticle.title}</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {activeArticle.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="prose max-w-none dark:prose-invert prose-lg">
                <p>{activeArticle.summary}</p>
                
                <h3>Introduction</h3>
                <p>
                  {selectedLanguage === 'en' ?
                    "Agriculture is an integral part of culture and economy in this region. This article explores traditional and modern approaches to cultivation that are specific to local conditions." :
                    "इस क्षेत्र में कृषि संस्कृति और अर्थव्यवस्था का एक अभिन्न अंग है। यह लेख स्थानीय परिस्थितियों के लिए विशिष्ट खेती के पारंपरिक और आधुनिक दृष्टिकोणों का पता लगाता है।"
                  }
                </p>
                
                <h3>Regional Context</h3>
                <p>
                  {selectedLanguage === 'en' ?
                    "The agricultural practices in this region have been shaped by its unique climate, soil conditions, and cultural heritage. Farmers have developed specialized techniques over generations to maximize productivity while respecting the local ecosystem." :
                    "इस क्षेत्र में कृषि प्रथाओं को इसकी अद्वितीय जलवायु, मिट्टी की स्थिति और सांस्कृतिक विरासत द्वारा आकार दिया गया है। किसानों ने स्थानीय पारिस्थितिकी तंत्र का सम्मान करते हुए उत्पादकता को अधिकतम करने के लिए पीढ़ियों में विशेष तकनीकों को विकसित किया है।"
                  }
                </p>
                
                <h3>Key Techniques</h3>
                <ul>
                  {selectedLanguage === 'en' ? (
                    <>
                      <li>Water management strategies specific to local rainfall patterns</li>
                      <li>Soil preparation methods that enhance natural fertility</li>
                      <li>Pest control using locally available natural solutions</li>
                      <li>Crop selection optimized for regional climate conditions</li>
                    </>
                  ) : (
                    <>
                      <li>स्थानीय वर्षा पैटर्न के लिए विशिष्ट जल प्रबंधन रणनीतियां</li>
                      <li>मिट्टी की तैयारी के तरीके जो प्राकृतिक उर्वरता को बढ़ाते हैं</li>
                      <li>स्थानीय रूप से उपलब्ध प्राकृतिक समाधानों का उपयोग करके कीट नियंत्रण</li>
                      <li>क्षेत्रीय जलवायु परिस्थितियों के लिए अनुकूलित फसल चयन</li>
                    </>
                  )}
                </ul>
                
                <h3>Cultural Significance</h3>
                <p>
                  {selectedLanguage === 'en' ?
                    "Beyond mere agricultural practices, these farming methods are deeply intertwined with local festivals, traditions, and community structures. Many cultural celebrations coincide with key agricultural milestones such as planting and harvest seasons." :
                    "केवल कृषि प्रथाओं से परे, ये खेती के तरीके स्थानीय त्योहारों, परंपराओं और सामुदायिक संरचनाओं के साथ गहराई से जुड़े हुए हैं। कई सांस्कृतिक उत्सव रोपण और कटाई के मौसम जैसे प्रमुख कृषि मील के पत्थर के साथ मेल खाते हैं।"
                  }
                </p>
                
                <h3>Modern Adaptations</h3>
                <p>
                  {selectedLanguage === 'en' ?
                    "While respecting traditional knowledge, many farmers in the region are now integrating modern scientific approaches to increase yields and sustainability. This balanced approach helps preserve cultural heritage while ensuring economic viability." :
                    "पारंपरिक ज्ञान का सम्मान करते हुए, क्षेत्र के कई किसान अब उपज और स्थिरता बढ़ाने के लिए आधुनिक वैज्ञानिक दृष्टिकोणों को एकीकृत कर रहे हैं। यह संतुलित दृष्टिकोण आर्थिक व्यवहार्यता सुनिश्चित करते हुए सांस्कृतिक विरासत को संरक्षित करने में मदद करता है।"
                  }
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Local Expert Insights
                </h4>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center text-xl mr-4">
                    👨‍🌾
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-gray-200 italic">
                      {selectedLanguage === 'en' ?
                        "\"These methods have been in my family for generations. The key is understanding how the land breathes and responds to different treatments. Our ancestors knew this, and science is now confirming their wisdom.\"" :
                        "\"ये तरीके मेरे परिवार में पीढ़ियों से चले आ रहे हैं। मुख्य बात यह है कि भूमि कैसे सांस लेती है और विभिन्न उपचारों पर कैसे प्रतिक्रिया देती है, यह समझना है। हमारे पूर्वज यह जानते थे, और विज्ञान अब उनकी बुद्धि की पुष्टि कर रहा है।\""
                      }
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {selectedLanguage === 'en' ?
                        "- Rajesh Kumar, Farmer with 40 years of experience" :
                        "- राजेश कुमार, 40 साल के अनुभव वाले किसान"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalizedContentPage;
