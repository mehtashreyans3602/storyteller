"use client"
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import StoryBox from "../StoryBox/StoryBox";

const genAI = new GoogleGenerativeAI("AIzaSyCN4_zP2JEnek68LaTLtnglXwRz5oyzGdA");

const Storyteller = () => {
    const [story, setStory] = useState("");
    const [loading, setLoading] = useState(false);
    const [apiKey, setApiKey] = useState(""); // State for the API key
    const [sideCharacters, setSideCharacters] = useState("");
    const genAI = new GoogleGenerativeAI(apiKey);

    const runGemini = async (prompt) => {
        setLoading(true);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setStory(text);
        setLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const genre = e.target.genre.value;
        const mainCharacter = e.target.mainCharacter.value;
        const villain = e.target.villain.value;
        const lessonType = e.target.lessonType.value;
        const endingType = e.target.endingType.value;

        const prompt = `Generate a story of ${genre} genre with a main character named ${mainCharacter} and side character or characters ${sideCharacters}. The villain is ${villain}. The lesson of the story is ${lessonType}. The ending is a ${endingType} ending.`;

        runGemini(prompt);
    };

    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value);
    };

    const handleSideCharactersChange = (e) => {
        setSideCharacters(e.target.value);
    };

    const inputStyle = "border border-gray-300 rounded-md p-2"
    return (
        <div className="flex flex-col md:flex-row items-center justify-start gap-8 h-full overflow-scroll p-4">

            <div className="p-4 flex flex-col border-2 rounded-xl border-blue-500 justify-center text-center min-w-[50vh]">
                <h1>Enter Story Details:</h1>
                <br />
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="mb-4">
                        <label htmlFor="apiKey" className="block text-sm font-bold">
                            Google AI Studio API Key:
                        </label>
                        <input
                            type="text"
                            id="apiKey"
                            name="apiKey"
                            value={apiKey}
                            onChange={handleApiKeyChange}
                            className={`${inputStyle}`}
                        />
                    </div>
                    <label htmlFor="genre">Select Genre:</label>
                    <select
                        id="genre"
                        name="genre"
                        className={`${inputStyle}`}
                    >
                        <option value="adventure">Adventure</option>
                        <option value="mystery">Mystery</option>
                        <option value="scienceFiction">Science Fiction</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="romance">Romance</option>
                        <option value="horror">Horror</option>
                        <option value="thriller">Thriller</option>
                        <option value="historicalFiction">Historical Fiction</option>
                        <option value="drama">Drama</option>
                        <option value="comedy">Comedy</option>
                        <option value="tragedy">Tragedy</option>
                        <option value="dystopian">Dystopian</option>
                        <option value="sliceOfLife">Slice of Life</option>
                        <option value="biographyAutobiography">Biography/Autobiography</option>
                        <option value="childrensLiterature">Children&apos;s Literature</option>
                    </select>

                    <label htmlFor="mainCharacter">Main Character:</label>
                    <input
                        type="text"
                        name="mainCharacter"
                        className={`${inputStyle}`}
                    />

                    <div>
                        <label htmlFor="sideCharacters" className="block">
                            Side Characters (Enter each side character on a new line):
                        </label>
                        <textarea
                            id="sideCharacters"
                            name="sideCharacters"
                            value={sideCharacters}
                            onChange={handleSideCharactersChange}
                            className={`${inputStyle} mt-1 min-w-[100%]`}
                            rows="4"
                        />
                    </div>

                    <label htmlFor="villain">Villain:</label>
                    <input
                        type="text"
                        name="villain"
                        className={`${inputStyle}`}
                    />

                    <label htmlFor="lessonType">Select Lesson Type:</label>
                    <select
                        id="lessonType"
                        name="lessonType"
                        className={`${inputStyle}`}
                    >
                        <option value="moral">Moral Lessons</option>
                        <option value="selfDiscovery">Self-Discovery</option>
                        <option value="courage">Courage and Bravery</option>
                        <option value="friendship">Friendship and Loyalty</option>
                        <option value="adversity">Overcoming Adversity</option>
                        <option value="love">Love and Compassion</option>
                        <option value="acceptance">Acceptance and Tolerance</option>
                        <option value="greed">The Consequences of Greed</option>
                        <option value="humility">Humility</option>
                        <option value="knowledge">The Pursuit of Knowledge</option>
                        <option value="environmentalStewardship">Environmental Stewardship</option>
                        <option value="familyValues">Family Values</option>
                        <option value="perseverance">Perseverance</option>
                        <option value="individuality">Individuality and Nonconformity</option>
                        <option value="forgiveness">Forgiveness</option>
                    </select>

                    <label htmlFor="endingType">Select Ending Type:</label>
                    <select
                        id="endingType"
                        name="endingType"
                        className={`${inputStyle}`}
                    >
                        <option value="happy">Happy Ending</option>
                        <option value="tragic">Tragic Ending</option>
                        <option value="open">Open Ending</option>
                        <option value="ambiguous">Ambiguous Ending</option>
                        <option value="twist">Twist Ending</option>
                        <option value="cyclical">Cyclical Ending</option>
                        <option value="resolution">Resolution Ending</option>
                        <option value="cliffhanger">Cliffhanger</option>
                        <option value="bittersweet">Bittersweet Ending</option>
                        <option value="transformation">Character Transformation</option>
                        <option value="revelation">Revelation Ending</option>
                        <option value="fate">Fate/Destiny Ending</option>
                        <option value="reflective">Reflective Ending</option>
                        <option value="surreal">Surreal/Abstract Ending</option>
                        <option value="noResolution">No-Resolution Ending</option>
                    </select>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2"
                    >
                        Generate Story
                    </button>
                </form>
            </div>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <StoryBox story={story} />
            )}
        </div>

    );
};

export default Storyteller;