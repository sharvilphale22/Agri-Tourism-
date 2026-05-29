export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Dining', path: '/dining' },
  { label: 'Farmers', path: '/farmers' },
];

export const searchSuggestions = [
  'Nashik',
  'Vineyards',
  'River Side Farms',
  'Camping',
  'Organic Villages',
];

export const stayTypes = ['Cottage Stay', 'Family Stay', 'Farm Tent Stay'];

export const farmTypes = [
  'Organic Vegetables',
  'Grape & Wine',
  'Dairy & Livestock',
  'Mixed Crop',
  'Floriculture',
];

export const budgetOptions = [
  { id: 'all', label: 'Any Budget' },
  { id: 'low', label: 'Under ₹2,000' },
  { id: 'mid', label: '₹2,000 – ₹4,000' },
  { id: 'high', label: '₹4,000+' },
];

export const diningTimeSlots = [
  '11:30 AM',
  '12:30 PM',
  '1:30 PM',
  '6:30 PM',
  '7:30 PM',
  '8:30 PM',
];

export const propertyAttractions = [
  {
    id: 1,
    title: 'Trimbakeshwar Temple',
    description: 'Sacred Jyotirlinga at the Godavari source.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80',
  },
  {
    id: 2,
    title: 'Sula Vineyards',
    description: 'Wine tours and valley sunset views.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3e417834?w=400&q=80',
  },
  {
    id: 3,
    title: 'Panchavati',
    description: 'Historic ghats along the Godavari.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80',
  },
  {
    id: 4,
    title: 'Harihar Fort',
    description: 'Iconic Sahyadri fort trek.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  },
];

export const popularDestinations = [
  {
    id: 'nashik',
    name: 'Nashik',
    subtitle: 'Vineyards & temples',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3e417834?w=600&q=80',
    query: { location: 'Nashik' },
  },
  {
    id: 'coorg',
    name: 'Coorg',
    subtitle: 'Coffee plantations',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    query: { location: 'Coorg' },
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    subtitle: 'Lake-side villages',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&q=80',
    query: { location: 'Udaipur' },
  },
  {
    id: 'kerala',
    name: 'Kerala',
    subtitle: 'Backwater farms',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&q=80',
    query: { location: 'Kerala' },
  },
];

export const diningShowcase = [
  {
    id: 1,
    title: 'Organic Meals',
    description: 'Seasonal harvest served hours after picking.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
  },
  {
    id: 2,
    title: 'Regional Thali',
    description: 'Authentic Maharashtrian and pan-Indian thalis.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
  },
  {
    id: 3,
    title: 'Outdoor Dining',
    description: 'Lantern-lit meals under mango trees.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
];

export const properties = [
  {
    id: 'green-valley-farm',
    farmName: 'Green Valley Farm',
    village: 'Trimbak, Nashik',
    location: 'Nashik',
    farmType: 'Grape & Wine',
    budget: 'mid',
    pricePerNight: 2499,
    priceDisplay: '₹2,499',
    rating: 4.9,
    reviewCount: 128,
    shortDescription: 'Vineyard cottage stays with grape harvesting and village meals.',
    description:
      'Nestled in the Nashik wine belt, Green Valley offers peaceful cottages surrounded by grape vines. Join morning harvests, enjoy farm-to-table thalis, and unwind with sunset views over the Sahyadri hills.',
    availability: 'available',
    hasDining: true,
    maxGuests: 6,
    featured: true,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
      'https://images.unsplash.com/photo-1506377247377-2a5b3e417834?w=800&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80',
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80',
    ],
    amenities: ['Private cottage', 'Farm breakfast', 'Wi-Fi', 'Parking', 'Guided tours'],
    activities: ['Grape Harvesting', 'Bullock Cart Ride', 'Village Cooking', 'Wine Tasting'],
    diningOptions: ['Organic thali', 'Outdoor dining', 'Farm breakfast'],
    farmer: {
      name: 'Rajesh Patil',
      experience: '12 years hosting agri-tourists',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b93a2f3c9?w=200&q=80',
      verified: true,
      mobile: '+91 98765 12340',
    },
  },
  {
    id: 'river-mist-retreat',
    farmName: 'River Mist Retreat',
    village: 'Igatpuri, Nashik',
    location: 'Nashik',
    farmType: 'Mixed Crop',
    budget: 'mid',
    pricePerNight: 3199,
    priceDisplay: '₹3,199',
    rating: 4.8,
    reviewCount: 94,
    shortDescription: 'Riverside tents with nature walks and campfire evenings.',
    description:
      'Wake to mist over the river, explore monsoon trails, and dine outdoors. Perfect for couples and small groups seeking a nature-forward village escape near Nashik.',
    availability: 'available',
    hasDining: true,
    maxGuests: 4,
    featured: true,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    ],
    amenities: ['Glamping tent', 'Campfire', 'Nature trails', 'Outdoor dining'],
    activities: ['Nature Walks', 'Campfire Nights', 'River Side Relaxation', 'Bird Watching'],
    diningOptions: ['BBQ dinners', 'Village thali', 'Morning chai'],
    farmer: {
      name: 'Sunita Deshmukh',
      experience: '8 years eco-tourism host',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
      verified: true,
      mobile: '+91 98765 22341',
    },
  },
  {
    id: 'organic-hills-farm',
    farmName: 'Organic Hills Farm',
    village: 'Sinnar, Nashik',
    location: 'Nashik',
    farmType: 'Organic Vegetables',
    budget: 'low',
    pricePerNight: 1799,
    priceDisplay: '₹1,799',
    rating: 4.7,
    reviewCount: 76,
    shortDescription: 'Chemical-free farming lessons and homely cottage stays.',
    description:
      'Learn organic cultivation from local experts, pick your own vegetables, and enjoy simple village hospitality in the Nashik countryside.',
    availability: 'limited',
    hasDining: true,
    maxGuests: 8,
    featured: false,
    image: 'https://images.unsplash.com/photo-1464226184743-9fd586be3fa2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1464226184743-9fd586be3fa2?w=1200&q=80',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80',
    ],
    amenities: ['Family cottage', 'Organic garden', 'Kitchen access', 'Bicycle rental'],
    activities: ['Organic Farming', 'Farming Activities', 'Village Cooking', 'Traditional Games'],
    diningOptions: ['Farm lunch', 'Organic dinner'],
    farmer: {
      name: 'Anil Kulkarni',
      experience: '15 years organic farmer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      verified: true,
      mobile: '+91 98765 33452',
    },
  },
  {
    id: 'coorg-coffee-estate',
    farmName: 'Coorg Coffee Estate',
    village: 'Madikeri, Coorg',
    location: 'Coorg',
    farmType: 'Mixed Crop',
    budget: 'high',
    pricePerNight: 5499,
    priceDisplay: '₹5,499',
    rating: 5.0,
    reviewCount: 203,
    shortDescription: 'Premium estate stay with coffee picking and misty walks.',
    description:
      'Experience Coorg\'s coffee culture with estate tours, spice gardens, and luxury cottages wrapped in plantation greenery.',
    availability: 'available',
    hasDining: true,
    maxGuests: 6,
    featured: true,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    ],
    amenities: ['Luxury cottage', 'Coffee tours', 'Spa access', 'All meals'],
    activities: ['Coffee Picking', 'Nature Walks', 'Spice Garden Tour', 'Bird Watching'],
    diningOptions: ['Estate breakfast', 'Coorg cuisine', 'Coffee tasting'],
    farmer: {
      name: 'Thomas Muthappa',
      experience: '20 years estate manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      verified: true,
      mobile: '+91 98765 44563',
    },
  },
  {
    id: 'udaipur-lake-farm',
    farmName: 'Udaipur Lake Farm',
    village: 'Udaipur outskirts',
    location: 'Udaipur',
    farmType: 'Dairy & Livestock',
    budget: 'mid',
    pricePerNight: 2999,
    priceDisplay: '₹2,999',
    rating: 4.8,
    reviewCount: 112,
    shortDescription: 'Dairy farm experience with lake views and Rajasthani meals.',
    description:
      'Feed cattle at dawn, learn dairy traditions, and stay in mud-plaster cottages with views toward Udaipur\'s lakes and hills.',
    availability: 'available',
    hasDining: true,
    maxGuests: 10,
    featured: false,
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    ],
    amenities: ['Heritage cottage', 'Dairy tour', 'Lake access', 'Cultural shows'],
    activities: ['Dairy Farming', 'Bullock Cart Ride', 'Village Cooking', 'Folk Music'],
    diningOptions: ['Rajasthani thali', 'Dairy sweets', 'Outdoor dining'],
    farmer: {
      name: 'Lakshmi Singh',
      experience: '10 years heritage host',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
      verified: true,
      mobile: '+91 98765 55674',
    },
  },
  {
    id: 'kerala-backwater-farm',
    farmName: 'Kerala Backwater Farm',
    village: 'Alleppey, Kerala',
    location: 'Kerala',
    farmType: 'Organic Vegetables',
    budget: 'mid',
    pricePerNight: 3499,
    priceDisplay: '₹3,499',
    rating: 4.9,
    reviewCount: 156,
    shortDescription: 'Backwater homestay with canoe rides and coconut farming.',
    description:
      'Stay in a traditional Kerala homestead, glide through backwaters at dawn, and savour seafood and vegetarian meals cooked with home-grown produce.',
    availability: 'limited',
    hasDining: true,
    maxGuests: 6,
    featured: false,
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200&q=80',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    ],
    amenities: ['Homestay room', 'Canoe rides', 'Ayurvedic tea', 'Garden hammock'],
    activities: ['Canoe Tours', 'Coconut Harvesting', 'Village Cooking', 'Nature Walks'],
    diningOptions: ['Kerala sadya', 'Seafood dinner', 'Breakfast spread'],
    farmer: {
      name: 'Ravi Nair',
      experience: '14 years homestay host',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      verified: true,
      mobile: '+91 98765 66785',
    },
  },
  {
    id: 'punjab-wheat-fields',
    farmName: 'Punjab Wheat Fields',
    village: 'Amritsar rural',
    location: 'Punjab',
    farmType: 'Mixed Crop',
    budget: 'low',
    pricePerNight: 1599,
    priceDisplay: '₹1,599',
    rating: 4.6,
    reviewCount: 68,
    shortDescription: 'Golden wheat fields, tractor rides, and Punjabi village life.',
    description:
      'Experience Punjab\'s agricultural heartland with tractor tours, langar-style meals, and warm family hospitality in spacious farm stays.',
    availability: 'available',
    hasDining: true,
    maxGuests: 12,
    featured: false,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    ],
    amenities: ['Large family room', 'Tractor tour', 'Parking', 'AC optional'],
    activities: ['Tractor Ride', 'Farming Activities', 'Traditional Games', 'Village Cooking'],
    diningOptions: ['Punjabi thali', 'Lassi & snacks'],
    farmer: {
      name: 'Harpreet Gill',
      experience: '9 years farm host',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
      verified: true,
      mobile: '+91 98765 77896',
    },
  },
  {
    id: 'vineyard-glamping',
    farmName: 'Vineyard Glamping',
    village: 'Gangapur, Nashik',
    location: 'Nashik',
    farmType: 'Grape & Wine',
    budget: 'high',
    pricePerNight: 4999,
    priceDisplay: '₹4,999',
    rating: 4.9,
    reviewCount: 87,
    shortDescription: 'Luxury glamping among vineyards with private tastings.',
    description:
      'Premium tents with vineyard views, sommelier-led tastings, and chef-curated dinners under the stars in Nashik wine country.',
    availability: 'limited',
    hasDining: true,
    maxGuests: 4,
    featured: true,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1506377247377-2a5b3e417834?w=800&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    ],
    amenities: ['Luxury tent', 'Private tasting', 'Chef dinner', 'Concierge'],
    activities: ['Wine Tasting', 'Vineyard Walk', 'Campfire Nights', 'Stargazing'],
    diningOptions: ['Chef\'s table', 'Wine pairing dinner', 'Breakfast hamper'],
    farmer: {
      name: 'Vikram Jadhav',
      experience: '11 years vineyard host',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
      verified: true,
      mobile: '+91 98765 88907',
    },
  },
];

