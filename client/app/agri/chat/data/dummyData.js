// Dummy user data
export const users = [
  {
    id: 0,
    name: 'John Harvest',
    role: 'Crop Expert',
    avatar: '👨‍🌾',
    online: true,
    lastSeen: 'now',
    category: 'expert',
    badge: 'Wheat Specialist',
    unread: 0
  },
  {
    id: 1,
    name: 'Sarah Fields',
    role: 'Irrigation Consultant',
    avatar: '👩‍🌾',
    online: true,
    lastSeen: 'now',
    category: 'expert',
    badge: 'Water Systems',
    unread: 3
  },
  {
    id: 2,
    name: 'GrowWise Support',
    role: 'Technical Support',
    avatar: '🌱',
    online: true,
    lastSeen: 'now',
    category: 'support',
    badge: '24/7 Available',
    unread: 0
  },
  {
    id: 3,
    name: 'Mike Planter',
    role: 'Local Farmer',
    avatar: '🧑‍🌾',
    online: false,
    lastSeen: '2h ago',
    category: 'farmer',
    badge: 'Organic Certified',
    unread: 0
  },
  {
    id: 4,
    name: 'Emma Greenhouse',
    role: 'Soil Scientist',
    avatar: '👩‍🔬',
    online: false,
    lastSeen: '1d ago',
    category: 'expert',
    badge: 'Ph.D. Soil Chemistry',
    unread: 0
  },
  {
    id: 5,
    name: 'Weather Alerts',
    role: 'Automated Service',
    avatar: '☀️',
    online: true,
    lastSeen: 'now',
    category: 'service',
    badge: 'Forecasts & Alerts',
    unread: 2
  },
  {
    id: 6,
    name: 'Farmers Group',
    role: 'Community Chat',
    avatar: '👥',
    online: true,
    lastSeen: 'now',
    category: 'group',
    members: 24,
    badge: 'Local Network',
    unread: 5
  },
  {
    id: 7,
    name: 'Market Prices',
    role: 'Automated Updates',
    avatar: '📊',
    online: true,
    lastSeen: 'now',
    category: 'service',
    badge: 'Daily Updates',
    unread: 1
  }
];

