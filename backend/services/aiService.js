const axios = require("axios");
const { GoogleAuth } = require("google-auth-library");

const getTaskSuggestion = async (inputText) => {
    try {
        console.log("Get task suggestion for : ",inputText);
        const response = await axios.post(
            // generative model
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
            {
                contents: [
                    {parts : [
                        {text : `Suggest task names for : ${inputText}`}
                    ]}
                ]    
            },
            {
                headers: {"Content-Type": "application/json"},
                params: {key: "AIzaSyClA9OJpJiVGQqOMBe7UFld8l2W2fBmvmY"} // API key from Gemini
            }
        )
        console.log("Responses from Gemini : ".response);

        return response.data.candidates.slice(0,10)?.[0]?.content?.parts?.[0]?.text || "No suggestions";

        // return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No suggestions"
    } catch (error) {
        console.error("Error in API :",error?.response?.data || error.message);
        return "Error fetching in suggestions";
    }
}

const getTaskPrediction = async (inputText) => {
    try {
        console.log("Get task prediction for : ",inputText);
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
            {
                contents: [
                    {parts : [
                        {text : `Give answer in 1 line only. How much time it will take me to complete this task in hours: ${inputText}`}
                    ]}
                ]    
            },
            {
                headers: {"Content-Type": "application/json"},
                params: {key: "AIzaSyClA9OJpJiVGQqOMBe7UFld8l2W2fBmvmY"}
            }
        )
        console.log("Responses from Gemini : ".response);

        return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No time prediction";

        // return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No suggestions"
    } catch (error) {
        console.error("Error in API :",error?.response?.data || error.message);
        return "Error fetching in suggestions";
    }
}

module.exports = {getTaskSuggestion, getTaskPrediction};