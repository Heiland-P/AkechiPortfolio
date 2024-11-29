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
      console.log("Progress saved locally:", data.encryptedProgress);
    } else {
      console.error("Failed to encrypt progress:", data.message);
    }
  } catch (error) {
    console.error("Error saving progress:", error);
  }
};

const newGame = async () => {
  console.log("New Game Started");
  const newGameInfo = "{level: 0}";
  saveProgress(newGameInfo);
};

// Load progress
const loadProgress = async () => {
  try {
    // Retrieve encrypted progress from localStorage
    const encryptedProgress = localStorage.getItem("encryptedProgress");

    if (!encryptedProgress) {
      newGame();
      return { level: 0 }; // Default progress
    }

    // Send encrypted progress to backend for decryption
    const response = await instance.post(`${Config.backendUrl}/get-progress`, {
      encryptedProgress,
    });

    const data = response.data;
    if (data.success) {
      console.log("Decrypted progress:", data.progress);
      return data.progress;
    } else {
      console.error("Failed to decrypt progress:", data.message);
      return { level: 0 }; // Default progress
    }
  } catch (error) {
    console.error("Error loading progress:", error);
    return { level: 0 }; // Default progress
  }
};

export { saveProgress, loadProgress, newGame };