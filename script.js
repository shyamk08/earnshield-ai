let premium = 0;
let riskScore = 0;

// Simple AI-like risk model
function calculateRisk(zone) {
  const baseRisk = {
    low: 0.2,
    medium: 0.5,
    high: 0.8
  };

  // Add randomness (simulating real-world AI prediction)
  let randomFactor = Math.random() * 0.2;

  return (baseRisk[zone] + randomFactor).toFixed(2);
}

function generatePolicy() {
  const name = document.getElementById("name").value;
  const zone = document.getElementById("zone").value;

  if (name === "") {
    alert("Enter name");
    return;
  }

  riskScore = calculateRisk(zone);

  // Dynamic pricing based on AI risk
  premium = Math.round(20 + (riskScore * 30));

  document.getElementById("risk").innerText =
    "Risk Score (AI): " + riskScore;

  document.getElementById("premium").innerText =
    "Weekly Premium: ₹" + premium;
}

// Simulate real-time disruption
function simulateDisruption() {
  if (premium === 0) {
    alert("Create policy first!");
    return;
  }

  let disruptionProbability = riskScore;

  if (Math.random() < disruptionProbability) {
    let payoutAmount = premium * 3;

    document.getElementById("status").innerText =
      "Disruption Detected";

    document.getElementById("payout").innerText =
      "₹" + payoutAmount + " Credited Instantly";
  } else {
    document.getElementById("status").innerText =
      "No Disruption Detected";

    document.getElementById("payout").innerText = "";
  }
}
