import Config from "../Config";
import instance from "../axiosInstance";

// Save progress
const saveProgress = async (progress) => {
  try {
    // Send progress to backend for encryption
    const response = await instance.post(`${Config.backendUrl}/save-progress`, {
      progress,
    });

    const data = response.data;
    if (data.success) {
      // Store encrypted progress in localStorage
      localStorage.setItem("encryptedProgress", data.encryptedProgress);
      console.log("SaveLoad: Progress saved locally:", data.encryptedProgress);
    } else {
      console.error("SaveLoad: Failed to encrypt progress:", data.message);
    }
  } catch (error) {
    console.error("SaveLoad: Error saving progress:", error);
  }
};

const newGame = async () => {
  console.log("SaveLoad: New Game Started");
  const newGameInfo = "{level: 0}";
  await saveProgress(newGameInfo);
};

// Load progress
const loadProgress = async () => {
  try {
    // Retrieve encrypted progress from localStorage
    const encryptedProgress = localStorage.getItem("encryptedProgress");

    if (!encryptedProgress) {
      newGame();
      return 0; // Default progress
    }

    // Send encrypted progress to backend for decryption
    const response = await instance.post(`${Config.backendUrl}/get-progress`, {
      encryptedProgress,
    });

    const data = response.data;
    if (data.success) {
      console.log("SaveLoad: Decrypted progress:", data.progress);
      const progress = data.progress
      const levelMatch = progress.match(/level:\s*(\d+)/);
      const level = levelMatch ? parseInt(levelMatch[1], 10) : 0;
      return level;
    } else {
      console.error("SaveLoad: Failed to decrypt progress:", data.message);
      return 0; // Default progress
    }
  } catch (error) {
    console.error("SaveLoad: Error loading progress:", error);
    return 0; // Default progress
  }
};

export { saveProgress, loadProgress, newGame };