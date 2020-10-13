class TemplateProcessor {
  constructor(template) {
    this.template = template;
  }

  fillIn(dictionary) {
    return template.replace(/{{day}}/g, dictionary.day).replace(/{{month}}/g, dictionary.month).replace(/{{year}}/g, dictionary.year);
  }
}