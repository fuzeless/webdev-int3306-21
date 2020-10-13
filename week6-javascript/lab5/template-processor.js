class TemplateProcessor {
  constructor(template) {
    this.template = template;
  }

  fillIn(dictionary) {
    let returnString = template;
    // let returnString = template.replace(/{{day}}/g, dictionary.day).replace(/{{month}}/g, dictionary.month).replace(/{{year}}/g, dictionary.year);
    // for (let key in dictionary) {
    //   returnString = returnString.replace(new RegExp(`{{${key}}}`), dictionary[key]);
    // }
    // return returnString.replace(/{{\S*}}/g, "");
    let regex = /{{\S+}}/g;
    template.match(regex).forEach(e => {
      let key = e.replace(/^{{/, "").replace(/}}$/, "");
      returnString = returnString.replace(new RegExp(e,'g'), dictionary[key] ? dictionary[key] : "");
    })
    return returnString;
  }
}