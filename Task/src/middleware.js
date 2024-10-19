const authenticateAPIKey = (req, res, next) => {
  const apiKey = req.header("x-api-key");

  // Check if the API key is provided in the request header
  if (!apiKey) {
    return res.status(401).json({ error: "API key is missing" });
  }

  // Validate the provided API key against the environment variable
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Unauthorized: Invalid API key" });
  }

  // API key is valid, proceed to the next middleware or route handler
  next();
};

module.exports = authenticateAPIKey;