export const dummyFarmer = {
  id: 'demo-1',
  farmerName: 'Rajesh Patil',
  farmName: 'Green Valley Farm',
  village: 'Trimbak, Nashik',
  mobile: '+91 98765 12340',
  farmType: 'Grape & Wine',
  description: 'Family-run vineyard with grape harvesting, traditional meals, and cottage stays.',
  image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
  activities: ['Grape Harvesting', 'Village Cooking', 'Bullock Cart Ride', 'Wine Tasting Tour'],
  stayOptions: ['Cottage Stay', 'Farm Tent Stay'],
};

export function getPropertyById(id) {
  return properties.find((p) => p.id === id);
}

export function filterProperties(filters) {
  const {
    location = '',
    farmType = '',
    budget = 'all',
    guests = '',
    dining = false,
    activity = '',
  } = filters;

  return properties.filter((p) => {
    if (location && !p.location.toLowerCase().includes(location.toLowerCase()) &&
        !p.village.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }
    if (farmType && farmType !== 'all' && p.farmType !== farmType) return false;
    if (budget === 'low' && p.pricePerNight >= 2000) return false;
    if (budget === 'mid' && (p.pricePerNight < 2000 || p.pricePerNight > 4000)) return false;
    if (budget === 'high' && p.pricePerNight <= 4000) return false;
    if (guests && parseInt(guests, 10) > p.maxGuests) return false;
    if (dining && !p.hasDining) return false;
    if (activity && !p.activities.some((a) => a.toLowerCase().includes(activity.toLowerCase()))) {
      return false;
    }
    return true;
  });
}
