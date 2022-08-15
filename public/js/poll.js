const pollTitle = document.querySelector('input[name="poll-title"').value;
const pollContent = document.querySelector('textarea[name="poll-content"').value.trim();
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
    options: {indexAxis: 'y'}
  };

  const myChart = new Chart(
    document.getElementById('test-chart'),
    config
  );