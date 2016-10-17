/* globals $ */
import cleanPastedHTML from './trumbowyg_scripts';

export default function() {
  // start Trumbowyg
  $('.limeade-description').trumbowyg({
    btns: [
      ['viewHTML'],
      ['formatting'],
      'btnGrp-semantic',
      'underline',
      ['superscript', 'subscript'],
      ['link'],
      ['insertImage'],
      'btnGrp-justify',
      'btnGrp-lists',
      ['horizontalRule'],
      ['removeformat'],
      ['fullscreen']
    ]
  })
  .on('tbwpaste', (event) => {
    event.target.innerHTML = cleanPastedHTML(event.target.innerHTML);
  });
}
