const fetch = require("node-fetch");

async function assignAdminRole(userId) {
  const resp = await fetch("https://your-site.netlify.app/.netlify/identity/admin/users/" + userId, {
    method: "PUT",
    headers: {
      Authorization: "Bearer YOUR_NETLIFY_IDENTITY_ADMIN_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      app_metadata: { roles: ["admin"] }
    })
  });
  const data = await resp.json();
  console.log(data);
}

// Replace 'USER-ID-HERE' with the actual Netlify Identity user ID
assignAdminRole("USER-ID-HERE");
