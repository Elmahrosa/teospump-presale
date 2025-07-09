export default function Home() {
  return (
    <div>
      <h1>Welcome to Teos Pump Presale</h1>
      <p>The homepage is working!</p>
    </div>
  );
}
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/",
      "dest": "frontend/public/index.html"
    },
    {
      "src": "/api/(.*)",
      "dest": "frontend/pages/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ],
  "env": {
    "API_URL": "https://api.example.com",
    "ANOTHER_ENV_VAR": "value"
  },
  "build": {
    "env": {
      "API_URL": "https://api.example.com",
      "ANOTHER_ENV_VAR": "value"
    }
  },
  "routes": [
    {
      "src": "/",
      "dest": "frontend/public/index.html"
    },
    {
      "src": "/api/(.*)",
      "dest": "frontend/pages/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ],
  "functions": {
    "api/**/*.js": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
