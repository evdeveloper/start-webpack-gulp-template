export function dynamicTextarea(field) {
  field.addEventListener("input", function(){
    if(this.offsetHeight < this.scrollHeight) {
      this.style.height = `${this.scrollHeight}px`;
    }
  }, false);
}