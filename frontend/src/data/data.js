const iconList = [
  { name: "home", style: "solid", category: "General" },
  { name: "user", style: "outline", category: "User" },
  { name: "cart", style: "solid", category: "E-commerce" },
  { name: "camera", style: "outline", category: "Media" },
  { name: "file", style: "solid", category: "Files" },
  { name: "cloud", style: "outline", category: "Weather" },
  { name: "star", style: "solid", category: "Emoji" },
  { name: "heart", style: "outline", category: "Emoji" },
  { name: "settings", style: "solid", category: "General" },
  { name: "trash", style: "outline", category: "Files" },
  { name: "lock", style: "solid", category: "User" },
  { name: "bookmark", style: "outline", category: "Text" },
  { name: "message", style: "solid", category: "User" },
  { name: "bell", style: "outline", category: "General" },
  { name: "globe", style: "solid", category: "Media" },
  { name: "shopping-bag", style: "outline", category: "E-commerce" },
  { name: "play", style: "solid", category: "Media" },
  { name: "music", style: "outline", category: "Media" },
  { name: "search", style: "solid", category: "General" },
  { name: "document", style: "outline", category: "Files" },
  { name: "credit-card", style: "solid", category: "E-commerce" },
  { name: "gift", style: "outline", category: "E-commerce" },
  { name: "key", style: "solid", category: "User" },
  { name: "envelope", style: "outline", category: "Files" },
  { name: "smile", style: "solid", category: "Emoji" },
  { name: "sun", style: "outline", category: "Weather" },
  { name: "moon", style: "solid", category: "Weather" },
  { name: "flag", style: "outline", category: "General" },
  { name: "tag", style: "solid", category: "E-commerce" },
  { name: "pencil", style: "outline", category: "Text" },
  { name: "share", style: "solid", category: "General" },
  { name: "upload", style: "outline", category: "Files" },
  { name: "download", style: "solid", category: "Files" },
  { name: "microphone", style: "outline", category: "Media" },
  { name: "thumbs-up", style: "solid", category: "Emoji" },
  { name: "umbrella", style: "outline", category: "Weather" },
  { name: "wallet", style: "solid", category: "E-commerce" },
  { name: "battery", style: "outline", category: "General" },
  { name: "calendar", style: "solid", category: "General" },
  { name: "location", style: "outline", category: "User" },
  { name: "home", style: "solid", category: "General" },
  { name: "user", style: "outline", category: "User" },
  { name: "cart", style: "solid", category: "E-commerce" },
  { name: "camera", style: "outline", category: "Media" },
  { name: "file", style: "solid", category: "Files" },
  { name: "cloud", style: "outline", category: "Weather" },
  { name: "star", style: "solid", category: "Emoji" },
  { name: "heart", style: "outline", category: "Emoji" },
  { name: "settings", style: "solid", category: "General" },
  { name: "trash", style: "outline", category: "Files" },
  { name: "lock", style: "solid", category: "User" },
  { name: "bookmark", style: "outline", category: "Text" },
  { name: "message", style: "solid", category: "User" },
  { name: "bell", style: "outline", category: "General" },
  { name: "globe", style: "solid", category: "Media" },
  { name: "shopping-bag", style: "outline", category: "E-commerce" },
  { name: "play", style: "solid", category: "Media" },
  { name: "music", style: "outline", category: "Media" },
  { name: "search", style: "solid", category: "General" },
  { name: "document", style: "outline", category: "Files" },
  { name: "credit-card", style: "solid", category: "E-commerce" },
  { name: "gift", style: "outline", category: "E-commerce" },
  { name: "key", style: "solid", category: "User" },
  { name: "envelope", style: "outline", category: "Files" },
  { name: "smile", style: "solid", category: "Emoji" },
  { name: "sun", style: "outline", category: "Weather" },
  { name: "moon", style: "solid", category: "Weather" },
  { name: "flag", style: "outline", category: "General" },
  { name: "tag", style: "solid", category: "E-commerce" },
  { name: "pencil", style: "outline", category: "Text" },
  { name: "share", style: "solid", category: "General" },
  { name: "upload", style: "outline", category: "Files" },
  { name: "download", style: "solid", category: "Files" },
  { name: "microphone", style: "outline", category: "Media" },
  { name: "thumbs-up", style: "solid", category: "Emoji" },
  { name: "umbrella", style: "outline", category: "Weather" },
  { name: "wallet", style: "solid", category: "E-commerce" },
  { name: "battery", style: "outline", category: "General" },
  { name: "calendar", style: "solid", category: "General" },
  { name: "location", style: "outline", category: "User" },
  { name: "home", style: "solid", category: "General" },
  { name: "user", style: "outline", category: "User" },
  { name: "cart", style: "solid", category: "E-commerce" },
  { name: "camera", style: "outline", category: "Media" },
  { name: "file", style: "solid", category: "Files" },
  { name: "cloud", style: "outline", category: "Weather" },
  { name: "star", style: "solid", category: "Emoji" },
  { name: "heart", style: "outline", category: "Emoji" },
  { name: "settings", style: "solid", category: "General" },
  { name: "trash", style: "outline", category: "Files" },
  { name: "lock", style: "solid", category: "User" },
  { name: "bookmark", style: "outline", category: "Text" },
  { name: "message", style: "solid", category: "User" },
  { name: "bell", style: "outline", category: "General" },
  { name: "globe", style: "solid", category: "Media" },
  { name: "shopping-bag", style: "outline", category: "E-commerce" },
  { name: "play", style: "solid", category: "Media" },
  { name: "music", style: "outline", category: "Media" },
  { name: "search", style: "solid", category: "General" },
  { name: "document", style: "outline", category: "Files" },
  { name: "credit-card", style: "solid", category: "E-commerce" },
  { name: "gift", style: "outline", category: "E-commerce" },
  { name: "key", style: "solid", category: "User" },
  { name: "envelope", style: "outline", category: "Files" },
  { name: "smile", style: "solid", category: "Emoji" },
  { name: "sun", style: "outline", category: "Weather" },
  { name: "moon", style: "solid", category: "Weather" },
  { name: "flag", style: "outline", category: "General" },
  { name: "tag", style: "solid", category: "E-commerce" },
  { name: "pencil", style: "outline", category: "Text" },
  { name: "share", style: "solid", category: "General" },
  { name: "upload", style: "outline", category: "Files" },
  { name: "download", style: "solid", category: "Files" },
  { name: "microphone", style: "outline", category: "Media" },
  { name: "thumbs-up", style: "solid", category: "Emoji" },
  { name: "umbrella", style: "outline", category: "Weather" },
  { name: "wallet", style: "solid", category: "E-commerce" },
  { name: "battery", style: "outline", category: "General" },
  { name: "calendar", style: "solid", category: "General" },
  { name: "location", style: "outline", category: "User" },
  { name: "home", style: "solid", category: "General" },
  { name: "user", style: "outline", category: "User" },
  { name: "cart", style: "solid", category: "E-commerce" },
  { name: "camera", style: "outline", category: "Media" },
  { name: "file", style: "solid", category: "Files" },
  { name: "cloud", style: "outline", category: "Weather" },
  { name: "star", style: "solid", category: "Emoji" },
  { name: "heart", style: "outline", category: "Emoji" },
  { name: "settings", style: "solid", category: "General" },
  { name: "trash", style: "outline", category: "Files" },
  { name: "lock", style: "solid", category: "User" },
  { name: "bookmark", style: "outline", category: "Text" },
  { name: "message", style: "solid", category: "User" },
  { name: "bell", style: "outline", category: "General" },
  { name: "globe", style: "solid", category: "Media" },
  { name: "shopping-bag", style: "outline", category: "E-commerce" },
  { name: "play", style: "solid", category: "Media" },
  { name: "music", style: "outline", category: "Media" },
  { name: "search", style: "solid", category: "General" },
  { name: "document", style: "outline", category: "Files" },
  { name: "credit-card", style: "solid", category: "E-commerce" },
  { name: "gift", style: "outline", category: "E-commerce" },
  { name: "key", style: "solid", category: "User" },
  { name: "envelope", style: "outline", category: "Files" },
  { name: "smile", style: "solid", category: "Emoji" },
  { name: "sun", style: "outline", category: "Weather" },
  { name: "moon", style: "solid", category: "Weather" },
  { name: "flag", style: "outline", category: "General" },
  { name: "tag", style: "solid", category: "E-commerce" },
  { name: "pencil", style: "outline", category: "Text" },
  { name: "share", style: "solid", category: "General" },
  { name: "upload", style: "outline", category: "Files" },
  { name: "download", style: "solid", category: "Files" },
  { name: "microphone", style: "outline", category: "Media" },
  { name: "thumbs-up", style: "solid", category: "Emoji" },
  { name: "umbrella", style: "outline", category: "Weather" },
  { name: "wallet", style: "solid", category: "E-commerce" },
  { name: "battery", style: "outline", category: "General" },
  { name: "calendar", style: "solid", category: "General" },
  { name: "location", style: "outline", category: "User" },
  { name: "home", style: "solid", category: "General" },
  { name: "user", style: "outline", category: "User" },
  { name: "cart", style: "solid", category: "E-commerce" },
  { name: "camera", style: "outline", category: "Media" },
  { name: "file", style: "solid", category: "Files" },
  { name: "cloud", style: "outline", category: "Weather" },
  { name: "star", style: "solid", category: "Emoji" },
  { name: "heart", style: "outline", category: "Emoji" },
  { name: "settings", style: "solid", category: "General" },
  { name: "trash", style: "outline", category: "Files" },
  { name: "lock", style: "solid", category: "User" },
  { name: "bookmark", style: "outline", category: "Text" },
  { name: "message", style: "solid", category: "User" },
  { name: "bell", style: "outline", category: "General" },
  { name: "globe", style: "solid", category: "Media" },
  { name: "shopping-bag", style: "outline", category: "E-commerce" },
  { name: "play", style: "solid", category: "Media" },
  { name: "music", style: "outline", category: "Media" },
  { name: "search", style: "solid", category: "General" },
  { name: "document", style: "outline", category: "Files" },
  { name: "credit-card", style: "solid", category: "E-commerce" },
  { name: "gift", style: "outline", category: "E-commerce" },
  { name: "key", style: "solid", category: "User" },
  { name: "envelope", style: "outline", category: "Files" },
  { name: "smile", style: "solid", category: "Emoji" },
  { name: "sun", style: "outline", category: "Weather" },
  { name: "moon", style: "solid", category: "Weather" },
  { name: "flag", style: "outline", category: "General" },
  { name: "tag", style: "solid", category: "E-commerce" },
  { name: "pencil", style: "outline", category: "Text" },
  { name: "share", style: "solid", category: "General" },
  { name: "upload", style: "outline", category: "Files" },
  { name: "download", style: "solid", category: "Files" },
  { name: "microphone", style: "outline", category: "Media" },
  { name: "thumbs-up", style: "solid", category: "Emoji" },
  { name: "umbrella", style: "outline", category: "Weather" },
  { name: "wallet", style: "solid", category: "E-commerce" },
  { name: "battery", style: "outline", category: "General" },
  { name: "calendar", style: "solid", category: "General" },
  { name: "location", style: "outline", category: "User" },
  { name: "home", style: "solid", category: "General" },
  { name: "user", style: "outline", category: "User" },
  { name: "cart", style: "solid", category: "E-commerce" },
  { name: "camera", style: "outline", category: "Media" },
  { name: "file", style: "solid", category: "Files" },
  { name: "cloud", style: "outline", category: "Weather" },
  { name: "star", style: "solid", category: "Emoji" },
  { name: "heart", style: "outline", category: "Emoji" },
  { name: "settings", style: "solid", category: "General" },
  { name: "trash", style: "outline", category: "Files" },
  { name: "lock", style: "solid", category: "User" },
  { name: "bookmark", style: "outline", category: "Text" },
  { name: "message", style: "solid", category: "User" },
  { name: "bell", style: "outline", category: "General" },
  { name: "globe", style: "solid", category: "Media" },
  { name: "shopping-bag", style: "outline", category: "E-commerce" },
  { name: "play", style: "solid", category: "Media" },
  { name: "music", style: "outline", category: "Media" },
  { name: "search", style: "solid", category: "General" },
  { name: "document", style: "outline", category: "Files" },
  { name: "credit-card", style: "solid", category: "E-commerce" },
  { name: "gift", style: "outline", category: "E-commerce" },
  { name: "key", style: "solid", category: "User" },
  { name: "envelope", style: "outline", category: "Files" },
  { name: "smile", style: "solid", category: "Emoji" },
  { name: "sun", style: "outline", category: "Weather" },
  { name: "moon", style: "solid", category: "Weather" },
  { name: "flag", style: "outline", category: "General" },
  { name: "tag", style: "solid", category: "E-commerce" },
  { name: "pencil", style: "outline", category: "Text" },
  { name: "share", style: "solid", category: "General" },
  { name: "upload", style: "outline", category: "Files" },
  { name: "download", style: "solid", category: "Files" },
  { name: "microphone", style: "outline", category: "Media" },
  { name: "thumbs-up", style: "solid", category: "Emoji" },
  { name: "umbrella", style: "outline", category: "Weather" },
  { name: "wallet", style: "solid", category: "E-commerce" },
  { name: "battery", style: "outline", category: "General" },
  { name: "calendar", style: "solid", category: "General" },
  { name: "location", style: "outline", category: "User" },
  { name: "home", style: "solid", category: "General" },
  { name: "user", style: "outline", category: "User" },
  { name: "cart", style: "solid", category: "E-commerce" },
  { name: "camera", style: "outline", category: "Media" },
  { name: "file", style: "solid", category: "Files" },
  { name: "cloud", style: "outline", category: "Weather" },
  { name: "star", style: "solid", category: "Emoji" },
  { name: "heart", style: "outline", category: "Emoji" },
  { name: "settings", style: "solid", category: "General" },
  { name: "trash", style: "outline", category: "Files" },
  { name: "lock", style: "solid", category: "User" },
  { name: "bookmark", style: "outline", category: "Text" },
  { name: "message", style: "solid", category: "User" },
  { name: "bell", style: "outline", category: "General" },
  { name: "globe", style: "solid", category: "Media" },
  { name: "shopping-bag", style: "outline", category: "E-commerce" },
  { name: "play", style: "solid", category: "Media" },
  { name: "music", style: "outline", category: "Media" },
  { name: "search", style: "solid", category: "General" },
  { name: "document", style: "outline", category: "Files" },
  { name: "credit-card", style: "solid", category: "E-commerce" },
  { name: "gift", style: "outline", category: "E-commerce" },
  { name: "key", style: "solid", category: "User" },
  { name: "envelope", style: "outline", category: "Files" },
  { name: "smile", style: "solid", category: "Emoji" },
  { name: "sun", style: "outline", category: "Weather" },
  { name: "moon", style: "solid", category: "Weather" },
  { name: "flag", style: "outline", category: "General" },
  { name: "tag", style: "solid", category: "E-commerce" },
  { name: "pencil", style: "outline", category: "Text" },
  { name: "share", style: "solid", category: "General" },
  { name: "upload", style: "outline", category: "Files" },
  { name: "download", style: "solid", category: "Files" },
  { name: "microphone", style: "outline", category: "Media" },
  { name: "thumbs-up", style: "solid", category: "Emoji" },
  { name: "umbrella", style: "outline", category: "Weather" },
  { name: "wallet", style: "solid", category: "E-commerce" },
  { name: "battery", style: "outline", category: "General" },
  { name: "calendar", style: "solid", category: "General" },
  { name: "location", style: "outline", category: "User" },
  { name: "home", style: "solid", category: "General" },
  { name: "user", style: "outline", category: "User" },
  { name: "cart", style: "solid", category: "E-commerce" },
  { name: "camera", style: "outline", category: "Media" },
  { name: "file", style: "solid", category: "Files" },
  { name: "cloud", style: "outline", category: "Weather" },
  { name: "star", style: "solid", category: "Emoji" },
  { name: "heart", style: "outline", category: "Emoji" },
  { name: "settings", style: "solid", category: "General" },
  { name: "trash", style: "outline", category: "Files" },
  { name: "lock", style: "solid", category: "User" },
  { name: "bookmark", style: "outline", category: "Text" },
  { name: "message", style: "solid", category: "User" },
  { name: "bell", style: "outline", category: "General" },
  { name: "globe", style: "solid", category: "Media" },
  { name: "shopping-bag", style: "outline", category: "E-commerce" },
  { name: "play", style: "solid", category: "Media" },
  { name: "music", style: "outline", category: "Media" },
  { name: "search", style: "solid", category: "General" },
  { name: "document", style: "outline", category: "Files" },
  { name: "credit-card", style: "solid", category: "E-commerce" },
  { name: "gift", style: "outline", category: "E-commerce" },
  { name: "key", style: "solid", category: "User" },
  { name: "envelope", style: "outline", category: "Files" },
  { name: "smile", style: "solid", category: "Emoji" },
  { name: "sun", style: "outline", category: "Weather" },
  { name: "moon", style: "solid", category: "Weather" },
  { name: "flag", style: "outline", category: "General" },
  { name: "tag", style: "solid", category: "E-commerce" },
  { name: "pencil", style: "outline", category: "Text" },
  { name: "share", style: "solid", category: "General" },
  { name: "upload", style: "outline", category: "Files" },
  { name: "download", style: "solid", category: "Files" },
  { name: "microphone", style: "outline", category: "Media" },
  { name: "thumbs-up", style: "solid", category: "Emoji" },
  { name: "umbrella", style: "outline", category: "Weather" },
  { name: "wallet", style: "solid", category: "E-commerce" },
  { name: "battery", style: "outline", category: "General" },
  { name: "calendar", style: "solid", category: "General" },
  { name: "location", style: "outline", category: "User" },
];


export default iconList;