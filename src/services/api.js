export const getallEvents = async () => {
    try {
      // Ici, vous pouvez utiliser fetch ou Axios pour faire une requête GET à votre API
      const response = await fetch("https://votre-api.com/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      return data; // Supposons que votre API retourne une liste d'événements
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };
  