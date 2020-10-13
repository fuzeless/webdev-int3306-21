class TemplateProcessor {
  constructor(template) {
    this.template = template;
  }

  fillIn(dictionary) {
    // let returnString = template.replace(/{{day}}/g, dictionary.day).replace(/{{month}}/g, dictionary.month).replace(/{{year}}/g, dictionary.year);
    let returnString = template;
    for (let key in dictionary) {
      returnString = returnString.replace(new RegExp(`{{${key}}}`), dictionary[key]);
    }
    return returnString.replace(/{{\S*}}/g, "");
  }
}