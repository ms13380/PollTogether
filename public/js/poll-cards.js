const pollIDs = document.querySelectorAll('input[name="poll-id"');
const pollTitles = document.querySelectorAll('input[name="poll-title"');
const pollContents = document.querySelectorAll('textarea[name="poll-content"');
for (let i = 0; i < pollTitles.length; i++) {
  let pollID = pollIDs[i].value;
  let pollTitle = pollTitles[i].value;
  let pollContent = pollContents[i].value.trim();

  const pollValues = pollContent.split('\n');

  const labels = [];
  const answers = [];

  for (let option of pollValues) {
      labels.push(option.substring(0, option.lastIndexOf(':')));
      answers.push(option.substring(option.lastIndexOf(':') + 1));
  }

  const data = {
    labels: labels,
    datasets: [{
        axis: 'y',
        label: pollTitle,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: answers,
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y',
      // categoryThickness: 40,
      // barThickness: 30,
      responsive: true,
      plugins: {
        legend: {display: false},
      }
    }
  };

  const myChart = new Chart(
    document.getElementById(`chart-${pollID}`),
    config
  );
}