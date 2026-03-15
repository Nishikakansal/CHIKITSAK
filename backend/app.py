from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Gemini
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-1.5-flash')

@app.route('/api/triage', methods=['POST'])
def triage():
    data = request.json
    symptoms = data.get('symptoms', '')
    
    if not symptoms:
        return jsonify({"error": "No symptoms provided"}), 400
        
    prompt = f"""
    You are an emergency medical triage AI for the CHIKITSAK app.
    Based on these symptoms: "{symptoms}", predict the severity and provide a summary.
    
    Return ONLY a JSON object with:
    - severity: "CRITICAL", "URGENT", or "STABLE"
    - summary: A brief explanation of why this severity was chosen.
    - probable_condition: The most likely condition (disclaimer: not a diagnosis).
    - action_required: Immediate action the user should take.
    """
    
    try:
        response = model.generate_content(prompt)
        # Parse the JSON from the AI response (basic cleaning)
        content = response.text.strip()
        if content.startswith('```json'):
            content = content[7:-3].strip()
        
        import json
        result = json.loads(content)
        return jsonify(result)
    except Exception as e:
        print(f"Error: {e}")
        # Fallback for demo purposes
        return jsonify({
            "severity": "URGENT",
            "summary": "AI prediction failed, but based on common patterns, this requires medical evaluation.",
            "probable_condition": "Unknown",
            "action_required": "Consult a doctor as soon as possible."
        })

@app.route('/api/hospitals', methods=['GET'])
def get_hospitals():
    # Mock hospital data with resource availability
    hospitals = [
        {
            "id": "1",
            "name": "City General Hospital",
            "distance": "1.2 km",
            "eta": "8 min",
            "ventilators": 4,
            "icu_beds": 2,
            "priority_score": 95
        },
        {
            "id": "2",
            "name": "St. Mary's Clinic",
            "distance": "3.5 km",
            "eta": "12 min",
            "ventilators": 2,
            "icu_beds": 0,
            "priority_score": 70
        }
    ]
    return jsonify(hospitals)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
