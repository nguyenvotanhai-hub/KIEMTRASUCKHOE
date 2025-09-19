let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.remove("active");
    if (i === index) step.classList.add("active");
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

document.getElementById("healthForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Lấy dữ liệu
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value) / 100;
  let temp = parseFloat(document.getElementById("temperature").value);
  let heart = parseInt(document.getElementById("heartRate").value);
  let sys = parseInt(document.getElementById("systolic").value);
  let dia = parseInt(document.getElementById("diastolic").value);

  // Tính BMI
  let bmi = (weight / (height * height)).toFixed(1);

  // Kết quả
  let result = `<h2>Kết quả của bạn</h2>`;
  result += `<p><b>BMI:</b> ${bmi}</p>`;
  result += `<p><b>Nhiệt độ:</b> ${temp}°C</p>`;
  result += `<p><b>Nhịp tim:</b> ${heart} lần/phút</p>`;
  result += `<p><b>Huyết áp:</b> ${sys}/${dia} mmHg</p>`;

  // Nhận xét nhanh
  if (bmi < 18.5) result += "<p>👉 Bạn hơi gầy, nên bổ sung dinh dưỡng.</p>";
  else if (bmi < 23) result += "<p>👍 Bạn có cân nặng bình thường.</p>";
  else result += "<p>⚠️ Bạn có dấu hiệu thừa cân, nên tập thể dục.</p>";

  if (temp < 36) result += "<p>⚠️ Nhiệt độ thấp, có thể bị hạ thân nhiệt.</p>";
  else if (temp > 37.5) result += "<p>⚠️ Có thể bị sốt, nên theo dõi thêm.</p>";
  else result += "<p>👍 Nhiệt độ cơ thể bình thường.</p>";

  if (heart < 60) result += "<p>⚠️ Nhịp tim chậm hơn mức bình thường.</p>";
  else if (heart > 100) result += "<p>⚠️ Nhịp tim nhanh, nên nghỉ ngơi.</p>";
  else result += "<p>👍 Nhịp tim bình thường.</p>";

  if (sys < 90 || dia < 60) result += "<p>⚠️ Huyết áp thấp.</p>";
  else if (sys > 140 || dia > 90) result += "<p>⚠️ Huyết áp cao.</p>";
  else result += "<p>👍 Huyết áp bình thường.</p>";

  document.getElementById("result").innerHTML = result;
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("reference").classList.remove("hidden");
});