// Dummy chat messages data
export const chats = [
  {
    userId: 0,
    messages: [
      {
        id: 1,
        sender: 'them',
        text: 'Good morning! How are your wheat crops doing this season?',
        time: '9:32 AM',
        date: 'Today',
        status: 'read'
      },
      {
        id: 2,
        sender: 'you',
        text: 'Good morning! They\'re coming along well, but I\'ve noticed some yellowing on the lower leaves in the north field.',
        time: '9:45 AM',
        date: 'Today',
        status: 'read'
      },
      {
        id: 3,
        sender: 'them',
        text: 'That could be a sign of nitrogen deficiency. Have you done a soil test recently?',
        time: '9:47 AM',
        date: 'Today',
        status: 'read'
      },
      {
        id: 4,
        sender: 'you',
        text: 'Not in the last month. I\'ll schedule one right away.',
        time: '9:50 AM',
        date: 'Today',
        status: 'read'
      },
      {
        id: 5,
        sender: 'them',
        text: 'Good plan. In the meantime, can you send me some photos of the affected leaves? I might be able to give you a more specific diagnosis.',
        time: '9:52 AM',
        date: 'Today',
        status: 'read'
      },
      {
        id: 6,
        sender: 'them',
        text: 'Also, what\'s your current fertilization schedule?',
        time: '9:53 AM',
        date: 'Today',
        status: 'read'
      }
    ]
  },
  {
    userId: 1,
    messages: [
      {
        id: 1,
        sender: 'them',
        text: 'Hi there! I reviewed the irrigation data from your farm sensors. Your south field might be getting too much water.',
        time: '2:14 PM',
        date: 'Yesterday',
        status: 'read'
      },
      {
        id: 2,
        sender: 'you',
        text: 'Thanks for checking! I\'ve been concerned about that. What adjustments would you recommend?',
        time: '2:30 PM',
        date: 'Yesterday',
        status: 'read'
      },
      {
        id: 3,
        sender: 'them',
        text: 'I\'d suggest reducing watering time by 15% and monitoring soil moisture levels for the next week. The forecast shows some rain coming, so you might want to adjust your automated schedule.',
        time: '2:45 PM',
        date: 'Yesterday',
        status: 'read'
      },
      {
        id: 4,
        sender: 'them',
        text: 'I\'ve attached a recommended irrigation schedule based on your crop types and the local weather forecast.',
        time: '2:47 PM',
        date: 'Yesterday',
        status: 'read'
      },
      {
        id: 5,
        sender: 'them',
        text: 'Would you like me to help you configure your irrigation system with these new settings?',
        time: '4:15 PM',
        date: 'Yesterday',
        status: 'read'
      }
    ]
  },
  {
    userId: 2,
    messages: [
      {
        id: 1,
        sender: 'them',
        text: 'Welcome to GrowWise Support! How can we help you today?',
        time: '10:00 AM',
        date: '5/12/2024',
        status: 'read'
      }
    ]
  },
  {
    userId: 3,
    messages: [
      {
        id: 1,
        sender: 'them',
        text: 'Hey neighbor! Are you coming to the farmers market this weekend?',
        time: '5:30 PM',
        date: '5/11/2024',
        status: 'read'
      },
      {
        id: 2,
        sender: 'you',
        text: 'Planning on it! I\'ll be bringing some of my early strawberries and lettuce. How about you?',
        time: '6:45 PM',
        date: '5/11/2024',
        status: 'read'
      },
      {
        id: 3,
        sender: 'them',
        text: 'Great! I\'ll have honey and some spring greens. By the way, do you have any extra tomato seedlings? Mine didn\'t germinate well this year.',
        time: '7:12 PM',
        date: '5/11/2024',
        status: 'read'
      }
    ]
  },
  {
    userId: 5,
    messages: [
      {
        id: 1,
        sender: 'them',
        text: '⚠️ WEATHER ALERT: Heavy rainfall expected in your area tomorrow. 1.5-2 inches forecast over 6 hours.',
        time: '8:00 AM',
        date: 'Today',
        status: 'unread'
      },
      {
        id: 2,
        sender: 'them',
        text: 'Consider postponing any planned chemical applications. Soil erosion risk is elevated for sloped fields.',
        time: '8:01 AM',
        date: 'Today',
        status: 'unread'
      }
    ]
  },
  {
    userId: 6,
    messages: [
      {
        id: 1,
        sender: 'Member',
        name: 'Lisa Berry',
        text: 'Has anyone tried the new drought-resistant corn variety?',
        time: '11:23 AM',
        date: 'Yesterday',
        status: 'unread'
      },
      {
        id: 2,
        sender: 'Member',
        name: 'Carlos Mendez',
        text: 'Yes! We planted 5 acres this season. Germination rate was excellent.',
        time: '11:45 AM',
        date: 'Yesterday',
        status: 'unread'
      },
      {
        id: 3,
        sender: 'Member',
        name: 'Taylor Farms',
        text: 'How\'s it handling the dry spell we\'ve been having?',
        time: '12:30 PM',
        date: 'Yesterday',
        status: 'unread'
      },
      {
        id: 4,
        sender: 'Member',
        name: 'Carlos Mendez',
        text: 'Holding up surprisingly well. Leaves aren\'t curling like my standard variety.',
        time: '12:42 PM',
        date: 'Yesterday',
        status: 'unread'
      },
      {
        id: 5,
        sender: 'Member',
        name: 'Jasmine Wong',
        text: 'What supplier did you use? I\'d like to try it next season.',
        time: '1:15 PM',
        date: 'Yesterday',
        status: 'unread'
      }
    ]
  },
  {
    userId: 7,
    messages: [
      {
        id: 1,
        sender: 'them',
        text: '📈 MARKET PRICE UPDATE: Corn futures up 2.3% on Chicago Board of Trade',
        time: '7:00 AM',
        date: 'Today',
        status: 'unread'
      }
    ]
  }
];
