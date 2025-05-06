# Netlify Auth IP App

This project demonstrates a Netlify app with user registration/login, admin roles, and IP logging.

## Structure

- **public/**: Frontend pages
- **netlify/functions/**: Serverless functions for logging and retrieving IPs
- **ip-logs.json**: Stores recorded IPs
- **admin-setup.js**: Script to assign the admin role via Netlify Identity Admin API

## Setup

1. Clone the repo.
2. Enable Netlify Identity in your Netlify Dashboard.
3. Add the `admin` role under Identity > Settings > Roles.
4. Run `node admin-setup.js` (edit token and user ID first).
5. Use `netlify dev` for local testing and `netlify deploy --prod` for production.

Enjoy!
