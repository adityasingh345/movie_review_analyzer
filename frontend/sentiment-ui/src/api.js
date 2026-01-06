
export async function analyzeSentiment(text) {
    // this line means send a request to .... Fastapi /predict endpoint
  const response = await fetch("http://127.0.0.1:8000/predict", {
    // we are sending data so method POST
    method: "POST",
    headers: {
        // why headers it tells backend: hey i am sending JSON data 
        // without this fastapi might not parse request body 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });
//fastapi return { label: "possitive", "score": 0.99}
// .json() converts into a js object 
  return response.json();
}
// api.js is a service layer-- a small file whose only job is to talk to the backend and return data 
//it does not render ui , not handle buttons , not stores data 
//only sends http request recieves responses and convert then into usable data 
