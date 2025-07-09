# Deployment Instructions for TeosPump Presale

This document provides step-by-step instructions for deploying the TeosPump Presale application to Vercel.

## Prerequisites

Before you begin, ensure you have the following:

1. **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
2. **Vercel Account**: Create an account on [Vercel](https://vercel.com/) if you don't have one.
3. **Vercel CLI**: Install the Vercel CLI globally using npm:
   ```bash
   npm install -g vercel
   ```

## Project Setup

1. **Clone the Repository**:
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/Elmahrosa/teospump-presale.git
   ```

2. **Navigate to the Project Directory**:
   Change to the project folder:
   ```bash
   cd teospump-presale
   ```

3. **Install Dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

## Configuration

1. **Environment Variables**:
   If your application requires environment variables, set them in the Vercel dashboard:
   - Go to your project settings in Vercel.
   - Navigate to the "Environment Variables" section.
   - Add any necessary variables (e.g., API keys, database URLs).

2. **Update `vercel.json`**:
   Ensure that your `vercel.json` file is correctly configured. Here’s an example:
   ```json
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
         "src": "/(.*)",
         "dest": "frontend/$1"
       }
     ]
   }
   ```

## Deployment Steps

1. **Deploy to Vercel**:
   Run the following command in your project directory:
   ```bash
   vercel
   ```

2. **Follow the Prompts**:
   The Vercel CLI will prompt you to log in (if you haven't already) and ask for a project name. You can either create a new project or link to an existing one.

3. **Confirm Deployment**:
   After the deployment process completes, you will receive a URL where your application is hosted. You can visit this URL to see your deployed application.

## Testing the Deployment

1. **Access the Application**:
   Open the provided URL in your web browser to verify that the application is running correctly.

2. **Check for Errors**:
   If you encounter any issues, check the build logs in the Vercel dashboard for error messages.

## Troubleshooting

If you run into issues during deployment, consider the following:

- **Build Errors**: Check the build logs for specific error messages. Common issues include missing dependencies or incorrect configurations.
- **404 Errors**: Ensure that your routing in `vercel.json` is set up correctly.
- **Environment Variables**: Make sure all required environment variables are set in the Vercel dashboard.
- **Local Testing**: Run the application locally using:
  ```bash
  npm run dev
  ```
  This can help identify issues before deploying.

## Conclusion

You have successfully deployed the TeosPump Presale application to Vercel! If you have any questions or need further assistance, feel free to reach out to the project maintainers or consult the Vercel documentation.
