"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Dummy data for sustainable farming techniques
const categories = [
  { 
    id: 'soil', 
    name: 'Soil Health', 
    icon: '🌱',
    description: 'Techniques for maintaining and improving soil fertility and structure.'
  },
  { 
    id: 'water', 
    name: 'Water Management', 
    icon: '💧',
    description: 'Methods for efficient water use and conservation in agriculture.'
  },
  { 
    id: 'organic', 
    name: 'Organic Farming', 
    icon: '🍃',
    description: 'Practices for farming without synthetic chemicals and pesticides.'
  },
  { 
    id: 'pest', 
    name: 'Natural Pest Control', 
    icon: '🐞',
    description: 'Eco-friendly approaches to manage pests and diseases.'
  },
  { 
    id: 'biodiversity', 
    name: 'Biodiversity', 
    icon: '🦋',
    description: 'Strategies to enhance ecosystem diversity on farms.'
  },
  { 
    id: 'climate', 
    name: 'Climate Resilience', 
    icon: '☁️',
    description: 'Techniques to adapt farming to changing climate conditions.'
  },
];

const techniques = [
  {
    id: 1,
    title: 'Cover Cropping',
    description: 'Planting specific crops to cover soil rather than for harvest, protecting and enhancing soil quality.',
    category: 'soil',
    difficulty: 'beginner',
    timeToImplement: '1-3 months',
    costLevel: 'low',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Prevents soil erosion',
      'Improves soil structure',
      'Suppresses weeds',
      'Increases organic matter',
      'Enhances biodiversity'
    ],
    steps: [
      'Select appropriate cover crop species based on your goals and season',
      'Prepare soil and plant seeds at the recommended rate',
      'Allow cover crop to grow until shortly before planting the main crop',
      'Terminate cover crop by rolling, mowing, or light tillage',
      'Plant main crop into residue or wait briefly for decomposition'
    ]
  },
  {
    id: 2,
    title: 'Rainwater Harvesting',
    description: 'Collecting and storing rainwater for agricultural use during dry periods.',
    category: 'water',
    difficulty: 'intermediate',
    timeToImplement: '1-2 months',
    costLevel: 'medium',
    image: 'https://images.unsplash.com/photo-1559589689-577aabd1db4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Reduces dependence on groundwater',
      'Decreases water runoff and erosion',
      'Provides water during dry periods',
      'Cost-effective long-term solution',
      'Can improve crop yields in water-limited areas'
    ],
    steps: [
      'Assess rainfall patterns and your water needs',
      'Design appropriate collection system (roof, land, or pond based)',
      'Install gutters, pipes, and storage tanks or construct ponds',
      'Add filtration system if needed',
      'Connect to irrigation system or create a distribution plan'
    ]
  },
  {
    id: 3,
    title: 'Composting',
    description: 'Converting organic waste into nutrient-rich soil amendment through decomposition.',
    category: 'organic',
    difficulty: 'beginner',
    timeToImplement: 'Ongoing',
    costLevel: 'low',
    image: 'https://images.unsplash.com/photo-1592419448683-ead64faf6f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Recycles farm and kitchen waste',
      'Enriches soil with nutrients and beneficial microorganisms',
      'Improves soil structure and water retention',
      'Reduces need for chemical fertilizers',
      'Decreases methane emissions from landfills'
    ],
    steps: [
      'Choose a suitable location and composting method',
      'Collect and mix "green" (nitrogen-rich) and "brown" (carbon-rich) materials',
      'Maintain proper moisture and aeration',
      'Turn pile regularly to speed decomposition',
      'Harvest finished compost and apply to fields or gardens'
    ]
  },
  {
    id: 4,
    title: 'Companion Planting',
    description: 'Growing different plants together for mutual benefit, including pest management.',
    category: 'pest',
    difficulty: 'beginner',
    timeToImplement: 'One growing season',
    costLevel: 'low',
    image: 'https://images.unsplash.com/photo-1557844352-761f2548b6d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Reduces pest problems naturally',
      'Can improve pollination and crop yields',
      'Maximizes space efficiency',
      'Enhances biodiversity',
      'Some companions improve flavor of neighboring plants'
    ],
    steps: [
      'Research compatible plant combinations for your crops',
      'Design garden layout incorporating companion relationships',
      'Plant companions at appropriate times and distances',
      'Monitor plant interactions and pest populations',
      'Keep records of successful combinations for future seasons'
    ]
  },
  {
    id: 5,
    title: 'Agroforestry',
    description: 'Integrating trees and shrubs into crop and animal farming systems.',
    category: 'biodiversity',
    difficulty: 'advanced',
    timeToImplement: '3-5 years',
    costLevel: 'high',
    image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d05?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Creates multiple income streams',
      'Improves soil and water quality',
      'Provides habitat for wildlife',
      'Sequesters carbon',
      'Can reduce crop damage from extreme weather'
    ],
    steps: [
      'Analyze land conditions and select appropriate agroforestry system',
      'Choose complementary tree and crop species',
      'Develop planting plan with proper spacing and orientation',
      'Establish trees and implement management plan',
      'Monitor and adapt system as trees mature'
    ]
  },
  {
    id: 6,
    title: 'Drought-Resistant Crop Varieties',
    description: 'Using crop varieties bred or selected for successful growth with minimal water.',
    category: 'climate',
    difficulty: 'beginner',
    timeToImplement: 'One growing season',
    costLevel: 'medium',
    image: 'https://images.unsplash.com/photo-1602513586175-c461a72e01ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Maintains yields during water shortages',
      'Reduces irrigation needs',
      'Increases farm resilience to climate change',
      'Often requires fewer inputs',
      'Can be combined with traditional varieties for risk management'
    ],
    steps: [
      'Research varieties suitable for your region and conditions',
      'Source seeds from reputable suppliers',
      'Prepare soil with focus on water retention',
      'Plant according to recommendations for drought-tolerant varieties',
      'Monitor performance and save seeds from best performers if possible'
    ]
  },
];

const SustainableFarmingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTechnique, setActiveTechnique] = useState(null);
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [costFilter, setCostFilter] = useState('all');

  const filteredTechniques = techniques.filter(technique => 
    (selectedCategory === 'all' || technique.category === selectedCategory) &&
    (difficultyFilter === 'all' || technique.difficulty === difficultyFilter) &&
    (costFilter === 'all' || technique.costLevel === costFilter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-300">
          Sustainable Farming Techniques
        </h1>
        
        {!activeTechnique ? (
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Explore Sustainable Practices
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`p-4 rounded-lg border transition-colors ${
                    selectedCategory === 'all'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                      : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="font-medium">All Categories</div>
                </button>
                
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-lg border transition-colors ${
                      selectedCategory === category.id
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                        : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="font-medium">{category.name}</div>
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Implementation Cost
                  </label>
                  <select
                    value={costFilter}
                    onChange={(e) => setCostFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    <option value="all">All Cost Levels</option>
                    <option value="low">Low Cost</option>
                    <option value="medium">Medium Cost</option>
                    <option value="high">High Cost</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setDifficultyFilter('all');
                      setCostFilter('all');
                    }}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
            
            {selectedCategory !== 'all' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">
                    {categories.find(c => c.id === selectedCategory)?.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                      {categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {categories.find(c => c.id === selectedCategory)?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTechniques.length > 0 ? (
                filteredTechniques.map(technique => (
                  <div 
                    key={technique.id}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={technique.image} 
                        alt={technique.title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                          ${technique.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                            technique.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                          {technique.difficulty.charAt(0).toUpperCase() + technique.difficulty.slice(1)}
                        </span>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                          ${technique.costLevel === 'low' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                            technique.costLevel === 'medium' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : 
                            'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'}`}>
                          {technique.costLevel.charAt(0).toUpperCase() + technique.costLevel.slice(1)} Cost
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{technique.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{technique.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-4">
                        <span className="flex items-center">
                          <i className="far fa-clock mr-1"></i> {technique.timeToImplement}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => setActiveTechnique(technique)}
                        className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">No Techniques Found</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    We couldn't find any farming techniques matching your current filters. Try changing your filters to see more results.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTechnique(null)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-4 flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Techniques
              </button>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{activeTechnique.title}</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                  ${activeTechnique.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                    activeTechnique.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {activeTechnique.difficulty.charAt(0).toUpperCase() + activeTechnique.difficulty.slice(1)}
                </span>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                  ${activeTechnique.costLevel === 'low' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                    activeTechnique.costLevel === 'medium' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : 
                    'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'}`}>
                  {activeTechnique.costLevel.charAt(0).toUpperCase() + activeTechnique.costLevel.slice(1)} Cost
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs rounded-full">
                  {categories.find(c => c.id === activeTechnique.category)?.name}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src={activeTechnique.image}
                  alt={activeTechnique.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="prose max-w-none dark:prose-invert prose-lg">
                <p>{activeTechnique.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {activeTechnique.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Implementation Time</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-3xl text-blue-600 dark:text-blue-400 mr-3">⏱️</span>
                      <span className="text-lg font-medium text-gray-800 dark:text-white">{activeTechnique.timeToImplement}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      The time required may vary based on your specific conditions, farm size, and available resources.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Implementation Steps</h3>
                <ol className="list-decimal pl-5 space-y-4">
                  {activeTechnique.steps.map((step, index) => (
                    <li key={index} className="pl-2">
                      <p className="text-gray-800 dark:text-gray-200">{step}</p>
                    </li>
                  ))}
                </ol>
                
                <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    <span className="mr-2">💡</span> Pro Tip
                  </h4>
                  <p className="text-gray-800 dark:text-gray-200 italic">
                    Start small when implementing this technique. Test on a portion of your land before scaling up to minimize risks and allow for learning and adaptation.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Related Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                        <i className="fas fa-video text-green-600 dark:text-green-400 text-xl"></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-800 dark:text-white">Video Tutorial</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">15 min demonstration</p>
                      </div>
                      <button className="ml-auto px-3 py-1 text-sm text-green-600 dark:text-green-400 border border-green-500 rounded">
                        Watch
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded">
                        <i className="fas fa-file-pdf text-blue-600 dark:text-blue-400 text-xl"></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-800 dark:text-white">Detailed Guide</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">PDF, 3.2 MB</p>
                      </div>
                      <button className="ml-auto px-3 py-1 text-sm text-blue-600 dark:text-blue-400 border border-blue-500 rounded">
                        Download
                      </button>
                    </div>
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

export default SustainableFarmingPage;
