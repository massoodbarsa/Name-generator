
export default function(form){
    switch (form.radio) {
      case 'Classic':
        return `${form.name} and brothers`
      case 'Business':
        return `${form.name} Corp`
      default:
        // this will be Hipster
      return `${form.name} ${getMessage()}`
    }
}

function getMessage() {
  let messages = ["Menyuch", "Djasus", "Mohandis"];
  return messages[Math.floor(Math.random() * messages.length)];
}
