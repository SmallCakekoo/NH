const StoryService = {
  async getStoryData() {
    try {
      const response = await fetch("/data/story.json");
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching story data:", error);
      throw error;
    }
  },
};

export default StoryService;
