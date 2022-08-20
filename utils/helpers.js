const { options } = require("../controllers");

module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()} (${new Date(date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})})`;
  },
  possessive_grammar: (name) => {
    if(name) {
      if (name.charAt(name.length - 1) === 's')
        return name + '\'';
      else {
        return name + '\'s';
      } 
    }
    return "";
  },
  format_content: (text) => {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  },
  desc_preview: (text) => {
    if (text.length > 200) {
      return text.slice(0, 200).trim() + '...';
    }
    return text;
  },
  chart_size: (optionsList) => {
    return (optionsList.length * 20) + 'px'
  }
};
